/* eslint-disable react/no-unescaped-entities */
'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function HomeHero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <section className="home-hero">
      <Canvas
        key={isDark ? 'dark' : 'light'}
        shadows={false}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        style={{ background: isDark ? '#0a0a0a' : '#ffffff' }}
        onCreated={({ gl }) => {
          gl.setClearColor(isDark ? 0x0a0a0a : 0xffffff, 1);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }}
      >
        <ambientLight intensity={0.4} />
        {!isDark && (
          <>
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#ffffff" />
          </>
        )}

        <InstancedParticles count={1200} isDark={isDark} />

        <GlassCube scale={3} />
      </Canvas>

      <div className="hero-text-container">
        <h1 className="hero-text">Heya! I'm Sorren!</h1>
        <p className="hero-text" style={{ fontSize: '2vh' }}>
          Shenanigans Extraordinaire
        </p>
      </div>
    </section>
  );
}

function InstancedParticles({ count, isDark }: { count: number; isDark: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.01;
      groupRef.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.023, 4, 4]} />
        <meshBasicMaterial color={isDark ? '#ffffff' : '#000000'} />
      </instancedMesh>
    </group>
  );
}

function GlassCube({ scale }: { scale: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <mesh ref={ref} castShadow={false} receiveShadow={false}>
      <boxGeometry args={[scale, scale, scale]} />
      <MeshTransmissionMaterial
        ior={1.2}
        thickness={10}
        chromaticAberration={0.05}
        anisotropy={0.2}
        color="#ffffff"
        iridescence={1.5}
        samples={4}
      />
    </mesh>
  );
}
