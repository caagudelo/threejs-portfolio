
import React, { useEffect, useRef, useState, useMemo } from 'react';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { createSolarSystem } from './three/SolarSystem';
import { fetchGithubRepos } from './three/githubApi';
import { fetchExperiences } from './services/experiencesApi';

const experienceDateFormatter = new Intl.DateTimeFormat('es-ES', {
  month: 'short',
  year: 'numeric',
});

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
  const interactableMeshesRef = useRef([]);
  const sunRef = useRef({ core: null, halo: null, rim: null, group: null });
  const sunSelectedRef = useRef(false);
  const hoveredSunRef = useRef(false);
  const spaceshipRef = useRef({ mesh: null, group: null });
  const spaceshipSelectedRef = useRef(false);
  const hoveredSpaceshipRef = useRef(false);

  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [errorRepos, setErrorRepos] = useState(null);
  const [hoveredRepo, setHoveredRepo] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const [experiencesData, setExperiencesData] = useState([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [errorExperiences, setErrorExperiences] = useState(null);

  const [profileData, setProfileData] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [errorProfile, setErrorProfile] = useState(null);

  const [sunHovered, setSunHovered] = useState(false);
  const [sunInfoVisible, setSunInfoVisible] = useState(false);
  const [spaceshipHovered, setSpaceshipHovered] = useState(false);
  const [spaceshipInfoVisible, setSpaceshipInfoVisible] = useState(false);
  const [atlasCollapsed, setAtlasCollapsed] = useState(true);

  const socialLinks = useMemo(() => ([
    { name: 'LinkedIn', src: 'https://www.linkedin.com/in/camilo-andres-agudelo-b53728a2/' },
    { name: 'GitHub', src: 'https://github.com/caagudelo' },
    { name: 'Contacto', src: 'mailto:caagudelo.dev@gmail.com' },
  ]), []);

  const experiencesTimeline = useMemo(() => {
    if (!Array.isArray(experiencesData)) {
      return [];
    }

    const parseDate = (value) => {
      if (!value) {
        return null;
      }
      const parsed = new Date(value);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    };

    return experiencesData
      .map((entry, index) => {
        const startDate = parseDate(entry.start_date_experience ?? entry.startDate ?? entry.start);
        const endDate = parseDate(entry.end_date_experience ?? entry.endDate ?? entry.end);
        const isCurrent = Boolean(entry.is_current_experience ?? entry.is_current ?? entry.current ?? (!endDate));
        const formattedStart = startDate ? experienceDateFormatter.format(startDate) : 'Sin fecha';
        const formattedEnd = isCurrent ? 'Actualidad' : (endDate ? experienceDateFormatter.format(endDate) : 'Actualidad');
        return {
          id: entry.id ?? `${entry.company ?? entry.company_experience ?? 'exp'}-${index}`,
          company: entry.company_experience ?? entry.company ?? entry.organization ?? 'Compañía no especificada',
          role: entry.role ?? entry.charge_experience ?? entry.title ?? 'Rol no especificado',
          description: entry.description_experience ?? entry.description ?? entry.summary ?? '',
          link: entry.link ?? entry.company_link_experience ?? entry.url ?? null,
          period: `${formattedStart} – ${formattedEnd}`,
          isCurrent,
          sortValue: startDate ? startDate.getTime() : Number.MIN_SAFE_INTEGER,
        };
      })
      .sort((a, b) => b.sortValue - a.sortValue);
  }, [experiencesData]);

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

  const resetSunAppearance = () => {
    const sun = sunRef.current;
    if (!sun || !sun.core) {
      return;
    }
    const { group, halo, rim } = sun;
    const baseScale = sun.core.userData?.baseScale ?? 1;
    if (group) {
      group.scale.setScalar(baseScale);
    }
    if (halo && halo.material) {
      const baseHalo = sun.core.userData?.baseHaloOpacity ?? halo.material.opacity;
      halo.material.opacity = baseHalo;
    }
    if (rim && rim.material && rim.material.uniforms && rim.material.uniforms.fresnelBias) {
      const baseBias = sun.core.userData?.baseRimBias ?? rim.material.uniforms.fresnelBias.value;
      rim.material.uniforms.fresnelBias.value = baseBias;
    }
  };

  const emphasizeSun = (mode = 'hover') => {
    const sun = sunRef.current;
    if (!sun || !sun.core) {
      return;
    }
    const { group, halo, rim } = sun;
    const baseScale = sun.core.userData?.baseScale ?? 1;
    const highlightScale = sun.core.userData?.highlightScale ?? (baseScale + 0.12);
    const targetScale = mode === 'selected' ? highlightScale + 0.06 : highlightScale;
    if (group) {
      group.scale.setScalar(targetScale);
    }
    if (halo && halo.material) {
      const baseHalo = sun.core.userData?.baseHaloOpacity ?? halo.material.opacity;
      const highlightHalo = sun.core.userData?.highlightHaloOpacity ?? (baseHalo + 0.08);
      halo.material.opacity = mode === 'selected' ? Math.min(0.35, highlightHalo + 0.06) : highlightHalo;
    }
    if (rim && rim.material && rim.material.uniforms && rim.material.uniforms.fresnelBias) {
      const highlightBias = sun.core.userData?.highlightRimBias ?? rim.material.uniforms.fresnelBias.value + 0.04;
      rim.material.uniforms.fresnelBias.value = mode === 'selected' ? highlightBias + 0.02 : highlightBias;
    }
  };

  const resetSpaceshipAppearance = () => {
    const spaceship = spaceshipRef.current;
    if (!spaceship || !spaceship.mesh || !spaceship.mesh.userData) {
      return;
    }
    const data = spaceship.mesh.userData;
    if (data.root) {
      data.root.scale.setScalar(data.baseScale || 1);
    }
    data.highlighted = false;
  };

  const emphasizeSpaceship = (mode = 'hover') => {
    const spaceship = spaceshipRef.current;
    if (!spaceship || !spaceship.mesh || !spaceship.mesh.userData) {
      return;
    }
    const data = spaceship.mesh.userData;
    const targetScale = mode === 'selected' ? (data.highlightScale || 1.24) + 0.06 : data.highlightScale || 1.24;
    if (data.root) {
      data.root.scale.setScalar(targetScale);
    }
    data.highlighted = mode === 'hover' || mode === 'selected';
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

  const focusOnSun = () => {
    const sun = sunRef.current;
    if (!sun || !sun.group) {
      return;
    }
    const worldPosition = new THREE.Vector3();
    sun.group.getWorldPosition(worldPosition);
    const customDirection = new THREE.Vector3(0.65, 0.38, 1).normalize();
    scheduleCameraFocus(worldPosition, {
      distance: 78,
      direction: customDirection,
      followPlanet: null,
      maintainFollow: false,
    });
  };

  const focusOnSpaceship = () => {
    const spaceship = spaceshipRef.current;
    if (!spaceship || !spaceship.mesh || !spaceship.mesh.userData) {
      return;
    }
    const worldPosition = new THREE.Vector3();
    spaceship.mesh.getWorldPosition(worldPosition);
    const offsetDirection = new THREE.Vector3(-0.4, 0.35, 1).normalize();
    scheduleCameraFocus(worldPosition, {
      distance: 54,
      direction: offsetDirection,
      followPlanet: null,
      maintainFollow: false,
    });
  };

  const clearSelection = () => {
    if (selectedPlanetRef.current) {
      resetPlanetAppearance(selectedPlanetRef.current);
      selectedPlanetRef.current = null;
    }
    if (sunSelectedRef.current) {
      resetSunAppearance();
      sunSelectedRef.current = false;
    }
    if (spaceshipSelectedRef.current) {
      resetSpaceshipAppearance();
      spaceshipSelectedRef.current = false;
    }
    setSelectedRepo(null);
    if (hoveredPlanetRef.current) {
      resetPlanetAppearance(hoveredPlanetRef.current);
      hoveredPlanetRef.current = null;
    }
    setHoveredRepo(null);
    hoveredSunRef.current = false;
    setSunHovered(false);
    setSunInfoVisible(false);
    hoveredSpaceshipRef.current = false;
    setSpaceshipHovered(false);
    setSpaceshipInfoVisible(false);
    resetCameraFocus();
  };

  const closeSunPanel = () => {
    if (sunSelectedRef.current) {
      resetSunAppearance();
      sunSelectedRef.current = false;
    }
    hoveredSunRef.current = false;
    setSunHovered(false);
    setSunInfoVisible(false);
    resetCameraFocus();
  };

  const closeSpaceshipPanel = () => {
    if (spaceshipSelectedRef.current) {
      resetSpaceshipAppearance();
      spaceshipSelectedRef.current = false;
    }
    hoveredSpaceshipRef.current = false;
    setSpaceshipHovered(false);
    setSpaceshipInfoVisible(false);
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
      const introDirection = defaultCameraStateRef.current.direction.clone();
      const introDistance = Math.max(48, defaultCameraStateRef.current.distance * 0.45);
      const introPosition = controls.target.clone().add(introDirection.multiplyScalar(introDistance));
      camera.position.copy(introPosition);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      requestAnimationFrame(() => {
        scheduleCameraFocus(defaultCameraStateRef.current.target.clone(), {
          distance: defaultCameraStateRef.current.distance,
          direction: defaultCameraStateRef.current.direction.clone(),
          maintainFollow: false,
        });
      });

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
      if (!camera || !rendererInstance || interactableMeshesRef.current.length === 0) {
        if (type === 'hover') {
          rendererInstance && (rendererInstance.domElement.style.cursor = 'default');
          if (hoveredPlanetRef.current && hoveredPlanetRef.current !== selectedPlanetRef.current) {
            resetPlanetAppearance(hoveredPlanetRef.current);
            hoveredPlanetRef.current = null;
          }
          if (!sunSelectedRef.current && hoveredSunRef.current) {
            resetSunAppearance();
            hoveredSunRef.current = false;
            setSunHovered(false);
          }
          setHoveredRepo(null);
        }
        return;
      }

      raycasterRef.current.setFromCamera(pointerRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(interactableMeshesRef.current, false);

      const spaceshipHit = intersects.find((intersect) => {
        const data = intersect.object.userData || {};
        return data.type === 'spaceship';
      });

      let hit = null;
      if (spaceshipHit) {
        hit = spaceshipHit;
      } else {
        hit = intersects.find((intersect) => {
          const data = intersect.object.userData || {};
          return data.type === 'sun' || data.repo;
        });
      }

      if (type === 'hover') {
        if (hit) {
          const target = hit.object;
          const data = target.userData || {};
          if (data.type === 'sun') {
            if (!sunSelectedRef.current) {
              emphasizeSun('hover');
            } else {
              emphasizeSun('selected');
            }
            if (hoveredPlanetRef.current && hoveredPlanetRef.current !== selectedPlanetRef.current) {
              resetPlanetAppearance(hoveredPlanetRef.current);
              hoveredPlanetRef.current = null;
              setHoveredRepo(null);
            }
            if (hoveredSpaceshipRef.current && !spaceshipSelectedRef.current) {
              resetSpaceshipAppearance();
              hoveredSpaceshipRef.current = false;
              setSpaceshipHovered(false);
            }
            hoveredSunRef.current = true;
            setSunHovered(true);
            rendererInstance.domElement.style.cursor = 'pointer';
          } else if (data.type === 'spaceship') {
            if (!spaceshipSelectedRef.current) {
              emphasizeSpaceship('hover');
            } else {
              emphasizeSpaceship('selected');
            }
            if (hoveredPlanetRef.current && hoveredPlanetRef.current !== selectedPlanetRef.current) {
              resetPlanetAppearance(hoveredPlanetRef.current);
              hoveredPlanetRef.current = null;
              setHoveredRepo(null);
            }
            if (hoveredSunRef.current && !sunSelectedRef.current) {
              resetSunAppearance();
              hoveredSunRef.current = false;
              setSunHovered(false);
            }
            hoveredSpaceshipRef.current = true;
            setSpaceshipHovered(true);
            rendererInstance.domElement.style.cursor = 'pointer';
          } else if (data.repo) {
            if (hoveredPlanetRef.current && hoveredPlanetRef.current !== target && hoveredPlanetRef.current !== selectedPlanetRef.current) {
              resetPlanetAppearance(hoveredPlanetRef.current);
            }
            if (target !== selectedPlanetRef.current) {
              emphasizePlanet(target, { scale: 1.2, glowMultiplier: 2.1 });
            } else {
              emphasizePlanet(target, { scale: 1.32, glowMultiplier: 2.6 });
            }
            hoveredPlanetRef.current = target;
            setHoveredRepo(target.userData.repo);
            if (!sunSelectedRef.current && hoveredSunRef.current) {
              resetSunAppearance();
              hoveredSunRef.current = false;
              setSunHovered(false);
            }
            if (!spaceshipSelectedRef.current && hoveredSpaceshipRef.current) {
              resetSpaceshipAppearance();
              hoveredSpaceshipRef.current = false;
              setSpaceshipHovered(false);
            }
            rendererInstance.domElement.style.cursor = 'pointer';
          }
        } else {
          if (hoveredPlanetRef.current) {
            if (hoveredPlanetRef.current !== selectedPlanetRef.current) {
              resetPlanetAppearance(hoveredPlanetRef.current);
            } else {
              emphasizePlanet(hoveredPlanetRef.current, { scale: 1.32, glowMultiplier: 2.6 });
            }
            hoveredPlanetRef.current = null;
          }
          if (!sunSelectedRef.current && hoveredSunRef.current) {
            resetSunAppearance();
            hoveredSunRef.current = false;
            setSunHovered(false);
          }
          if (!spaceshipSelectedRef.current && hoveredSpaceshipRef.current) {
            resetSpaceshipAppearance();
            hoveredSpaceshipRef.current = false;
            setSpaceshipHovered(false);
          }
          setHoveredRepo(null);
          rendererInstance.domElement.style.cursor = 'default';
        }
      } else if (type === 'click') {
        if (hit) {
          const target = hit.object;
          const data = target.userData || {};
          if (data.type === 'sun') {
            if (selectedPlanetRef.current) {
              resetPlanetAppearance(selectedPlanetRef.current);
              selectedPlanetRef.current = null;
              hoveredPlanetRef.current = null;
              setSelectedRepo(null);
              setHoveredRepo(null);
            }
            if (spaceshipSelectedRef.current) {
              resetSpaceshipAppearance();
              spaceshipSelectedRef.current = false;
              hoveredSpaceshipRef.current = false;
              setSpaceshipInfoVisible(false);
              setSpaceshipHovered(false);
            }
            if (sunSelectedRef.current) {
              resetSunAppearance();
              sunSelectedRef.current = false;
              hoveredSunRef.current = false;
              setSunInfoVisible(false);
              setSunHovered(false);
              resetCameraFocus();
            } else {
              sunSelectedRef.current = true;
              hoveredSunRef.current = true;
              emphasizeSun('selected');
              setSunInfoVisible(true);
              setSunHovered(true);
              setHoveredRepo(null);
              focusOnSun();
            }
            return;
          }

          if (data.type === 'spaceship') {
            if (selectedPlanetRef.current) {
              resetPlanetAppearance(selectedPlanetRef.current);
              selectedPlanetRef.current = null;
              hoveredPlanetRef.current = null;
              setSelectedRepo(null);
              setHoveredRepo(null);
            }
            if (sunSelectedRef.current) {
              resetSunAppearance();
              sunSelectedRef.current = false;
              hoveredSunRef.current = false;
              setSunInfoVisible(false);
              setSunHovered(false);
            }
            if (spaceshipSelectedRef.current) {
              resetSpaceshipAppearance();
              spaceshipSelectedRef.current = false;
              hoveredSpaceshipRef.current = false;
              setSpaceshipInfoVisible(false);
              setSpaceshipHovered(false);
              resetCameraFocus();
            } else {
              spaceshipSelectedRef.current = true;
              hoveredSpaceshipRef.current = true;
              emphasizeSpaceship('selected');
              setSpaceshipInfoVisible(true);
              setSpaceshipHovered(true);
              setHoveredRepo(null);
              focusOnSpaceship();
            }
            return;
          }

          if (sunSelectedRef.current) {
            resetSunAppearance();
            sunSelectedRef.current = false;
            hoveredSunRef.current = false;
            setSunInfoVisible(false);
            setSunHovered(false);
          }
          if (spaceshipSelectedRef.current) {
            resetSpaceshipAppearance();
            spaceshipSelectedRef.current = false;
            hoveredSpaceshipRef.current = false;
            setSpaceshipInfoVisible(false);
            setSpaceshipHovered(false);
          }

          const planet = target;
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
        } else {
          if (selectedPlanetRef.current) {
            resetPlanetAppearance(selectedPlanetRef.current);
            selectedPlanetRef.current = null;
          }
          if (sunSelectedRef.current) {
            resetSunAppearance();
            sunSelectedRef.current = false;
            hoveredSunRef.current = false;
            setSunInfoVisible(false);
            setSunHovered(false);
          }
          if (spaceshipSelectedRef.current) {
            resetSpaceshipAppearance();
            spaceshipSelectedRef.current = false;
            hoveredSpaceshipRef.current = false;
            setSpaceshipInfoVisible(false);
            setSpaceshipHovered(false);
          }
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
          if (hoveredSunRef.current && !sunSelectedRef.current) {
            resetSunAppearance();
            hoveredSunRef.current = false;
            setSunHovered(false);
          }
          if (hoveredSpaceshipRef.current && !spaceshipSelectedRef.current) {
            resetSpaceshipAppearance();
            hoveredSpaceshipRef.current = false;
            setSpaceshipHovered(false);
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
      if (hoveredSunRef.current && !sunSelectedRef.current) {
        resetSunAppearance();
        hoveredSunRef.current = false;
        setSunHovered(false);
      }
      if (hoveredSpaceshipRef.current && !spaceshipSelectedRef.current) {
        resetSpaceshipAppearance();
        hoveredSpaceshipRef.current = false;
        setSpaceshipHovered(false);
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
            const satelliteData = satellite.userData || {};
            if (typeof satelliteData.orbitSpeed === 'number') {
              satellite.rotation.y += satelliteData.orbitSpeed;
            } else {
              satellite.rotation.y += moon.userData.rotationSpeed * 1.5;
            }
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
        interactableMeshesRef.current = [];
        sunRef.current = { core: null, halo: null, rim: null, group: null };
        sunSelectedRef.current = false;
        hoveredSunRef.current = false;
        spaceshipRef.current = { mesh: null, group: null };
        spaceshipSelectedRef.current = false;
        hoveredSpaceshipRef.current = false;
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
        const sorted = [...data].sort((a, b) => {
          const getTimestamp = (repo) => {
            const candidates = [repo.updated_at, repo.pushed_at, repo.created_at];
            const validDate = candidates.find((value) => value && !Number.isNaN(Date.parse(value)));
            return validDate ? Date.parse(validDate) : 0;
          };
          return getTimestamp(b) - getTimestamp(a);
        });
        setRepos(sorted);
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
    let active = true;
    setLoadingExperiences(true);
    fetchExperiences()
      .then((data) => {
        if (!active) {
          return;
        }
        setExperiencesData(data);
        setLoadingExperiences(false);
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setErrorExperiences('No se pudieron cargar las experiencias laborales.');
        setLoadingExperiences(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    setLoadingProfile(true);
    setErrorProfile(null);
    fetch('https://api.github.com/users/caagudelo')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub profile request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!active) {
          return;
        }
        setProfileData(data);
        setLoadingProfile(false);
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setErrorProfile('No se pudo cargar el perfil de GitHub.');
        setLoadingProfile(false);
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
      sunRef.current = { core: null, halo: null, rim: null, group: null };
      sunSelectedRef.current = false;
      hoveredSunRef.current = false;
      setSunHovered(false);
      setSunInfoVisible(false);
      interactableMeshesRef.current = [];
      spaceshipRef.current = { mesh: null, group: null };
      spaceshipSelectedRef.current = false;
      hoveredSpaceshipRef.current = false;
      setSpaceshipHovered(false);
      setSpaceshipInfoVisible(false);
    }
    const { group, planets, sun, spaceship } = createSolarSystem(repos);
    solarGroupRef.current = group;
    planetMeshesRef.current = planets;
    sunRef.current = sun || { core: null, halo: null, rim: null, group: null };
    spaceshipRef.current = spaceship || { mesh: null, group: null };
    interactableMeshesRef.current = [...planets];
    if (sun && sun.core) {
      interactableMeshesRef.current.push(sun.core);
    }
    if (spaceship && spaceship.mesh) {
      interactableMeshesRef.current.push(spaceship.mesh);
    }
    hoveredSunRef.current = false;
    sunSelectedRef.current = false;
    setSunHovered(false);
    setSunInfoVisible(false);
    hoveredSpaceshipRef.current = false;
    spaceshipSelectedRef.current = false;
    setSpaceshipHovered(false);
    setSpaceshipInfoVisible(false);
    sceneRef.current.add(group);
  }, [repos]);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#050510', position: 'relative' }} ref={mountRef}>
      <div id="info-panel" style={{
        position: 'absolute',
        top: atlasCollapsed ? 40 : 80,
        left: '3%',
        maxWidth: atlasCollapsed ? 260 : 320,
        padding: atlasCollapsed ? '1rem 1.2rem' : '1.5rem',
        background: 'rgba(10, 12, 24, 0.82)',
        border: '1px solid #00ffd0',
        borderRadius: '1.2rem',
        color: '#fff',
        zIndex: 16,
        pointerEvents: 'auto',
        boxShadow: '0 6px 28px rgba(0,0,0,0.45)',
        transition: 'all 0.25s ease',
      }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.75rem', marginBottom: atlasCollapsed ? 0 : '0.6rem'}}>
          <h2 style={{margin:0, fontSize:'1.4rem', color:'#00ffd0'}}>Atlas Galáctico</h2>
          <button
            type="button"
            onClick={() => setAtlasCollapsed((prev) => !prev)}
            style={{
              border: '1px solid rgba(0,255,208,0.45)',
              background: 'rgba(0,255,208,0.08)',
              color: '#00ffd0',
              borderRadius: '0.8rem',
              padding: '0.35rem 0.8rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: 0.35,
            }}
          >
            {atlasCollapsed ? 'Expandir' : 'Minimizar'}
          </button>
        </div>
        {atlasCollapsed ? (
          <p style={{margin:0, fontSize:'0.82rem', color:'#c4d0ff'}}>
            Panel comprimido. Selecciona "Expandir" para ver estadísticas y habilidades.
          </p>
        ) : (
          <>
            <div style={{display:'flex', flexDirection:'column', gap:'0.75rem', margin:'0 0 1rem'}}>
              <p style={{margin:0, fontSize:'0.96rem', lineHeight:1.5}}>
                Soy Camilo Agudelo, desarrollador de software que disfruta convertir ideas complejas en experiencias fluidas. Domino ecosistemas empresariales y creativos, desde APIs de alto rendimiento hasta interfaces inmersivas.
              </p>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:'0.6rem'}}>
                <div style={{padding:'0.65rem', borderRadius:'0.9rem', background:'rgba(0,255,208,0.08)', border:'1px solid rgba(0,255,208,0.22)'}}>
                  <strong style={{display:'block', fontSize:'0.82rem', color:'#00ffd0', letterSpacing:0.35}}>Back-end</strong>
                  <span style={{fontSize:'0.8rem', color:'#d7dcff'}}>C#, .NET, Java, Node.js, PHP</span>
                </div>
                <div style={{padding:'0.65rem', borderRadius:'0.9rem', background:'rgba(255,179,71,0.08)', border:'1px solid rgba(255,179,71,0.22)'}}>
                  <strong style={{display:'block', fontSize:'0.82rem', color:'#ffb347', letterSpacing:0.35}}>Front-end</strong>
                  <span style={{fontSize:'0.8rem', color:'#f7f0ff'}}>Angular, React, experiencias 3D</span>
                </div>
                <div style={{padding:'0.65rem', borderRadius:'0.9rem', background:'rgba(111,226,255,0.08)', border:'1px solid rgba(111,226,255,0.22)'}}>
                  <strong style={{display:'block', fontSize:'0.82rem', color:'#6fe2ff', letterSpacing:0.35}}>Data & AI</strong>
                  <span style={{fontSize:'0.8rem', color:'#e8f9ff'}}>Python, visión artificial, automatización</span>
                </div>
                <div style={{padding:'0.65rem', borderRadius:'0.9rem', background:'rgba(158,130,255,0.08)', border:'1px solid rgba(158,130,255,0.22)'}}>
                  <strong style={{display:'block', fontSize:'0.82rem', color:'#9fc0ff', letterSpacing:0.35}}>Arquitectura</strong>
                  <span style={{fontSize:'0.8rem', color:'#e1e5ff'}}>Diseño limpio, integración continua, soluciones escalables</span>
                </div>
              </div>
              <p style={{margin:0, fontSize:'0.92rem', lineHeight:1.45, color:'#c4d0ff'}}>
                Cada planeta representa un repositorio clave. Recorre la órbita, identifica tecnologías y descubre cómo aplico estas habilidades en proyectos reales.
              </p>
            </div>
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
          </>
        )}
      </div>
      {sunHovered && !sunInfoVisible && (
        <div style={{
          position: 'absolute',
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0.9rem 1.4rem',
          background: 'rgba(10, 12, 24, 0.82)',
          border: '1px solid #ffb347',
          borderRadius: '0.9rem',
          color: '#fff9f2',
          zIndex: 18,
          pointerEvents: 'none',
          boxShadow: '0 6px 24px rgba(0,0,0,0.45)',
          letterSpacing: 0.3,
        }}>
          Toca el sol para desplegar mi órbita profesional.
        </div>
      )}
      {spaceshipHovered && !spaceshipInfoVisible && (
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '4%',
          padding: '0.8rem 1.3rem',
          background: 'rgba(15, 20, 32, 0.85)',
          border: '1px solid rgba(111, 226, 255, 0.75)',
          borderRadius: '0.9rem',
          color: '#e8f9ff',
          zIndex: 19,
          pointerEvents: 'none',
          boxShadow: '0 6px 24px rgba(0,0,0,0.45)',
          letterSpacing: 0.25,
        }}>
          Activa la nave para acceder a mis redes.
        </div>
      )}
      {sunInfoVisible && (
        <div style={{
          position: 'absolute',
          top: '14%',
          right: '4%',
          width: 'min(420px, 90vw)',
          maxHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem',
          padding: '1.6rem',
          background: 'linear-gradient(145deg, rgba(12,13,28,0.95) 0%, rgba(18,22,44,0.9) 100%)',
          borderRadius: '1.4rem',
          border: '1px solid rgba(255, 179, 71, 0.65)',
          color: '#fff',
          zIndex: 22,
          boxShadow: '0 12px 36px rgba(0,0,0,0.48)',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <h3 style={{ margin: 0, color: '#ffb347', fontSize: '1.4rem' }}>Órbita Profesional</h3>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.9rem', color: '#d7dcff' }}>Una trayectoria iluminada por proyectos y equipos memorables.</p>
            </div>
            <button
              type="button"
              onClick={closeSunPanel}
              style={{
                border: 'none',
                background: 'rgba(255,255,255,0.08)',
                color: '#ffb347',
                width: 36,
                height: 36,
                borderRadius: '50%',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </div>
          {loadingProfile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              borderRadius: '1.1rem',
              border: '1px solid rgba(255,179,71,0.3)',
              background: 'rgba(20, 24, 46, 0.65)',
              color: '#ffd9a1',
              fontSize: '0.9rem',
            }}>
              Cargando perfil...
            </div>
          )}
          {!loadingProfile && errorProfile && (
            <div style={{
              padding: '1rem',
              borderRadius: '1.1rem',
              border: '1px solid rgba(255,124,124,0.6)',
              background: 'rgba(52, 18, 22, 0.65)',
              color: '#ff9fa7',
              fontSize: '0.9rem',
            }}>
              {errorProfile}
            </div>
          )}
          {!loadingProfile && !errorProfile && profileData && (
            <div style={{
              display: 'flex',
              gap: '1.1rem',
              alignItems: 'center',
              padding: '1.1rem',
              borderRadius: '1.2rem',
              border: '1px solid rgba(255,179,71,0.35)',
              background: 'rgba(18, 26, 48, 0.82)',
              boxShadow: '0 8px 26px rgba(0,0,0,0.35)',
            }}>
              <img
                src={profileData.avatar_url}
                alt={profileData.name ? `Avatar de ${profileData.name}` : 'Avatar de perfil'}
                style={{
                  width: 82,
                  height: 82,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,179,71,0.5)',
                  boxShadow: '0 0 18px rgba(255,179,71,0.4)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#ffcf86' }}>{profileData.name || profileData.login || 'Perfil sin nombre'}</h4>
                  {profileData.login && (
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: '#9fb5ff' }}>@{profileData.login}</p>
                  )}
                </div>
                {profileData.bio && (
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.4, color: '#d7dcff' }}>{profileData.bio}</p>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.3rem' }}>
                  {profileData.location && (
                    <span style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '0.6rem',
                      background: 'rgba(255,179,71,0.18)',
                      color: '#ffd9a1',
                      fontSize: '0.75rem',
                      letterSpacing: 0.3,
                    }}>
                      {profileData.location}
                    </span>
                  )}
                  {profileData.company && (
                    <span style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '0.6rem',
                      background: 'rgba(0,255,208,0.15)',
                      color: '#9fffe4',
                      fontSize: '0.75rem',
                      letterSpacing: 0.3,
                    }}>
                      {profileData.company}
                    </span>
                  )}
                  {Number.isFinite(profileData.public_repos) && (
                    <span style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '0.6rem',
                      background: 'rgba(111,226,255,0.15)',
                      color: '#b4f0ff',
                      fontSize: '0.75rem',
                      letterSpacing: 0.3,
                    }}>
                      {profileData.public_repos} repos públicos
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => window.open('https://www.linkedin.com/in/camilo-andres-agudelo-b53728a2/', '_blank', 'noopener,noreferrer')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '0.4rem',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '0.7rem',
                    border: '1px solid rgba(255,179,71,0.6)',
                    background: 'rgba(255,179,71,0.18)',
                    color: '#ffd9a1',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                    letterSpacing: 0.4,
                  }}
                >
                  Ver perfil en LinkedIn ↗
                </button>
              </div>
            </div>
          )}
          <div style={{
            position: 'relative',
            paddingLeft: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            overflowY: 'auto',
            maxHeight: 'calc(70vh - 4.5rem)',
          }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, rgba(255,179,71,0.8) 0%, rgba(0,255,208,0.2) 100%)',
              opacity: 0.65,
            }} />
            {loadingExperiences && (
              <p style={{ color: '#ffd9a1', fontSize: '0.9rem' }}>Cargando trayectoria...</p>
            )}
            {!loadingExperiences && errorExperiences && (
              <p style={{ color: '#ff8b94', fontSize: '0.9rem' }}>{errorExperiences}</p>
            )}
            {!loadingExperiences && !errorExperiences && experiencesTimeline.length === 0 && (
              <p style={{ color: '#d7dcff', fontSize: '0.88rem' }}>Aún no hay experiencias registradas.</p>
            )}
            {!loadingExperiences && !errorExperiences && experiencesTimeline.length > 0 && experiencesTimeline.map((experienceEntry) => (
              <div key={experienceEntry.id} style={{
                position: 'relative',
                padding: '0.9rem 1rem 0.9rem 1.4rem',
                background: 'rgba(15, 18, 36, 0.78)',
                borderRadius: '1rem',
                border: '1px solid rgba(255,179,71,0.35)',
                boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
              }}>
                <span style={{
                  position: 'absolute',
                  left: '-0.55rem',
                  top: '1.1rem',
                  width: '0.9rem',
                  height: '0.9rem',
                  borderRadius: '50%',
                  background: experienceEntry.isCurrent ? 'linear-gradient(135deg, #ffb347 0%, #00ffd0 100%)' : 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                  boxShadow: '0 0 16px rgba(255,179,71,0.7)',
                }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.82rem', letterSpacing: 0.4, color: '#ffd9a1' }}>{experienceEntry.period}</span>
                  <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>{experienceEntry.role}</strong>
                  <span style={{ fontSize: '0.92rem', color: '#9fb5ff' }}>{experienceEntry.company}</span>
                  <p style={{ margin: '0.45rem 0 0', fontSize: '0.88rem', lineHeight: 1.6, color: '#d7dcff' }}>{experienceEntry.description}</p>
                  {experienceEntry.link && (
                    <div style={{ marginTop: '0.6rem' }}>
                      <a
                        href={experienceEntry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: '#00ffd0',
                          textDecoration: 'none',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                        }}
                      >
                        Visitar compañía
                        <span style={{ fontSize: '0.9rem' }}>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {spaceshipInfoVisible && (
        <div style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(520px, 94vw)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem',
          padding: '1.8rem',
          background: 'linear-gradient(145deg, rgba(10,17,32,0.92) 0%, rgba(18,28,52,0.88) 100%)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(111, 226, 255, 0.6)',
          color: '#eff6ff',
          zIndex: 23,
          boxShadow: '0 16px 42px rgba(0,0,0,0.55)',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#6fe2ff' }}>Bitácora de Contacto</h3>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', color: '#c8e6ff' }}>
                Elige un canal para conectar y seguir nuevas misiones.
              </p>
            </div>
            <button
              type="button"
              onClick={closeSpaceshipPanel}
              style={{
                border: 'none',
                background: 'rgba(255,255,255,0.06)',
                color: '#6fe2ff',
                width: 36,
                height: 36,
                borderRadius: '50%',
                fontSize: '1.1rem',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.9rem',
          }}>
            {socialLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => window.open(link.src, '_blank', 'noopener,noreferrer')}
                style={{
                  padding: '1rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(111, 226, 255, 0.45)',
                  background: 'rgba(12, 22, 40, 0.9)',
                  color: '#e8f9ff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.45rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = 'translateY(-4px)';
                  event.currentTarget.style.boxShadow = '0 10px 24px rgba(111,226,255,0.25)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'translateY(0)';
                  event.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '0.82rem', letterSpacing: 0.35, color: '#6fe2ff' }}>Social</span>
                <strong style={{ fontSize: '1rem' }}>{link.name}</strong>
                <span style={{ fontSize: '0.75rem', color: '#bbdfff' }}>Abrir enlace ↗</span>
              </button>
            ))}
          </div>
        </div>
      )}
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
