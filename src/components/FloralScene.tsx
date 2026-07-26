import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Petal({ position, rotation, color = "#e8b4b8" }: { position: [number, number, number]; rotation: [number, number, number]; color?: string }) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <sphereGeometry args={[0.35, 24, 24]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} emissive={color} emissiveIntensity={0.08} />
    </mesh>
  );
}

function Flower({ position, color = "#f5d98a", centerColor = "#d4af37" }: { position: [number, number, number]; color?: string; centerColor?: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.3;
  });
  const petals = 6;
  return (
    <group position={position} ref={ref}>
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i / petals) * Math.PI * 2;
        return <Petal key={i} position={[Math.cos(angle) * 0.4, Math.sin(angle) * 0.4, 0]} rotation={[0, 0, angle]} color={color} />;
      })}
      <mesh>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color={centerColor} metalness={0.9} roughness={0.15} emissive={centerColor} emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function Garland() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  const flowers = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string; center: string; scale: number }[] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const t = (i / (count - 1)) - 0.5;
      const x = t * 6;
      const y = -Math.cos(t * Math.PI) * 1.2 + 0.8;
      const z = Math.sin(t * Math.PI * 2) * 0.3;
      const isRose = i % 3 === 0;
      arr.push({
        pos: [x, y, z],
        color: isRose ? "#d4788a" : i % 2 === 0 ? "#faf3e0" : "#f5d98a",
        center: isRose ? "#8b2c3a" : "#d4af37",
        scale: 0.7 + Math.random() * 0.5,
      });
    }
    return arr;
  }, []);

  return (
    <group ref={groupRef}>
      {/* string */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[2.8, 0.02, 8, 100, Math.PI]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
      </mesh>
      {flowers.map((f, i) => (
        <group key={i} position={f.pos} scale={f.scale}>
          <Flower position={[0, 0, 0]} color={f.color} centerColor={f.center} />
        </group>
      ))}
      {/* leaves */}
      {Array.from({ length: 8 }).map((_, i) => {
        const t = (i / 7) - 0.5;
        const x = t * 5.5;
        const y = -Math.cos(t * Math.PI) * 1.2 + 0.4;
        return (
          <mesh key={`l${i}`} position={[x, y, -0.2]} rotation={[0, 0, i * 0.7]}>
            <coneGeometry args={[0.15, 0.5, 8]} />
            <meshStandardMaterial color="#2d4a2b" roughness={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#f5d98a" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function FloralScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={["#0a0705"]} />
      <fog attach="fog" args={["#0a0705", 8, 16]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f5d98a" />
      <pointLight position={[-3, -2, 3]} intensity={0.8} color="#d4788a" />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
          <Garland />
        </Float>
        <FloatingParticles />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
