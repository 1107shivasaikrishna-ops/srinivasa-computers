"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function PlaceholderMachine() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <RoundedBox args={[2, 1.5, 1.5]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        {/* Screen */}
        <mesh position={[0, 0.4, 0.76]}>
          <planeGeometry args={[1.2, 0.5]} />
          <meshBasicMaterial color="#003366" />
        </mesh>
        {/* Hopper/Tray */}
        <mesh position={[0, -0.6, 0.5]}>
          <boxGeometry args={[1.5, 0.1, 1]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.8, -0.2]}>
          <boxGeometry args={[1.5, 0.4, 0.8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.5} roughness={0.5} />
        </mesh>
      </Float>
    </group>
  );
}


export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, 10, -5]} intensity={0.5} />
      <PlaceholderMachine />
    </>
  );
}
