import * as THREE from 'three';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import { createFresnelMaterial } from './fresnelMaterial';

const textureCache = new Map();
const nebulaTextureCache = new Map();

function hashStringToSeed(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createMulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function createNoiseFunction(seed) {
  const rng = createMulberry32(seed);
  const offsets = new Array(8).fill(0).map(() => rng() * Math.PI * 2);
  return (x, y) => {
    let value = 0;
    let amplitude = 0.5;
    let frequency = 0.018;
    for (let octave = 0; octave < 4; octave += 1) {
      const nx = x * frequency + offsets[octave * 2];
      const ny = y * frequency + offsets[octave * 2 + 1];
      value += Math.sin(nx) * Math.cos(ny) * amplitude;
      amplitude *= 0.5;
      frequency *= 2.3;
    }
    return (value + 1) * 0.5;
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getPlanetTextures(baseColor, seed) {
  const cacheKey = `${baseColor}-${seed}`;
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey);
  }

  const size = 256;
  const colorCanvas = document.createElement('canvas');
  const bumpCanvas = document.createElement('canvas');
  const roughnessCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  roughnessCanvas.width = size;
  roughnessCanvas.height = size;
  const colorCtx = colorCanvas.getContext('2d');
  const bumpCtx = bumpCanvas.getContext('2d');
  const roughnessCtx = roughnessCanvas.getContext('2d');
  const colorData = colorCtx.createImageData(size, size);
  const bumpData = bumpCtx.createImageData(size, size);
  const roughnessData = roughnessCtx.createImageData(size, size);

  const base = new THREE.Color(baseColor);
  const baseHSL = {};
  base.getHSL(baseHSL);

  const rng = createMulberry32(seed);
  const hueShift = (rng() - 0.5) * 0.06;
  const oceanLevel = 0.48 + (rng() - 0.5) * 0.08;
  const ridgeContribution = 0.45 + rng() * 0.2;
  const cragFactor = 0.35 + rng() * 0.25;
  const mountainStrength = 0.25 + rng() * 0.2;
  const noiseFnPrimary = createNoiseFunction(seed ^ 0x9e3779b9);
  const noiseFnSecondary = createNoiseFunction(seed ^ 0x85ebca6b);
  const noiseFnTertiary = createNoiseFunction(seed ^ 0xc2b2ae35);

  const oceanDeepColor = new THREE.Color(0x071833);
  const oceanShallowColor = new THREE.Color(0x1f4d7a);
  const coastColor = new THREE.Color(0x62d3ff);
  const iceOceanColor = new THREE.Color(0xe0f6ff);
  const iceLandColor = new THREE.Color(0xfafafa);

  const landLowColor = new THREE.Color().setHSL(
    (baseHSL.h + hueShift + 1) % 1,
    THREE.MathUtils.clamp(baseHSL.s * 1.08, 0.2, 0.9),
    THREE.MathUtils.clamp(baseHSL.l * 0.55, 0.1, 0.52),
  );
  const landHighColor = new THREE.Color().setHSL(
    (baseHSL.h + hueShift * 0.4 + 1) % 1,
    THREE.MathUtils.clamp(baseHSL.s * 0.78, 0.15, 0.8),
    THREE.MathUtils.clamp(baseHSL.l + 0.28, 0.25, 0.9),
  );
  const vegetationColor = new THREE.Color().setHSL(
    (baseHSL.h + 0.08 + 1) % 1,
    THREE.MathUtils.clamp(baseHSL.s * 1.1, 0.25, 0.95),
    THREE.MathUtils.clamp(baseHSL.l * 0.78, 0.12, 0.6),
  );
  const desertColor = new THREE.Color().setHSL(
    (baseHSL.h + 0.02 + 1) % 1,
    Math.max(0.25, baseHSL.s * 0.5),
    Math.min(0.85, baseHSL.l + 0.25),
  );

  const pixelColor = new THREE.Color();
  const tempColor = new THREE.Color();

  for (let y = 0; y < size; y += 1) {
    const v = y / (size - 1);
    const latNormalized = Math.abs(v * 2 - 1);
    for (let x = 0; x < size; x += 1) {
      const idx = (y * size + x) * 4;

      const primaryNoise = noiseFnPrimary(x * 0.7, y * 0.7);
      const secondaryNoise = noiseFnSecondary(x * 1.2 + 48, y * 1.2 + 32);
      const tertiaryNoise = noiseFnTertiary(x * 2.4 + 120, y * 2.4 + 85);

      const blendedNoise = primaryNoise * (1 - ridgeContribution) + secondaryNoise * ridgeContribution;
      const detailNoise = tertiaryNoise * cragFactor;
      const biomeNoise = noiseFnSecondary(x * 0.32 + 200, y * 0.38 + 160);

      const elevation = blendedNoise + detailNoise - oceanLevel + Math.pow(latNormalized, 2.8) * 0.08;
      const coastline = clamp(1 - Math.abs(elevation) * 14, 0, 1);

      let normalizedElevation = 0;
      let depth = 0;
      let bumpStrength;
      let roughnessStrength;

      if (elevation < 0) {
        depth = clamp(-elevation / (oceanLevel + 1e-5), 0, 1);
        pixelColor.copy(oceanShallowColor).lerp(oceanDeepColor, Math.pow(depth, 0.7));
        pixelColor.lerp(coastColor, coastline * 0.35);
        const iceMask = Math.pow(Math.max(0, latNormalized - 0.68), 2.4);
        if (iceMask > 0) {
          pixelColor.lerp(iceOceanColor, clamp(iceMask * 1.8, 0, 1));
        }
        bumpStrength = clamp(0.2 + depth * 0.25 + coastline * 0.18, 0, 1);
        roughnessStrength = clamp(0.18 + depth * 0.22, 0, 1);
      } else {
        normalizedElevation = clamp(elevation * (1.1 + mountainStrength), 0, 1);
        pixelColor.copy(landLowColor).lerp(landHighColor, Math.pow(normalizedElevation, 0.85));

        const dryness = Math.max(0, biomeNoise - 0.55);
        if (dryness > 0) {
          pixelColor.lerp(desertColor, Math.pow(dryness, 2) * 0.75);
        }

        const lushness = Math.max(0, 0.52 - biomeNoise);
        if (lushness > 0) {
          pixelColor.lerp(vegetationColor, Math.pow(lushness, 1.6) * 0.7);
        }

        const iceMask = Math.pow(Math.max(0, latNormalized - 0.7), 2.2);
        if (iceMask > 0) {
          pixelColor.lerp(iceLandColor, clamp(iceMask * 1.6, 0, 1));
        }

        bumpStrength = clamp(0.45 + normalizedElevation * 0.4 + coastline * 0.12, 0, 1);
        roughnessStrength = clamp(0.55 + normalizedElevation * 0.35 + dryness * 0.2, 0, 1);
      }

      const equatorialGlow = clamp(0.18 - latNormalized * 0.12, 0, 0.18);
      if (equatorialGlow > 0) {
        tempColor.copy(pixelColor).offsetHSL(0, 0, 0.08 * equatorialGlow);
        pixelColor.lerp(tempColor, equatorialGlow);
      }

      const illuminationBoost = clamp(0.12 + depth * 0.08 + normalizedElevation * 0.14 + Math.pow(1 - latNormalized, 1.6) * 0.05, 0, 0.28);
      if (illuminationBoost > 0) {
        tempColor.set(0xffffff);
        pixelColor.lerp(tempColor, illuminationBoost);
      }

      colorData.data[idx] = Math.round(clamp(pixelColor.r, 0, 1) * 255);
      colorData.data[idx + 1] = Math.round(clamp(pixelColor.g, 0, 1) * 255);
      colorData.data[idx + 2] = Math.round(clamp(pixelColor.b, 0, 1) * 255);
      colorData.data[idx + 3] = 255;

      const bumpValue = Math.round(clamp(bumpStrength, 0, 1) * 255);
      bumpData.data[idx] = bumpValue;
      bumpData.data[idx + 1] = bumpValue;
      bumpData.data[idx + 2] = bumpValue;
      bumpData.data[idx + 3] = 255;

      const roughnessValue = Math.round(clamp(roughnessStrength, 0.08, 1) * 255);
      roughnessData.data[idx] = roughnessValue;
      roughnessData.data[idx + 1] = roughnessValue;
      roughnessData.data[idx + 2] = roughnessValue;
      roughnessData.data[idx + 3] = 255;
    }
  }

  colorCtx.putImageData(colorData, 0, 0);
  bumpCtx.putImageData(bumpData, 0, 0);
  roughnessCtx.putImageData(roughnessData, 0, 0);

  const colorTexture = new THREE.CanvasTexture(colorCanvas);
  colorTexture.wrapS = THREE.RepeatWrapping;
  colorTexture.wrapT = THREE.RepeatWrapping;
  colorTexture.colorSpace = THREE.SRGBColorSpace;
  colorTexture.needsUpdate = true;

  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.RepeatWrapping;
  bumpTexture.needsUpdate = true;

  const roughnessTexture = new THREE.CanvasTexture(roughnessCanvas);
  roughnessTexture.wrapS = THREE.RepeatWrapping;
  roughnessTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.needsUpdate = true;

  const textures = { colorMap: colorTexture, bumpMap: bumpTexture, roughnessMap: roughnessTexture };
  textureCache.set(cacheKey, textures);
  return textures;
}

export function createSolarSystem(repos) {
  const group = new THREE.Group();
  const planets = [];
  group.userData.updatables = [];

  const sunSeed = repos[0] ? hashStringToSeed(`sun-${repos[0].id || repos[0].name}`) : 1337;
  const { mesh: sun, halo: sunHalo, update: updateSun } = createSun(sunSeed);
  group.add(sun);
  group.add(sunHalo);
  group.userData.updatables.push(updateSun);

  const farNebula = createNebulaLayer({ seed: sunSeed ^ 0x9e3779b9, radius: 520, depth: -420, hue: 0.6, saturation: 0.45, spriteCount: 0, sizeRange: [90, 160] });
  const nearNebula = createNebulaLayer({ seed: sunSeed ^ 0x85ebca6b, radius: 420, depth: 360, hue: 0.05, saturation: 0.52, spriteCount: 0, sizeRange: [80, 150] });
  group.add(farNebula.group);
  group.add(nearNebula.group);
  group.userData.updatables.push(farNebula.update, nearNebula.update);

  const baseDistance = 48;
  const orbitalIncrement = 26;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  repos.forEach((repo, index) => {
    const size = 4.2 + Math.min(7.2, (repo.stargazers_count || 0) / 9);
    const color = getColorByLanguage(repo.language);
    const seed = hashStringToSeed(`${repo.id || repo.full_name || repo.name || 'repo'}-${index}`);
    const rng = createMulberry32(seed ^ 0x632be59b);
    const { colorMap, bumpMap, roughnessMap } = getPlanetTextures(color, seed);

    const planetGeometry = new THREE.SphereGeometry(size, 48, 48);
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: colorMap,
      bumpMap,
      bumpScale: 0.28 + rng() * 0.22,
      roughnessMap,
      metalness: 0.1 + rng() * 0.08,
      roughness: 0.58 + rng() * 0.18,
      emissive: new THREE.Color(color).multiplyScalar(0.02 + rng() * 0.028),
      emissiveIntensity: 0.32 + rng() * 0.2,
      envMapIntensity: 0.4,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    const rimMaterial = createFresnelMaterial({ rimHex: color, facingHex: 0x050713, bias: 0.05, scale: 1.5, power: 2.2 });
    const baseRimScale = 0.48 + rng() * 0.22;
    const highlightRimScale = 1.32 + rng() * 0.25;
    const baseRimBias = 0.028 + rng() * 0.015;
    const highlightRimBias = 0.06 + rng() * 0.015;
    rimMaterial.uniforms.fresnelScale.value = baseRimScale;
    rimMaterial.uniforms.fresnelBias.value = baseRimBias;
    const rimShell = new THREE.Mesh(planetGeometry.clone(), rimMaterial);
    rimShell.scale.setScalar(1.04);
    planet.add(rimShell);

    const glowGeometry = new THREE.SphereGeometry(size * 1.55, 32, 32);
    const idleGlowOpacity = 0.085 + rng() * 0.045;
    const highlightGlowOpacity = 0.26 + rng() * 0.16;
    const glowMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: idleGlowOpacity,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);

    const planetGroup = new THREE.Group();
    planetGroup.add(planet);
    planetGroup.add(glow);

    const radius = baseDistance + index * orbitalIncrement + (rng() - 0.5) * 12;
    const angle = index * goldenAngle + (rng() - 0.5) * 0.6;
    const tilt = 0.015 + rng() * 0.045;
    const initialX = Math.cos(angle) * radius;
    const initialZ = Math.sin(angle) * radius;
    const initialY = Math.sin(angle * 0.5) * radius * tilt;
    planetGroup.position.set(initialX, initialY, initialZ);

    planet.userData = {
      repo,
      group: planetGroup,
      glow,
      baseGlowOpacity: idleGlowOpacity,
      highlightGlowOpacity,
      rim: rimShell,
      baseRimScale,
      highlightRimScale,
      baseRimBias,
      highlightRimBias,
      radius,
      angle,
      speed: getOrbitalSpeed(radius),
      orbitDirection: 1,
      tilt,
    };

    planets.push(planet);
    group.add(planetGroup);

    // Órbita visual
    const orbitGeometry = new THREE.RingGeometry(radius - 0.22, radius + 0.22, 256);
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x1e84d9, side: THREE.DoubleSide, transparent: true, opacity: 0.32 });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    group.add(orbit);

    // Pequeña luna para repos con forks destacados
    if ((repo.forks || 0) > 5) {
      const moon = new THREE.Mesh(
        new THREE.SphereGeometry(size * 0.4, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xddddff, metalness: 0.2, roughness: 0.5 })
      );
      moon.position.set(size * 2.2, 0, 0);
      const moonGroup = new THREE.Group();
      moonGroup.add(moon);
      moonGroup.userData = { planet, rotationSpeed: 0.015 + Math.random() * 0.01 };
      planetGroup.add(moonGroup);
      planet.userData.moon = moonGroup;
    }
  });

  const belt = createAsteroidBelt({
    seed: sunSeed ^ 0xc2b2ae35,
    radius: baseDistance + Math.max(1, repos.length) * orbitalIncrement + 60,
    thickness: 20,
    count: 420,
  });
  group.add(belt.mesh);
  group.userData.updatables.push(belt.update);

  return { group, planets };
}

function getOrbitalSpeed(radius) {
  const orbitalBase = 0.012;
  const adjustedRadius = Math.max(radius, 1);
  return orbitalBase / Math.sqrt(adjustedRadius);
}

function getColorByLanguage(language) {
  if (!language) return 0x8888ff;
  const colors = {
    JavaScript: 0xf7df1e,
    TypeScript: 0x3178c6,
    Python: 0x3572a5,
    HTML: 0xe34c26,
    CSS: 0x563d7c,
    Java: 0xb07219,
    'C#': 0x178600,
    'C++': 0xf34b7d,
    Go: 0x00add8,
    Shell: 0x89e051,
    PHP: 0x4f5d95,
    Ruby: 0x701516,
  };
  return colors[language] || 0x8888ff;
}

function createSun(seed) {
  const rng = createMulberry32(seed);
  const sunGroup = new THREE.Group();
  const baseRadius = 12;
  const coreGeometry = new THREE.IcosahedronGeometry(baseRadius, 5);
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0xfca94f,
    emissive: 0xffe4a3,
    emissiveIntensity: 1.15,
    roughness: 0.5,
    metalness: 0,
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  const rimMaterial = createFresnelMaterial({ rimHex: 0xfff2b8, facingHex: 0xcc4a00, bias: 0.12, scale: 1.6, power: 2.2 });
  const rim = new THREE.Mesh(coreGeometry.clone(), rimMaterial);
  rim.scale.setScalar(1.05);
  core.add(rim);

  const coronaGeometry = new THREE.IcosahedronGeometry(baseRadius * 1.26, 4);
  const coronaMaterial = new THREE.MeshBasicMaterial({ color: 0xffe295, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, side: THREE.BackSide });
  const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);
  const noise = new ImprovedNoise();
  const coronaDirections = [];
  const posAttr = coronaGeometry.attributes.position;
  for (let i = 0; i < posAttr.count; i += 1) {
    const dir = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)).normalize();
    coronaDirections.push(dir);
  }

  const haloGeometry = new THREE.SphereGeometry(baseRadius * 1.75, 48, 48);
  const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xffd78c, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false });
  const halo = new THREE.Mesh(haloGeometry, haloMaterial);

  const sunLight = new THREE.PointLight(0xfff0a8, 2.4, 0, 2);
  sunLight.position.set(0, 0, 0);
  core.add(sunLight);

  sunGroup.add(core);
  sunGroup.add(corona);

  const wobbleSpeed = 0.38 + rng() * 0.18;
  const flickerSpeed = 0.7 + rng() * 0.3;
  const update = (elapsed) => {
    const positions = posAttr.array;
    for (let i = 0; i < coronaDirections.length; i += 1) {
      const direction = coronaDirections[i];
      const idx = i * 3;
      const wave = noise.noise(direction.x * 1.5 + elapsed * wobbleSpeed, direction.y * 1.5 + elapsed * wobbleSpeed, direction.z * 1.5 + elapsed * 0.3);
      const radius = baseRadius * 1.26 * (1.02 + wave * 0.14);
      positions[idx] = direction.x * radius;
      positions[idx + 1] = direction.y * radius;
      positions[idx + 2] = direction.z * radius;
    }
    posAttr.needsUpdate = true;
    core.rotation.y += 0.0012;
    coronaMaterial.opacity = 0.11 + (Math.sin(elapsed * flickerSpeed) * 0.035 + 0.035);
    haloMaterial.opacity = 0.08 + Math.sin(elapsed * 0.6) * 0.025;
    rim.material.uniforms.fresnelBias.value = 0.07 + Math.sin(elapsed * 0.6) * 0.028;
    sunLight.intensity = 2.3 + Math.sin(elapsed * 0.8) * 0.25;
  };

  return { mesh: sunGroup, halo, update };
}

function createNebulaLayer({ seed, radius = 420, depth = 0, hue = 0.6, saturation = 0.6, spriteCount = 12, sizeRange = [120, 220] }) {
  const rng = createMulberry32(seed);
  const group = new THREE.Group();
  group.position.z = depth;
  const baseColor = new THREE.Color().setHSL(hue, saturation * 0.8, 0.56);
  const textureKey = `${Math.round(hue * 360)}-${Math.round(saturation * 100)}`;
  const texture = getNebulaTexture(textureKey, baseColor);
  for (let i = 0; i < spriteCount; i += 1) {
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, opacity: 0.22 });
    spriteMaterial.color = baseColor.clone().offsetHSL((rng() - 0.5) * 0.05, (rng() - 0.5) * 0.16, (rng() - 0.5) * 0.18);
    const sprite = new THREE.Sprite(spriteMaterial);
    const angle = rng() * Math.PI * 2;
    const radial = radius * (0.45 + rng() * 0.55);
    const height = (rng() - 0.5) * radius * 0.4;
    sprite.position.set(Math.cos(angle) * radial, height, Math.sin(angle) * radial);
    const size = THREE.MathUtils.lerp(sizeRange[0], sizeRange[1], rng());
    sprite.scale.set(size, size, size);
    sprite.material.rotation = rng() * Math.PI * 2;
    group.add(sprite);
  }

  const swirlSpeed = 0.003 + rng() * 0.003;
  const update = (elapsed) => {
    group.rotation.y = elapsed * swirlSpeed;
  };

  return { group, update };
}

function getNebulaTexture(key, baseColor) {
  if (nebulaTextureCache.has(key)) {
    return nebulaTextureCache.get(key);
  }
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, size * 0.1, size / 2, size / 2, size / 2);
  const brighter = baseColor.clone().offsetHSL(0, 0, 0.25);
  gradient.addColorStop(0, `rgba(${Math.round(brighter.r * 255)}, ${Math.round(brighter.g * 255)}, ${Math.round(brighter.b * 255)}, 1)`);
  gradient.addColorStop(0.45, `rgba(${Math.round(baseColor.r * 255)}, ${Math.round(baseColor.g * 255)}, ${Math.round(baseColor.b * 255)}, 0.7)`);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  nebulaTextureCache.set(key, texture);
  return texture;
}

function createAsteroidBelt({ seed, radius = 140, thickness = 18, count = 320 }) {
  const rng = createMulberry32(seed);
  const geometry = new THREE.IcosahedronGeometry(1.2, 0);
  const material = new THREE.MeshStandardMaterial({ color: 0x9aa3b8, metalness: 0.3, roughness: 0.85 });
  const instanced = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i += 1) {
    const angle = rng() * Math.PI * 2;
    const radialOffset = (rng() - 0.5) * thickness;
    const height = (rng() - 0.5) * thickness * 0.28;
    const currentRadius = radius + radialOffset;
    dummy.position.set(Math.cos(angle) * currentRadius, height, Math.sin(angle) * currentRadius);
    dummy.rotation.set(rng() * Math.PI, rng() * Math.PI, rng() * Math.PI);
    const scale = 0.6 + rng() * 0.9;
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    instanced.setMatrixAt(i, dummy.matrix);
  }
  instanced.instanceMatrix.needsUpdate = true;
  instanced.castShadow = false;
  instanced.receiveShadow = false;
  const update = (elapsed) => {
    instanced.rotation.y = elapsed * 0.02;
  };
  return { mesh: instanced, update };
}
