'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';

export default function HomeHero() {
  return (
    <>
    <section className="home-hero">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Particle Field */}
        <ParticleField count={2500} />

        {/* Glass Cube */}
        <GlassCube scale={3} />
      </Canvas>

      {/* Hero Text */}
      <div className="hero-text-container">
        <h1 className="hero-text">Heya! I'm Sorren!</h1>
        <p className="hero-text" style={{ fontSize: '2vh' }}>Shenanigans Extraordinaire</p>
      </div>
    </section>
        </>
  );
}

function ParticleField({ count }: { count: number }) {
  const ref = useRef<any>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial color="#ffffff" size={0.05} sizeAttenuation />
    </Points>
  );
}

function GlassCube({ scale }: { scale: number }) {
  const ref = useRef<any>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[scale, scale, scale]} />
      <MeshTransmissionMaterial
        ior={1.15}
        thickness={5}
        chromaticAberration={0.1}
        anisotropy={0.01}
        color="#ffffff"
      />
    </mesh>
  );
}
