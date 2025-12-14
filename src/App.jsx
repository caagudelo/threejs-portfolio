
import React, { useEffect, useRef, useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { createSolarSystem } from './three/SolarSystem';
import { fetchGithubRepos } from './three/githubApi';

export default function App() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const frameIdRef = useRef(null);
  const starFieldRef = useRef(null);
  const galaxyGroupRef = useRef(null);
  const galaxiesRef = useRef([]);
  const meteorGroupRef = useRef(null);
  const meteorsRef = useRef([]);
  const solarGroupRef = useRef(null);
  const planetMeshesRef = useRef([]);
  const hoveredPlanetRef = useRef(null);
  const selectedPlanetRef = useRef(null);
  const controlsRef = useRef(null);
  const composerRef = useRef(null);
  const bloomPassRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const cameraFocusRef = useRef(null);
  const cameraFollowRef = useRef(null);
  const defaultCameraStateRef = useRef({ position: null, target: null, direction: null, distance: null });
  const pointerRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerStateRef = useRef({ isDown: false, isDragging: false, startX: 0, startY: 0 });
  const vectorHelpersRef = useRef({
    target: new THREE.Vector3(),
    desired: new THREE.Vector3(),
    offset: new THREE.Vector3(),
  });

  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [errorRepos, setErrorRepos] = useState(null);
  const [hoveredRepo, setHoveredRepo] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const portfolioStats = useMemo(() => {
    if (!repos || repos.length === 0) {
      return {
        totalRepos: 0,
        totalStars: 0,
        totalForks: 0,
        topLanguages: [],
      };
    }
    const totals = repos.reduce((acc, repo) => {
      acc.totalStars += repo.stargazers_count || 0;
      acc.totalForks += repo.forks || 0;
      const lang = repo.language || 'Sin lenguaje';
      acc.languages[lang] = (acc.languages[lang] || 0) + 1;
      return acc;
    }, { totalStars: 0, totalForks: 0, languages: {} });

    const topLanguages = Object.entries(totals.languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([language, count]) => ({ language, count }));

    return {
      totalRepos: repos.length,
      totalStars: totals.totalStars,
      totalForks: totals.totalForks,
      topLanguages,
    };
  }, [repos]);

  const resetPlanetAppearance = (planet) => {
    if (!planet || !planet.userData) {
      return;
    }
    const { group, glow, baseGlowOpacity, rim, baseRimScale, baseRimBias } = planet.userData;
    if (group) {
      group.scale.set(1, 1, 1);
    }
    if (glow && glow.material) {
      const base = baseGlowOpacity ?? 0.28;
      glow.material.opacity = base;
    }
    if (rim && rim.material && rim.material.uniforms) {
      const { fresnelScale, fresnelBias } = rim.material.uniforms;
      if (fresnelScale && Number.isFinite(baseRimScale)) {
        fresnelScale.value = baseRimScale;
      }
      if (fresnelBias && Number.isFinite(baseRimBias)) {
        fresnelBias.value = baseRimBias;
      }
    }
  };

  const emphasizePlanet = (planet, { scale = 1.18, glowMultiplier = 1.8 } = {}) => {
    if (!planet || !planet.userData) {
      return;
    }
    const { group, glow, baseGlowOpacity, highlightGlowOpacity, rim, highlightRimScale, highlightRimBias } = planet.userData;
    if (group) {
      group.scale.set(scale, scale, scale);
    }
    if (glow && glow.material) {
      const highlight = highlightGlowOpacity ?? baseGlowOpacity ?? 0.28;
      glow.material.opacity = Math.min(0.85, highlight * glowMultiplier);
    }
    if (rim && rim.material && rim.material.uniforms) {
      const { fresnelScale, fresnelBias } = rim.material.uniforms;
      if (fresnelScale && Number.isFinite(highlightRimScale)) {
        fresnelScale.value = highlightRimScale;
      }
      if (fresnelBias && Number.isFinite(highlightRimBias)) {
        fresnelBias.value = highlightRimBias;
      }
    }
  };

  const scheduleCameraFocus = (targetVec, { distance, direction, followPlanet = null, maintainFollow = false } = {}) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const clock = clockRef.current;
    if (!camera || !controls || !clock || !targetVec) {
      return;
    }

    const startPos = camera.position.clone();
    const startTarget = controls.target.clone();

    let offsetDir;
    if (direction) {
      offsetDir = direction.clone();
    } else {
      offsetDir = new THREE.Vector3().subVectors(camera.position, controls.target);
    }
    if (offsetDir.lengthSq() < 1e-6) {
      offsetDir.set(0, 0.6, 1);
    }
    offsetDir.normalize();

    let desiredDistance = distance;
    if (!Number.isFinite(desiredDistance) || desiredDistance <= 0) {
      desiredDistance = new THREE.Vector3().subVectors(camera.position, controls.target).length() || 60;
    }

    const endTarget = targetVec.clone();
    const offset = offsetDir.clone().multiplyScalar(desiredDistance);
    const endPos = endTarget.clone().add(offset);

    cameraFocusRef.current = {
      startPos,
      endPos,
      startTarget,
      endTarget,
      offset,
      followPlanet,
      maintainFollow,
      duration: 1.2,
      startTime: clock.getElapsedTime(),
    };
  };

  const resetCameraFocus = () => {
    const defaults = defaultCameraStateRef.current;
    if (!defaults || !defaults.target || !defaults.direction) {
      return;
    }
    cameraFollowRef.current = null;
    scheduleCameraFocus(defaults.target.clone(), {
      distance: defaults.distance,
      direction: defaults.direction,
      followPlanet: null,
      maintainFollow: false,
    });
  };

  const focusOnPlanet = (planet) => {
    if (!planet || !planet.userData || !planet.userData.group) {
      return;
    }
    const worldPosition = new THREE.Vector3();
    planet.userData.group.getWorldPosition(worldPosition);
    const planetSize = planet.geometry?.parameters?.radius || 5;
    const desiredDistance = Math.max(35, planetSize * 9);
    cameraFollowRef.current = null;
    scheduleCameraFocus(worldPosition, {
      distance: desiredDistance,
      followPlanet: planet,
      maintainFollow: true,
    });
  };

  const clearSelection = () => {
    if (selectedPlanetRef.current) {
      resetPlanetAppearance(selectedPlanetRef.current);
      selectedPlanetRef.current = null;
    }
    setSelectedRepo(null);
    if (hoveredPlanetRef.current) {
      resetPlanetAppearance(hoveredPlanetRef.current);
      hoveredPlanetRef.current = null;
    }
    setHoveredRepo(null);
    resetCameraFocus();
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) {
      return undefined;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.set(0, 40, 180);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x050510, 1);
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.physicallyCorrectLights = true;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = true;
    controls.minDistance = 28;
    controls.maxDistance = 900;
    controls.target.set(0, 0, 0);
    controls.zoomSpeed = 0.9;
    controls.rotateSpeed = 0.45;
    controls.panSpeed = 0.45;
    controlsRef.current = controls;

      const initialOffset = camera.position.clone().sub(controls.target);
      if (initialOffset.lengthSq() < 1e-6) {
        initialOffset.set(0, 0.6, 1);
      }
      defaultCameraStateRef.current = {
        position: camera.position.clone(),
        target: controls.target.clone(),
        direction: initialOffset.clone().normalize(),
        distance: initialOffset.length(),
      };

    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(window.devicePixelRatio || 1);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.6, 0.4, 0.78);
    bloomPass.threshold = 0.28;
    bloomPass.strength = 0.85;
    bloomPass.radius = 0.38;
    composer.addPass(bloomPass);
    const filmPass = new FilmPass(0.15, 0.03, 648, false);
    composer.addPass(filmPass);
    composerRef.current = composer;
    bloomPassRef.current = bloomPass;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.68);
    const hemisphereLight = new THREE.HemisphereLight(0xdfe6ff, 0x080b16, 0.45);
    const pointLight = new THREE.PointLight(0xfff4d2, 1.65, 0, 2);
    pointLight.position.set(90, 120, 180);
    scene.add(ambientLight);
    scene.add(hemisphereLight);
    scene.add(pointLight);

    const particles = 1300;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    for (let i = 0; i < particles; i += 1) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 1200;
      positions[index + 1] = (Math.random() - 0.5) * 1200;
      positions[index + 2] = (Math.random() - 0.5) * 1200;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starCanvas = document.createElement('canvas');
    starCanvas.width = 128;
    starCanvas.height = 128;
    const starCtx = starCanvas.getContext('2d');
    const gradient = starCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.45, 'rgba(255, 255, 255, 0.55)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    starCtx.fillStyle = gradient;
    starCtx.fillRect(0, 0, 128, 128);
    const starTexture = new THREE.CanvasTexture(starCanvas);
    starTexture.colorSpace = THREE.SRGBColorSpace;
    starTexture.magFilter = THREE.LinearFilter;
    starTexture.minFilter = THREE.LinearMipmapLinearFilter;
    starTexture.generateMipmaps = true;

    const starMaterial = new THREE.PointsMaterial({
      map: starTexture,
      color: new THREE.Color(0xeaf5ff),
      size: 1.9,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.46,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);
    starFieldRef.current = starField;

    const galaxyGroup = new THREE.Group();
    scene.add(galaxyGroup);
    galaxyGroupRef.current = galaxyGroup;

    const createGalaxyTexture = (stops) => {
      const galaxyCanvas = document.createElement('canvas');
      galaxyCanvas.width = 256;
      galaxyCanvas.height = 256;
      const galaxyCtx = galaxyCanvas.getContext('2d');
      const radial = galaxyCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
      stops.forEach(({ offset, color }) => radial.addColorStop(offset, color));
      galaxyCtx.fillStyle = radial;
      galaxyCtx.fillRect(0, 0, 256, 256);
      const texture = new THREE.CanvasTexture(galaxyCanvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.generateMipmaps = true;
      return texture;
    };

    const galaxySpecs = [
      [{ offset: 0, color: 'rgba(255, 240, 255, 0.92)' }, { offset: 0.28, color: 'rgba(177, 135, 255, 0.38)' }, { offset: 0.68, color: 'rgba(64, 73, 173, 0.12)' }, { offset: 1, color: 'rgba(15, 18, 42, 0)' }],
      [{ offset: 0, color: 'rgba(255, 250, 244, 0.9)' }, { offset: 0.3, color: 'rgba(255, 180, 122, 0.32)' }, { offset: 0.72, color: 'rgba(111, 62, 121, 0.1)' }, { offset: 1, color: 'rgba(20, 12, 28, 0)' }],
      [{ offset: 0, color: 'rgba(238, 252, 255, 0.86)' }, { offset: 0.34, color: 'rgba(126, 205, 255, 0.34)' }, { offset: 0.74, color: 'rgba(42, 96, 158, 0.12)' }, { offset: 1, color: 'rgba(6, 15, 35, 0)' }],
      [{ offset: 0, color: 'rgba(255, 255, 245, 0.86)' }, { offset: 0.32, color: 'rgba(210, 150, 255, 0.32)' }, { offset: 0.76, color: 'rgba(86, 56, 132, 0.1)' }, { offset: 1, color: 'rgba(10, 10, 25, 0)' }],
    ];

    const galaxies = [];
    const galaxyCount = 6;
    for (let i = 0; i < galaxyCount; i += 1) {
      const stops = galaxySpecs[i % galaxySpecs.length];
      const texture = createGalaxyTexture(stops);
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: new THREE.Color(0xffffff),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0.5,
      });
      const sprite = new THREE.Sprite(material);
      const scale = 110 + Math.random() * 70;
      sprite.scale.set(scale, scale, 1);
      const distance = 1180 + Math.random() * 620;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      const position = new THREE.Vector3().setFromSphericalCoords(distance, phi, theta);
      sprite.position.copy(position);
      sprite.position.y *= 0.45;
      material.rotation = Math.random() * Math.PI * 2;
      const baseOpacity = 0.12 + Math.random() * 0.08;
      material.opacity = baseOpacity;
      galaxyGroup.add(sprite);
      galaxies.push({
        sprite,
        material,
        texture,
        baseOpacity,
        rotationSpeed: 0.00008 + Math.random() * 0.00016,
        pulseSpeed: 0.12 + Math.random() * 0.18,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    galaxiesRef.current = galaxies;

    const meteorGroup = new THREE.Group();
    scene.add(meteorGroup);
    meteorGroupRef.current = meteorGroup;

    const meteorGeometry = new THREE.SphereGeometry(0.55, 14, 12);
    const meteorMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x8a8078),
      emissive: new THREE.Color(0xffc58a),
      emissiveIntensity: 0.32,
      roughness: 0.46,
      metalness: 0.12,
    });
    const baseTrailMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd7a6,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const trailGeometry = new THREE.ConeGeometry(0.28, 2.6, 12, 1, true);

    const meteorForward = new THREE.Vector3(1, 0, 0);
    const targetHelper = new THREE.Vector3();
    const directionHelper = new THREE.Vector3();

    const spawnMeteor = (meteorData) => {
      const radius = 260 + Math.random() * 240;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 120;
      meteorData.mesh.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);

      targetHelper.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 80);
      directionHelper.copy(targetHelper).sub(meteorData.mesh.position);
      if (directionHelper.lengthSq() < 1e-6) {
        directionHelper.set(1, 0.08, 0.02);
      }
      directionHelper.normalize();

      const speed = 0.45 + Math.random() * 0.35;
      meteorData.velocity.copy(directionHelper).multiplyScalar(speed);
      meteorData.speed = speed;
      meteorData.mesh.quaternion.setFromUnitVectors(meteorForward, directionHelper);
      meteorData.mesh.rotateOnAxis(meteorForward, Math.random() * Math.PI);
      meteorData.rotationSpeed = 0.006 + Math.random() * 0.016;
      meteorData.travelDistance = 0;
      meteorData.maxDistance = 420 + Math.random() * 220;
      meteorData.pulsePhase = Math.random() * Math.PI * 2;
      if (meteorData.core) {
        meteorData.core.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      }
      if (meteorData.trail && meteorData.trail.material) {
        meteorData.trail.material.opacity = 0.24;
      }
    };

    const meteorEntries = [];
    const meteorCount = 6;
    for (let i = 0; i < meteorCount; i += 1) {
      const meteor = new THREE.Group();
      const core = new THREE.Mesh(meteorGeometry, meteorMaterial);
      core.scale.set(1.6, 0.75, 0.75);
      meteor.add(core);

      const trail = new THREE.Mesh(trailGeometry, baseTrailMaterial.clone());
      trail.position.set(-1.5, 0, 0);
      trail.rotation.z = Math.PI / 2;
      meteor.add(trail);

      meteorGroup.add(meteor);
      const entry = {
        mesh: meteor,
        core,
        trail,
        velocity: new THREE.Vector3(),
        speed: 0,
        rotationSpeed: 0,
        travelDistance: 0,
        maxDistance: 0,
        pulsePhase: Math.random() * Math.PI * 2,
      };
      spawnMeteor(entry);
      meteorEntries.push(entry);
    }
    meteorsRef.current = meteorEntries;

    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) {
        return;
      }
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
      if (composerRef.current) {
        composerRef.current.setPixelRatio(window.devicePixelRatio || 1);
        composerRef.current.setSize(newWidth, newHeight);
      }
      if (bloomPassRef.current) {
        bloomPassRef.current.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    const castRay = (type) => {
      const camera = cameraRef.current;
      const rendererInstance = rendererRef.current;
      if (!camera || !rendererInstance || planetMeshesRef.current.length === 0) {
        if (type === 'hover') {
          rendererInstance && (rendererInstance.domElement.style.cursor = 'default');
          setHoveredRepo(null);
        }
        return;
      }

      raycasterRef.current.setFromCamera(pointerRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(planetMeshesRef.current, false);
      const hit = intersects.find((intersect) => intersect.object.userData.repo);

      if (type === 'hover') {
        if (hit) {
          const planet = hit.object;
          if (hoveredPlanetRef.current && hoveredPlanetRef.current !== planet && hoveredPlanetRef.current !== selectedPlanetRef.current) {
            resetPlanetAppearance(hoveredPlanetRef.current);
          }
          if (planet !== selectedPlanetRef.current) {
            emphasizePlanet(planet, { scale: 1.2, glowMultiplier: 2.1 });
          } else {
            emphasizePlanet(planet, { scale: 1.32, glowMultiplier: 2.6 });
          }
          hoveredPlanetRef.current = planet;
          setHoveredRepo(planet.userData.repo);
          rendererInstance.domElement.style.cursor = 'pointer';
        } else if (hoveredPlanetRef.current) {
          if (hoveredPlanetRef.current !== selectedPlanetRef.current) {
            resetPlanetAppearance(hoveredPlanetRef.current);
          } else {
            emphasizePlanet(hoveredPlanetRef.current, { scale: 1.32, glowMultiplier: 2.6 });
          }
          hoveredPlanetRef.current = null;
          setHoveredRepo(null);
          rendererInstance.domElement.style.cursor = 'default';
        }
      } else if (type === 'click') {
        if (hit) {
          const planet = hit.object;
          if (selectedPlanetRef.current && selectedPlanetRef.current !== planet) {
            resetPlanetAppearance(selectedPlanetRef.current);
          }
          if (selectedPlanetRef.current === planet) {
            resetPlanetAppearance(planet);
            selectedPlanetRef.current = null;
            setSelectedRepo(null);
            hoveredPlanetRef.current = null;
            setHoveredRepo(null);
            resetCameraFocus();
          } else {
            selectedPlanetRef.current = planet;
            emphasizePlanet(planet, { scale: 1.34, glowMultiplier: 2.8 });
            setSelectedRepo(planet.userData.repo);
            hoveredPlanetRef.current = planet;
            setHoveredRepo(planet.userData.repo);
            focusOnPlanet(planet);
          }
        } else if (selectedPlanetRef.current) {
          resetPlanetAppearance(selectedPlanetRef.current);
          selectedPlanetRef.current = null;
          setSelectedRepo(null);
          hoveredPlanetRef.current = null;
          setHoveredRepo(null);
          resetCameraFocus();
        }
      }
    };

    const handlePointerMove = (event) => {
      const rendererInstance = rendererRef.current;
      if (!rendererInstance || !cameraRef.current) {
        return;
      }
      const rect = rendererInstance.domElement.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      if (pointerStateRef.current.isDown && !pointerStateRef.current.isDragging) {
        const dx = event.clientX - pointerStateRef.current.startX;
        const dy = event.clientY - pointerStateRef.current.startY;
        if (Math.sqrt(dx * dx + dy * dy) > 6) {
          pointerStateRef.current.isDragging = true;
          if (hoveredPlanetRef.current && hoveredPlanetRef.current !== selectedPlanetRef.current) {
            resetPlanetAppearance(hoveredPlanetRef.current);
            hoveredPlanetRef.current = null;
            setHoveredRepo(null);
          }
        }
      }
      if (!pointerStateRef.current.isDragging) {
        castRay('hover');
      }
    };

    const handlePointerDown = (event) => {
      pointerStateRef.current = {
        isDown: true,
        isDragging: false,
        startX: event.clientX,
        startY: event.clientY,
      };
    };

    const handlePointerUp = (event) => {
      const state = pointerStateRef.current;
      state.isDown = false;
      if (state.isDragging) {
        state.isDragging = false;
        return;
      }
      const rendererInstance = rendererRef.current;
      if (!rendererInstance) {
        return;
      }
      const rect = rendererInstance.domElement.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      castRay('click');
    };

    const handlePointerLeave = () => {
      pointerStateRef.current.isDown = false;
      pointerStateRef.current.isDragging = false;
      if (hoveredPlanetRef.current && hoveredPlanetRef.current !== selectedPlanetRef.current) {
        resetPlanetAppearance(hoveredPlanetRef.current);
        hoveredPlanetRef.current = null;
      }
      setHoveredRepo(null);
      const rendererInstance = rendererRef.current;
      if (rendererInstance) {
        rendererInstance.domElement.style.cursor = 'default';
      }
    };

    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave);

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      const elapsed = clockRef.current.getElapsedTime();
      if (starFieldRef.current) {
        starFieldRef.current.rotation.y += 0.0004;
        starFieldRef.current.rotation.x += 0.0002;
      }
      if (galaxiesRef.current.length > 0) {
        galaxiesRef.current.forEach((galaxy) => {
          galaxy.material.rotation += galaxy.rotationSpeed;
          const targetOpacity = galaxy.baseOpacity + Math.sin(elapsed * galaxy.pulseSpeed + galaxy.pulsePhase) * galaxy.baseOpacity * 0.18;
          galaxy.material.opacity = THREE.MathUtils.clamp(targetOpacity, galaxy.baseOpacity * 0.6, Math.min(1, galaxy.baseOpacity * 1.25));
        });
      }
      if (meteorsRef.current.length > 0) {
        meteorsRef.current.forEach((meteor) => {
          meteor.mesh.position.add(meteor.velocity);
          meteor.travelDistance += meteor.speed;
          meteor.mesh.rotateOnAxis(meteorForward, meteor.rotationSpeed);
          if (meteor.core) {
            meteor.core.rotation.x += meteor.rotationSpeed * 1.8;
            meteor.core.rotation.y += meteor.rotationSpeed * 2.2;
          }
          if (meteor.trail && meteor.trail.material) {
            meteor.trail.material.opacity = 0.16 + Math.sin(elapsed * 3.8 + meteor.pulsePhase) * 0.07;
          }
          const distanceFromCenter = meteor.mesh.position.length();
          if (meteor.travelDistance > meteor.maxDistance || distanceFromCenter < 18 || distanceFromCenter > 650) {
            spawnMeteor(meteor);
          }
        });
      }
      planetMeshesRef.current.forEach((planet) => {
        const direction = typeof planet.userData.orbitDirection === 'number' ? planet.userData.orbitDirection : 1;
        planet.userData.angle += planet.userData.speed * direction;
        const { radius, angle, group, moon, tilt } = planet.userData;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle) * radius * (tilt || 0);
        if (group) {
          group.position.set(x, y, z);
          group.rotation.y += 0.0004;
        }
        planet.rotation.y += 0.0045;
        if (moon) {
          moon.rotation.y += moon.userData.rotationSpeed;
          const satellite = moon.children[0];
          if (satellite) {
            satellite.rotation.y += moon.userData.rotationSpeed * 1.5;
          }
        }
      });
      if (solarGroupRef.current) {
        solarGroupRef.current.rotation.y += 0.00012;
        const { updatables } = solarGroupRef.current.userData || {};
        if (Array.isArray(updatables)) {
          updatables.forEach((fn) => fn(elapsed));
        }
      }

      if (cameraFocusRef.current && cameraRef.current && controlsRef.current) {
        const focus = cameraFocusRef.current;
        const progress = THREE.MathUtils.clamp((elapsed - focus.startTime) / focus.duration, 0, 1);
        const eased = progress * progress * (3 - 2 * progress);
        cameraRef.current.position.lerpVectors(focus.startPos, focus.endPos, eased);
        controlsRef.current.target.lerpVectors(focus.startTarget, focus.endTarget, eased);
        if (progress >= 1) {
          controlsRef.current.target.copy(focus.endTarget);
          cameraRef.current.position.copy(focus.endPos);
          if (focus.maintainFollow && focus.followPlanet) {
            cameraFollowRef.current = {
              planet: focus.followPlanet,
              offset: focus.offset.clone(),
            };
          } else {
            cameraFollowRef.current = null;
          }
          cameraFocusRef.current = null;
        }
      }

      if (!cameraFocusRef.current && cameraFollowRef.current && cameraRef.current && controlsRef.current) {
        const follow = cameraFollowRef.current;
        const planet = follow.planet;
        if (!planet || !planet.userData || !planet.userData.group) {
          cameraFollowRef.current = null;
        } else {
          const helpers = vectorHelpersRef.current;
          const targetPosition = helpers.target;
          planet.userData.group.getWorldPosition(targetPosition);
          const isDragging = pointerStateRef.current.isDown && pointerStateRef.current.isDragging;
          if (isDragging) {
            follow.offset.copy(cameraRef.current.position).sub(controlsRef.current.target);
            controlsRef.current.target.copy(targetPosition);
          } else {
            controlsRef.current.target.lerp(targetPosition, 0.08);
            const desiredPosition = helpers.desired.copy(targetPosition).add(follow.offset);
            cameraRef.current.position.lerp(desiredPosition, 0.08);
            const currentOffset = helpers.offset.copy(cameraRef.current.position).sub(controlsRef.current.target);
            follow.offset.lerp(currentOffset, 0.12);
          }
        }
      }

      if (controlsRef.current) {
        controlsRef.current.update();
      }
      if (composerRef.current && sceneRef.current && cameraRef.current) {
        composerRef.current.render();
      } else if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
      if (controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current = null;
      }
      if (composerRef.current) {
        composerRef.current.dispose();
        composerRef.current = null;
      }
      bloomPassRef.current = null;
      cameraFocusRef.current = null;
      cameraFollowRef.current = null;
      if (starFieldRef.current) {
        starFieldRef.current.geometry.dispose();
        if (starFieldRef.current.material.map) {
          starFieldRef.current.material.map.dispose();
        }
        starFieldRef.current.material.dispose();
        scene.remove(starFieldRef.current);
        starFieldRef.current = null;
      }
      if (galaxiesRef.current.length > 0) {
        galaxiesRef.current.forEach((galaxy) => {
          galaxy.texture && galaxy.texture.dispose();
          galaxy.material && galaxy.material.dispose();
        });
        galaxiesRef.current = [];
      }
      if (galaxyGroupRef.current) {
        scene.remove(galaxyGroupRef.current);
        galaxyGroupRef.current = null;
      }
      if (meteorsRef.current.length > 0) {
        meteorsRef.current.forEach((meteorEntry) => {
          if (meteorEntry.trail && meteorEntry.trail.material) {
            meteorEntry.trail.material.dispose();
          }
        });
        meteorsRef.current = [];
      }
      if (meteorGroupRef.current) {
        scene.remove(meteorGroupRef.current);
        meteorGroupRef.current = null;
      }
      meteorGeometry.dispose();
      trailGeometry.dispose();
      meteorMaterial.dispose();
      baseTrailMaterial.dispose();
      if (solarGroupRef.current) {
        disposeSolarSystem(scene, solarGroupRef.current);
        solarGroupRef.current = null;
        planetMeshesRef.current = [];
        hoveredPlanetRef.current = null;
        selectedPlanetRef.current = null;
        setHoveredRepo(null);
        setSelectedRepo(null);
      }
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    let active = true;
    setLoadingRepos(true);
    fetchGithubRepos('caagudelo')
      .then((data) => {
        if (!active) {
          return;
        }
        setRepos(data);
        setLoadingRepos(false);
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setErrorRepos('No se pudieron cargar los repositorios.');
        setLoadingRepos(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || repos.length === 0) {
      return;
    }
    if (solarGroupRef.current) {
      disposeSolarSystem(sceneRef.current, solarGroupRef.current);
      solarGroupRef.current = null;
      planetMeshesRef.current = [];
      hoveredPlanetRef.current = null;
      selectedPlanetRef.current = null;
      setHoveredRepo(null);
      setSelectedRepo(null);
      cameraFollowRef.current = null;
      cameraFocusRef.current = null;
    }
    const { group, planets } = createSolarSystem(repos);
    solarGroupRef.current = group;
    planetMeshesRef.current = planets;
    sceneRef.current.add(group);
  }, [repos]);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#050510', position: 'relative' }} ref={mountRef}>
      <Navbar />
      <div id="info-panel" style={{
        position: 'absolute',
        top: 80,
        left: '3%',
        maxWidth: 320,
        padding: '1.5rem',
        background: 'rgba(10, 12, 24, 0.82)',
        border: '1px solid #00ffd0',
        borderRadius: '1.2rem',
        color: '#fff',
        zIndex: 16,
        pointerEvents: 'auto',
        boxShadow: '0 6px 28px rgba(0,0,0,0.45)'
      }}>
        <h2 style={{margin:'0 0 0.6rem', fontSize:'1.4rem', color:'#00ffd0'}}>Atlas Galáctico</h2>
        <p style={{margin:'0 0 0.8rem', fontSize:'0.95rem', lineHeight:1.4}}>
          Explora tus repositorios representados como planetas. Desplaza el cursor para descubrirlos y haz clic para revelar sus detalles.
        </p>
        {loadingRepos && <p style={{color:'#8ea6ff'}}>Cargando constelaciones...</p>}
        {errorRepos && <p style={{color:'#ff7185'}}>{errorRepos}</p>}
        {!loadingRepos && !errorRepos && (
          <div style={{fontSize:'0.9rem', lineHeight:1.5}}>
            <div><strong>Repositorios:</strong> {portfolioStats.totalRepos}</div>
            <div><strong>Stars:</strong> {portfolioStats.totalStars}</div>
            <div><strong>Forks:</strong> {portfolioStats.totalForks}</div>
            {portfolioStats.topLanguages.length > 0 && (
              <div style={{marginTop:8}}>
                <strong>Lenguajes destacados:</strong>
                <div>
                  {portfolioStats.topLanguages.map((entry) => (
                    <span key={entry.language} style={{display:'inline-block', marginRight:8}}>
                      {entry.language} ({entry.count})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Contact />
      {hoveredRepo && !selectedRepo && (
        <div style={{
          position: 'absolute',
          bottom: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '1rem 1.5rem',
          background: 'rgba(10, 12, 24, 0.8)',
          border: '1px solid #00ffd0',
          borderRadius: '1rem',
          color: '#fff',
          zIndex: 15,
          pointerEvents: 'none',
          minWidth: 260,
          textAlign: 'center'
        }}>
          <strong style={{color:'#00ffd0'}}>{hoveredRepo.name}</strong>
          <div style={{fontSize:'0.9rem', marginTop: '0.5rem'}}>{hoveredRepo.description || 'Sin descripción disponible.'}</div>
        </div>
      )}
      {selectedRepo && (
        <div style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          padding: '1.5rem',
          background: 'rgba(10, 12, 24, 0.92)',
          border: '1px solid #00ffd0',
          borderRadius: '1.2rem',
          color: '#fff',
          zIndex: 20,
          maxWidth: 320,
        }}>
          <h3 style={{marginTop:0, color:'#00ffd0'}}>{selectedRepo.name}</h3>
          <p style={{fontSize:'0.95rem'}}>{selectedRepo.description || 'Sin descripción disponible.'}</p>
          <p style={{fontSize:'0.85rem', marginBottom:'0.5rem'}}>Lenguaje: {selectedRepo.language || 'Sin lenguaje'} • ⭐ {selectedRepo.stargazers_count ?? 0} • Forks {selectedRepo.forks ?? 0} • Watchers {selectedRepo.watchers ?? selectedRepo.watchers_count ?? 0}</p>
          <p style={{fontSize:'0.8rem', marginBottom:'1rem', color:'#8ea6ff'}}>Actualizado: {selectedRepo.updated_at ? new Date(selectedRepo.updated_at).toLocaleDateString() : 'Fecha no disponible'}</p>
          <div style={{display:'flex',gap:'0.5rem',justifyContent:'flex-end'}}>
            <button
              type="button"
              onClick={clearSelection}
              style={{
                padding:'0.5rem 0.8rem',
                borderRadius:8,
                border:'1px solid #00ffd0',
                background:'transparent',
                color:'#00ffd0',
                cursor:'pointer'
              }}
            >Cerrar</button>
            <button
              type="button"
              onClick={() => window.open(selectedRepo.html_url, '_blank', 'noopener,noreferrer')}
              style={{
                padding:'0.5rem 0.8rem',
                borderRadius:8,
                border:'none',
                background:'#00ffd0',
                color:'#081018',
                fontWeight:700,
                cursor:'pointer'
              }}
            >Ver en GitHub</button>
          </div>
        </div>
      )}
    </div>
  );
}

function disposeSolarSystem(scene, group) {
  group.traverse((child) => {
    if (child.geometry && child.geometry.dispose) {
      child.geometry.dispose();
    }
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => mat && mat.dispose && mat.dispose());
      } else if (child.material.dispose) {
        child.material.dispose();
      }
    }
  });
  scene.remove(group);
}
