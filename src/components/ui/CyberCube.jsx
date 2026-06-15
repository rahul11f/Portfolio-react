import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

export default function CyberCube() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <Icosahedron args={[1, 1]} scale={2.5}>
        <MeshDistortMaterial
          color="#00ff88"
          attach="material"
          distort={0.4}
          speed={2}
          wireframe={true}
        />
      </Icosahedron>
      
      {/* Inner solid core */}
      <Icosahedron args={[1, 2]} scale={1.8}>
        <meshStandardMaterial
          color="#0a0a0a"
          emissive="#00ccff"
          emissiveIntensity={0.5}
          wireframe={false}
        />
      </Icosahedron>
    </mesh>
  );
}
