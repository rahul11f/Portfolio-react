import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Float, Text } from '@react-three/drei';

export default function FloatingLaptop() {
  const groupRef = useRef();
  const screenRef = useRef();
  
  // Terminal typing effect logic
  const codeLines = [
    '> rahul.init()',
    'Loading modules...',
    'import { skills } from "rahul"',
    '> skills.compile()',
    'Success: Full Stack Ready',
    '> _'
  ];
  const [displayedCode, setDisplayedCode] = useState('');
  
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let text = '';
    
    const typeInterval = setInterval(() => {
      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          text += codeLines[currentLine][currentChar];
          setDisplayedCode(text);
          currentChar++;
        } else {
          text += '\n';
          setDisplayedCode(text);
          currentLine++;
          currentChar = 0;
        }
      } else {
        // Reset typing
        setTimeout(() => {
          currentLine = 0;
          currentChar = 0;
          text = '';
          setDisplayedCode('');
        }, 3000);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth floating and rotating
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
      <group ref={groupRef} position={[0, -0.5, 0]} scale={1.5}>
        
        {/* Laptop Base */}
        <Box args={[2, 0.1, 1.5]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#222222" roughness={0.7} metalness={0.8} />
        </Box>

        {/* Keyboard Keys */}
        <group position={[0, 0.06, -0.1]}>
          {[...Array(5)].map((_, row) => 
            [...Array(14)].map((_, col) => (
              <Box 
                key={`${row}-${col}`} 
                args={[0.1, 0.02, 0.1]} 
                position={[
                  (col - 6.5) * 0.12, 
                  0, 
                  (row - 2) * 0.14
                ]}
              >
                <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.6} roughness={0.2} />
              </Box>
            ))
          )}
          {/* Spacebar */}
          <Box args={[0.6, 0.02, 0.12]} position={[0, 0, 0.42]}>
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.6} roughness={0.2} />
          </Box>
        </group>
        {/* Glowing Keyboard Edge */}
        <Box args={[1.82, 0.01, 0.82]} position={[0, 0.04, -0.1]}>
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
        </Box>

        {/* Trackpad */}
        <Box args={[0.5, 0.02, 0.3]} position={[0, 0.05, 0.55]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>

        {/* Laptop Screen (tilted open) */}
        <group ref={screenRef} position={[0, 0.05, -0.7]} rotation={[-0.3, 0, 0]}>
          {/* Screen Casing */}
          <Box args={[2, 1.4, 0.05]} position={[0, 0.7, -0.025]}>
            <meshStandardMaterial color="#222222" roughness={0.7} metalness={0.8} />
          </Box>
          
          {/* Glowing Screen Outline */}
          <Box args={[1.95, 1.35, 0.01]} position={[0, 0.7, 0]}>
             <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.2} wireframe />
          </Box>

          {/* Actual Screen Display (Black glass) */}
          <Box args={[1.9, 1.3, 0.02]} position={[0, 0.7, 0.01]}>
            <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.9} />
          </Box>

          {/* Holographic Code Text on Screen */}
          <Text
            position={[-0.85, 1.2, 0.03]}
            fontSize={0.08}
            color="#00ff88"
            anchorX="left"
            anchorY="top"
            lineHeight={1.5}
          >
            {displayedCode}
            <meshStandardMaterial attach="material" color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} />
          </Text>
        </group>

      </group>
    </Float>
  );
}
