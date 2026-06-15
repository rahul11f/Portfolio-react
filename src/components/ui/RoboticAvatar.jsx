import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export default function RoboticAvatar() {
  const groupRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const headRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Rocking body side to side and bouncing
    groupRef.current.rotation.z = Math.sin(t * 4) * 0.15;
    groupRef.current.position.y = Math.abs(Math.sin(t * 8)) * 0.15 - 1.5;

    // Rocking head to the beat
    headRef.current.rotation.x = Math.sin(t * 4) * 0.3;
    headRef.current.rotation.y = Math.sin(t * 2) * 0.2;

    // Swinging arms (dancing)
    leftArmRef.current.rotation.x = Math.sin(t * 8) * 0.8;
    leftArmRef.current.rotation.z = Math.cos(t * 4) * 0.3;
    rightArmRef.current.rotation.x = -Math.sin(t * 8) * 0.8;
    rightArmRef.current.rotation.z = -Math.cos(t * 4) * 0.3;
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Legs (Blue Jeans) */}
      <Box args={[0.4, 1.4, 0.4]} position={[-0.3, 0.7, 0]}>
        <meshStandardMaterial color="#2d5a8b" roughness={0.7} />
      </Box>
      <Box args={[0.4, 1.4, 0.4]} position={[0.3, 0.7, 0]}>
        <meshStandardMaterial color="#2d5a8b" roughness={0.7} />
      </Box>

      {/* Shoes (Sneakers) */}
      <Box args={[0.45, 0.2, 0.5]} position={[-0.3, 0.1, 0.05]}>
        <meshStandardMaterial color="#ffffff" roughness={0.8} />
      </Box>
      <Box args={[0.45, 0.2, 0.5]} position={[0.3, 0.1, 0.05]}>
        <meshStandardMaterial color="#ffffff" roughness={0.8} />
      </Box>

      {/* Body (Graphic T-Shirt) */}
      <Box args={[1.2, 1.5, 0.6]} position={[0, 2.15, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </Box>
      
      {/* T-Shirt glowing logo (CS Theme) */}
      <Box args={[0.6, 0.6, 0.05]} position={[0, 2.2, 0.31]}>
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} wireframe />
      </Box>

      {/* Backpack straps */}
      <Box args={[0.2, 1.55, 0.65]} position={[-0.4, 2.15, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>
      <Box args={[0.2, 1.55, 0.65]} position={[0.4, 2.15, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>
      
      {/* Backpack */}
      <Box args={[1, 1.4, 0.5]} position={[0, 2.1, -0.45]}>
        <meshStandardMaterial color="#222" roughness={0.8} />
      </Box>

      {/* Head */}
      <group ref={headRef} position={[0, 3.4, 0]}>
        {/* Face */}
        <Box args={[0.9, 0.9, 0.9]}>
          <meshStandardMaterial color="#ffdbac" />
        </Box>
        {/* Hair (Messy college hair) */}
        <Box args={[1.0, 0.2, 1.0]} position={[0, 0.45, 0]}>
          <meshStandardMaterial color="#2a1f1a" />
        </Box>
        <Box args={[1.0, 0.3, 0.3]} position={[0, 0.4, 0.35]}>
          <meshStandardMaterial color="#2a1f1a" />
        </Box>
        {/* Nerdy Thick Glasses */}
        <group position={[0, 0.1, 0.46]}>
          <Box args={[0.35, 0.25, 0.05]} position={[-0.22, 0, 0]}>
            <meshStandardMaterial color="#111" />
          </Box>
          <Box args={[0.25, 0.15, 0.06]} position={[-0.22, 0, 0]}>
            <meshStandardMaterial color="#88ccff" transparent opacity={0.6} />
          </Box>

          <Box args={[0.35, 0.25, 0.05]} position={[0.22, 0, 0]}>
            <meshStandardMaterial color="#111" />
          </Box>
          <Box args={[0.25, 0.15, 0.06]} position={[0.22, 0, 0]}>
            <meshStandardMaterial color="#88ccff" transparent opacity={0.6} />
          </Box>

          <Box args={[0.15, 0.05, 0.05]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#111" />
          </Box>
        </group>
      </group>

      {/* Left Arm */}
      <group position={[-0.8, 2.7, 0]}>
        <group ref={leftArmRef} position={[0, -0.7, 0]}>
          {/* Sleeve */}
          <Box args={[0.4, 0.6, 0.4]} position={[0, 0.4, 0]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
          {/* Arm */}
          <Box args={[0.3, 0.8, 0.3]} position={[0, -0.3, 0]}>
            <meshStandardMaterial color="#ffdbac" />
          </Box>
        </group>
      </group>

      {/* Right Arm */}
      <group position={[0.8, 2.7, 0]}>
        <group ref={rightArmRef} position={[0, -0.7, 0]}>
          {/* Sleeve */}
          <Box args={[0.4, 0.6, 0.4]} position={[0, 0.4, 0]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
          {/* Arm */}
          <Box args={[0.3, 0.8, 0.3]} position={[0, -0.3, 0]}>
            <meshStandardMaterial color="#ffdbac" />
          </Box>
        </group>
      </group>
    </group>
  );
}
