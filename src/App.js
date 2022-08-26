import './App.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function App() {

  const { scene } = useGLTF("/prism.glb");

  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: false }} >
      <primitive object={scene} >
        <mesh />
      </primitive>
      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;

useGLTF.preload("/prism.glb");