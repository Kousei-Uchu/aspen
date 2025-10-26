/* eslint-disable react/no-unescaped-entities */
'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';

export default function HomeHero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(media.matches);
    const listener = () => setIsDark(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <section className="home-hero">
      <Canvas
      key={isDark ? 'dark' : 'light'}
      shadows={false}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true }}
        style={{ background: isDark ? '#0a0a0a' : '#ffffff' }}
        onCreated={({ gl }) => gl.setClearColor(isDark ? 0x0a0a0a : 0xffffff, 1)}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        {!isDark && (
            <>
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#ffffff" />
        </>
)}

        {/* Particle Field */}
        <ParticleField count={2500} isDark={isDark} />

        {/* Glass Cube */}
        <GlassCube scale={3} isDark={isDark} />
      </Canvas>

      {/* Hero Text */}
      <div className="hero-text-container">
        <h1 className="hero-text">Heya! I'm Sorren!</h1>
        <p className="hero-text" style={{ fontSize: '2vh' }}>
          Shenanigans Extraordinaire
        </p>
      </div>
    </section>
  );
}

function ParticleField({ count, isDark }: { count: number, isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.023, 100, 100]} />
          <meshBasicMaterial color={isDark ? "#ffffff" : "#000000" } />
        </mesh>
      );
    }
    return temp;
  }, [count]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.01;
      groupRef.current.rotation.x += delta * 0.005;
    }
  });

  return <group ref={groupRef}>{particles}</group>;
}


function GlassCube({ scale, isDark }: { scale: number; isDark: boolean }) {
  const ref = useRef<any>(null);

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
        color={isDark ? '#ffffff' : '#ffffff'} // cube stays white in light mode
        iridescence={1.5}
        samples={20}
      />
    </mesh>
  );
}
