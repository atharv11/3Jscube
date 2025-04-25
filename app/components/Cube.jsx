"use client";
import { useRef } from "react";
import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
export default function Cube() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Canvas>
        <ScrollControls pages={5} damping={.5}>
          <OrbitControls enableZoom={false}  />
          <ambientLight intensity={2} />
          <directionalLight position={[1, 5, 2]} />
          <Index />\
        </ScrollControls>
      </Canvas>
    </div>
  );
}

function Index() {
  const mesh = useRef(null);
  const data = useScroll();
  useFrame((state, delta) => {
    const { offset } = data;
          mesh.current.rotation.x = offset * 5;
      mesh.current.rotation.y = offset * 5;
      mesh.current.rotation.z = offset * 5;
  });
  //   useFrame((state, delta) => {
  //     mesh.current.rotation.x += delta * 0.5;
  //     mesh.current.rotation.y += delta * .5;
  //     mesh.current.rotation.z += delta * 0.5;
  //   });
  const texture = useLoader(TextureLoader, "/assests/grass.jpg");
  const texture1 = useLoader(TextureLoader, "/assests/senpaisan.jpg");
  const texture2 = useLoader(TextureLoader, "/assests/charizard partner1.jpg");

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture} attach="material-0" />
      <meshStandardMaterial map={texture1} attach="material-1" />
      <meshStandardMaterial map={texture1} attach="material-2" />
      <meshStandardMaterial map={texture2} attach="material-3" />
      <meshStandardMaterial map={texture2} attach="material-4" />
      <meshStandardMaterial map={texture2} attach="material-5" />
    </mesh>
  );
}
