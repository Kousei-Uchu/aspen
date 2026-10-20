'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SKY = '#29402E';
const MOTES = ['#E8C98A', '#C58A4A', '#985B3A'];

export default function HeroCanvas() {
  return (
    <Canvas
      shadows={false}
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      style={{ background: SKY }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x29402e, 1);
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#E8C98A" />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#C58A4A" />

      <InstancedParticles count={1200} />

      <GlassCube scale={3} />
    </Canvas>
  );
}

function InstancedParticles({ count }: { count: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      // drifting golden dust and falling leaves: mostly gold/amber, some walnut
      color.set(MOTES[Math.random() < 0.45 ? 0 : Math.random() < 0.6 ? 1 : 2]);
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
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
        <sphereGeometry args={[0.023, 32, 16]} />
        <meshBasicMaterial color="#ffffff" />
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
        color="#C58A4A"
        iridescence={0}
        samples={4}
      />
    </mesh>
  );
}
