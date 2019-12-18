import React, { useRef, useState, useEffect } from 'react';
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, useRender, useThree, extend } from 'react-three-fiber'
import { useSpring, a, config } from 'react-spring/three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './App.css';

extend({ OrbitControls })

const Popcorn = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/scene.gltf', setModel)
  })
  // console.log(model)
  return (
    model ? <primitive object={model.scene} position={[10, 5, 0]} /> : null
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
        camera={{ position: [0, 0, 10] }}
      >
        <Controls />
        <ambientLight intensity={0.5} />
        <spotLight position={[110, 600, 150]} penumbra={1} castShadow />
        <Popcorn />
      </Canvas>
    </div>
  );
}

export default App;
