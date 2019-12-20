import React, { useRef, useState } from 'react';
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, useRender, useThree, extend } from 'react-three-fiber'

import Bucket from "./components/models/BucketModel"
import Popcorn from "./components/models/PopcornModel"
import './App.css';

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()
  console.log(camera.position)
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

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="red" />
  </mesh>
)

const App = () => {
  const [array, setArray] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

  return (
    <div className="App">
      <Canvas
        camera={{
          position: [-4, 2, 9],
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        {/* <Controls /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 30, 5]} penumbra={1} castShadow />
        <fog attach="fog" args={["black", 5, 30]} />
        {array.map(() => <Popcorn
          position={[Math.random() * 5, Math.random() * 7, Math.random() * 2]}
          rotation={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
          scale={[Math.random(), Math.random(), Math.random()]}
        />)}
        <Bucket />
        <Plane />
      </Canvas>
    </div >
  );
}

export default App;
