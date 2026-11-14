'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DSeal() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const group = new THREE.Group();
    scene.add(group);

    // Outer Torus Ring (Golden Seal Ring)
    const ringGeometry = new THREE.TorusGeometry(1.4, 0.035, 16, 100);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xC5A880,
      metalness: 0.85,
      roughness: 0.25,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, goldMaterial);
    group.add(ringMesh);

    // Inner Inner Ring (Olive Green Wire)
    const innerRingGeo = new THREE.TorusGeometry(1.15, 0.02, 16, 80);
    const oliveMaterial = new THREE.MeshStandardMaterial({
      color: 0x3D604E,
      metalness: 0.6,
      roughness: 0.4,
    });
    const innerRingMesh = new THREE.Mesh(innerRingGeo, oliveMaterial);
    group.add(innerRingMesh);

    // Floating Golden Aura Particles around the emblem
    const particleCount = 65;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.0 + Math.random() * 0.9;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFBF0, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFE8B2, 2.0);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);

    const sunOrangeLight = new THREE.PointLight(0xF97316, 2.2, 10);
    sunOrangeLight.position.set(2, -3, 3);
    scene.add(sunOrangeLight);

    const backLight = new THREE.PointLight(0x6F9B87, 1.5, 10);
    backLight.position.set(-3, -2, -2);
    scene.add(backLight);

    // Mouse Tracking Physics
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lag / lerp towards target
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      group.rotation.y = currentX + Math.sin(elapsedTime * 0.4) * 0.15;
      group.rotation.x = -currentY + Math.cos(elapsedTime * 0.5) * 0.1;

      particles.rotation.z = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ringGeometry.dispose();
      innerRingGeo.dispose();
      particleGeometry.dispose();
      goldMaterial.dispose();
      oliveMaterial.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-56 h-56 sm:w-72 sm:h-72 mx-auto relative cursor-pointer"
      title="Roots of Balance 3D Harmonic Emblem"
    />
  );
}

