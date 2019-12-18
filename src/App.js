import React, { useRef, useState, useEffect } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, useRender, useThree, extend } from 'react-three-fiber'
import { useSpring, a } from "react-spring/three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './App.css';

extend({ OrbitControls })

const Popcorn = () => {
  const [hover, set] = useState(false)
  const props = useSpring({
    scale: hover ? [1.5, 1.5, 1.5] : [1, 1, 1],
  })
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/scene.gltf', setModel)
  })

  return (
    model ? <a.primitive onPointerOver={() => set(true)} onPointerOut={() => set(false)} object={model.scene} scale={props.scale} position={[1, 1, 1]} /> : null
  )
}

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useRender(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const App = () => {
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 75
        }}
      >
        {/* <Controls /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[110, 600, 150]} penumbra={1} castShadow />
        <Popcorn />
      </Canvas>
    </div >
  );
}

export default App;
