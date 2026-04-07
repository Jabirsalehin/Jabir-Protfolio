"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00e5ff" />
    </mesh>
  );
}

export default function RubikCube() {
  return (
    <div className="w-full h-[300px]">
      <Canvas>
        <ambientLight />
        <Cube />
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
