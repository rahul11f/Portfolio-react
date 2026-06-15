import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Icosahedron, Octahedron, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function FloatingShape({ children, position, scale, speed, floatIntensity, rotationIntensity }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1 * speed;
    meshRef.current.rotation.y = t * 0.15 * speed;
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      position={position}
    >
      <mesh ref={meshRef} scale={scale}>
        {children}
      </mesh>
    </Float>
  );
}

export default function Premium3DShapes() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00ff88" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00ccff" />
        
        {/* Central glowing distorted sphere (like a core) */}
        <FloatingShape position={[4, 2, -5]} scale={1.5} speed={1.5} floatIntensity={2} rotationIntensity={1}>
          <Sphere args={[1, 64, 64]}>
            <MeshDistortMaterial color="#0a0a0a" emissive="#00ff88" emissiveIntensity={0.2} distort={0.3} speed={2} wireframe />
          </Sphere>
        </FloatingShape>

        {/* Large abstract ring */}
        <FloatingShape position={[-5, -2, -8]} scale={2} speed={0.8} floatIntensity={1} rotationIntensity={2}>
          <Torus args={[2, 0.05, 16, 100]}>
            <meshStandardMaterial color="#00ccff" emissive="#00ccff" emissiveIntensity={0.5} wireframe />
          </Torus>
        </FloatingShape>

        {/* Floating Icosahedron */}
        <FloatingShape position={[5, -3, -6]} scale={1.2} speed={1.2} floatIntensity={2.5} rotationIntensity={1.5}>
          <Icosahedron args={[1, 0]}>
            <meshStandardMaterial color="#0a0a0a" emissive="#ff00cc" emissiveIntensity={0.3} wireframe />
          </Icosahedron>
        </FloatingShape>

        {/* Floating Octahedron */}
        <FloatingShape position={[-4, 3, -4]} scale={0.8} speed={2} floatIntensity={3} rotationIntensity={2}>
          <Octahedron args={[1, 0]}>
            <meshStandardMaterial color="#0a0a0a" emissive="#00ff88" emissiveIntensity={0.4} wireframe />
          </Octahedron>
        </FloatingShape>
        
        {/* Distant small ring */}
        <FloatingShape position={[0, -4, -10]} scale={1} speed={1} floatIntensity={1.5} rotationIntensity={3}>
          <Torus args={[1.5, 0.02, 16, 64]}>
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} wireframe />
          </Torus>
        </FloatingShape>

      </Canvas>
    </div>
  );
}
