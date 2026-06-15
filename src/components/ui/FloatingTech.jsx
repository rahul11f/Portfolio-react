import { Canvas } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

const skills = [
  { text: 'HTML5', position: [-5, 2, -2], scale: 1.2, color: '#e34f26' },
  { text: 'CSS3', position: [5, -1, -3], scale: 1.4, color: '#1572b6' },
  { text: 'JavaScript', position: [-4, -2, -1], scale: 1.1, color: '#f7df1e' },
  { text: 'React', position: [3, 3, 0], scale: 1.6, color: '#61dafb' },
  { text: 'Next.js', position: [-1, 4, -4], scale: 1.3, color: '#ffffff' },
  { text: 'Tailwind', position: [-6, 0, -3], scale: 1.0, color: '#38b2ac' },
  { text: 'Python', position: [6, 2, -2], scale: 1.4, color: '#3776ab' },
  { text: 'Three.js', position: [2, -3, -2], scale: 1.5, color: '#00ff88' },
  { text: 'Node.js', position: [-2, -4, -3], scale: 1.2, color: '#339933' },
];

export default function FloatingTech() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {skills.map((skill, index) => (
          <Float
            key={index}
            speed={1.5 + Math.random()} // Randomize speed slightly
            rotationIntensity={0.5} // Keep rotation low so text remains readable
            floatIntensity={2 + Math.random()} // Up/down float intensity
            floatingRange={[-0.5, 0.5]} // Range of y-axis values
          >
            <Text
              position={skill.position}
              scale={skill.scale}
              color={skill.color}
              fontSize={0.8}
              maxWidth={200}
              lineHeight={1}
              letterSpacing={0.02}
              textAlign="center"
              font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
              anchorX="center"
              anchorY="middle"
              fillOpacity={0.8}
            >
              {skill.text}
              <meshStandardMaterial attach="material" color={skill.color} roughness={0.2} metalness={0.8} />
            </Text>
          </Float>
        ))}
      </Canvas>
    </div>
  );
}
