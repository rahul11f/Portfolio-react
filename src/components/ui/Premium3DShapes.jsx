import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Cylinder, Box, Sphere } from '@react-three/drei';
import { useRef } from 'react';

// CS Meaning: Database / Storage
function DatabaseShape({ position, scale, speed, floatIntensity, rotationIntensity }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.1 * speed;
    groupRef.current.rotation.y = t * 0.15 * speed;
  });

  return (
    <Float position={position} speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <group ref={groupRef} scale={scale}>
        {[0, 1, 2].map((i) => (
          <Cylinder key={i} args={[1, 1, 0.4, 32]} position={[0, (i - 1) * 0.6, 0]}>
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.2} wireframe />
          </Cylinder>
        ))}
      </group>
    </Float>
  );
}

// CS Meaning: Network / Graph / Neural Node
function NetworkNodeShape({ position, scale, speed, floatIntensity, rotationIntensity }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.2 * speed;
    groupRef.current.rotation.y = t * 0.1 * speed;
    groupRef.current.rotation.z = t * 0.1 * speed;
  });

  return (
    <Float position={position} speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <group ref={groupRef} scale={scale}>
        {/* Core Node */}
        <Sphere args={[0.5, 16, 16]}>
          <meshStandardMaterial color="#00ccff" emissive="#00ccff" emissiveIntensity={0.5} wireframe />
        </Sphere>
        
        {/* Connected Node 1 */}
        <Cylinder args={[0.05, 0.05, 1.5]} position={[0.75, 0.75, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <meshStandardMaterial color="#00ccff" />
        </Cylinder>
        <Sphere args={[0.2, 16, 16]} position={[1.5, 1.5, 0]}>
          <meshStandardMaterial color="#00ccff" wireframe />
        </Sphere>

        {/* Connected Node 2 */}
        <Cylinder args={[0.05, 0.05, 1.5]} position={[-0.75, -0.75, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <meshStandardMaterial color="#00ccff" />
        </Cylinder>
        <Sphere args={[0.2, 16, 16]} position={[-1.5, -1.5, 0]}>
          <meshStandardMaterial color="#00ccff" wireframe />
        </Sphere>
      </group>
    </Float>
  );
}

// CS Meaning: Processor / Microchip
function MicrochipShape({ position, scale, speed, floatIntensity, rotationIntensity }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.PI / 4 + t * 0.05 * speed;
    groupRef.current.rotation.y = t * 0.1 * speed;
  });

  return (
    <Float position={position} speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <group ref={groupRef} scale={scale}>
        {/* Main Chip Body */}
        <Box args={[2, 0.2, 2]}>
          <meshStandardMaterial color="#0a0a0a" emissive="#ff00cc" emissiveIntensity={0.2} wireframe />
        </Box>
        
        {/* Pins on the edges */}
        {[-0.6, 0, 0.6].map((offset, i) => (
          <group key={i}>
            <Box args={[0.1, 0.1, 0.4]} position={[offset, 0, 1.1]}>
              <meshStandardMaterial color="#ff00cc" />
            </Box>
            <Box args={[0.1, 0.1, 0.4]} position={[offset, 0, -1.1]}>
              <meshStandardMaterial color="#ff00cc" />
            </Box>
            <Box args={[0.4, 0.1, 0.1]} position={[1.1, 0, offset]}>
              <meshStandardMaterial color="#ff00cc" />
            </Box>
            <Box args={[0.4, 0.1, 0.1]} position={[-1.1, 0, offset]}>
              <meshStandardMaterial color="#ff00cc" />
            </Box>
          </group>
        ))}
      </group>
    </Float>
  );
}

// CS Meaning: Programming / Code Symbols
function CodeSymbol({ text, position, scale, speed, floatIntensity, rotationIntensity, color }) {
  return (
    <Float position={position} speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <Text
        scale={scale}
        color={color}
        fontSize={1}
        font="https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weX4RVZDQd-SX8A.woff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshStandardMaterial attach="material" color={color} emissive={color} emissiveIntensity={0.5} wireframe />
      </Text>
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
        
        <DatabaseShape position={[-5, 2, -6]} scale={1.2} speed={1.5} floatIntensity={2} rotationIntensity={1} />
        <NetworkNodeShape position={[5, -2, -8]} scale={1.5} speed={1} floatIntensity={1.5} rotationIntensity={1.5} />
        <MicrochipShape position={[4, 3, -5]} scale={1} speed={0.8} floatIntensity={2} rotationIntensity={2} />
        
        <CodeSymbol text="{ }" position={[-4, -3, -4]} scale={1.5} speed={2} floatIntensity={2} rotationIntensity={0.5} color="#00ff88" />
        <CodeSymbol text="< />" position={[0, -4, -6]} scale={2} speed={1.2} floatIntensity={1} rotationIntensity={0.8} color="#00ccff" />
        <CodeSymbol text="[ ]" position={[2, 4, -7]} scale={1.8} speed={1.5} floatIntensity={2.5} rotationIntensity={0.3} color="#ff00cc" />
        <CodeSymbol text=";" position={[-1, 2, -5]} scale={3} speed={0.5} floatIntensity={3} rotationIntensity={1} color="#ffffff" />
      </Canvas>
    </div>
  );
}
