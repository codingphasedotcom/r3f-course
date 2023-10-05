import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <StrictMode>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </StrictMode>
  );
}

export default App;
