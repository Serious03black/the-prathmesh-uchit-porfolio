
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThreeSceneOptions {
  canvas: HTMLCanvasElement;
  backgroundColor?: string;
  cameraPosition?: [number, number, number];
}

export class ThreeScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls | null = null;
  animationFunctions: ((time: number) => void)[] = [];

  constructor(options: ThreeSceneOptions) {
    // Create scene
    this.scene = new THREE.Scene();
    if (options.backgroundColor) {
      this.scene.background = new THREE.Color(options.backgroundColor);
    }

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    if (options.cameraPosition) {
      this.camera.position.set(...options.cameraPosition);
    } else {
      this.camera.position.z = 5;
    }

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: options.canvas,
      antialias: true,
      alpha: true,
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Handle window resize
    window.addEventListener('resize', this.handleResize.bind(this));

    // Start animation loop
    this.animate(0);
  }

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  addObject(object: THREE.Object3D) {
    this.scene.add(object);
  }

  addControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
  }

  animate(time: number) {
    requestAnimationFrame(this.animate.bind(this));
    
    // Run all animation functions
    this.animationFunctions.forEach(fn => fn(time * 0.001));
    
    // Update controls if they exist
    if (this.controls) {
      this.controls.update();
    }
    
    // Render
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    window.removeEventListener('resize', this.handleResize.bind(this));
    this.renderer.dispose();
    
    // Clear animation functions
    this.animationFunctions = [];
  }
}

// Create magic particles
export const createMagicParticles = (count = 1000, size = 0.02, color = 0xffffff) => {
  const particles = new THREE.Group();
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });
  
  const points = new THREE.Points(geometry, material);
  particles.add(points);
  
  // Animation function
  const animateParticles = (time: number) => {
    points.rotation.x = time * 0.1;
    points.rotation.y = time * 0.2;
  };
  
  return { particles, animateParticles };
};

// Create a glowing sphere
export const createGlowingSphere = (radius = 1, color = 0xff0000) => {
  const sphere = new THREE.Group();
  
  // Create the base sphere
  const geometry = new THREE.SphereGeometry(radius, 32, 32);
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.5,
    roughness: 0.2,
    metalness: 0.8,
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  sphere.add(mesh);
  
  // Add glow effect
  const glowGeometry = new THREE.SphereGeometry(radius * 1.2, 32, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.15,
    side: THREE.BackSide,
  });
  
  const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
  sphere.add(glowMesh);
  
  // Animation function
  const animateSphere = (time: number) => {
    mesh.rotation.y = time * 0.5;
    glowMesh.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  };
  
  return { sphere, animateSphere };
};
