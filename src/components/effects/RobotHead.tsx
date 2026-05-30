'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RobotHead() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create robot head geometry
    const headGeometry = new THREE.BoxGeometry(2, 2.5, 1.5);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5c8,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x00e5c8,
      emissiveIntensity: 0.3,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    scene.add(head);

    // Create eyes
    const eyeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0xff2d78,
      metalness: 0.7,
      roughness: 0.1,
      emissive: 0xff2d78,
      emissiveIntensity: 0.5,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.6, 0.5, 0.9);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.6, 0.5, 0.9);
    head.add(rightEye);

    // Lighting
    const light = new THREE.PointLight(0x00e5c8, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      head.rotation.x += 0.005;
      head.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 5,
        pointerEvents: 'none',
      }}
    />
  );
}
