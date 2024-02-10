import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";
import { useMediaQuery } from "react-responsive";

const Model = () => {
  const model = useGLTF("./model3D/scene.gltf");

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const scale = isSmallScreen ? 0.07 : 0.10;

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={model.scene}
        scale={scale}
        position={[0, -0.05, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 10], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "400px",}}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5} 
          minPolarAngle={Math.PI / 3} 
          maxAzimuthAngle={Math.PI / 4} 
          minAzimuthAngle={-Math.PI / 4} 
          target={[0, -0.05, -1.5]}
          enableDamping={true} 
          dampingFactor={0.015} 
        />
        <Model />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;
