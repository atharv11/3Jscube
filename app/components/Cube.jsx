"use client";
import { useRef } from "react";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Cube() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[1,5,2]}/>
        <Index />
      </Canvas>
    </div>
  );
}

function Index() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 1.1;
    mesh.current.rotation.y += delta * 1.1;
    mesh.current.rotation.z += delta * 1.1;
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}
