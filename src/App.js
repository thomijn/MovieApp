import React, { useRef, useState, useEffect } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, useRender, useThree, extend, useFrame } from 'react-three-fiber'
import { useSpring, a, config } from "react-spring/three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './App.css';

extend({ OrbitControls })

const Popcorn = ({ position, rotation, scale }) => {

  const [hover, set] = useState(false)
  const props = useSpring({
    from: {
      position: [0.5, 0.5, 0.5]
    },
    scale: hover ? [1, 1, 1] : [0.8, 0.8, 0.8],
    config: config.stiff
  })
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/popcorn/scene.gltf', setModel)
  }, [])

  return (
    model ? <a.primitive
      opacity={0.5}
      rotation={rotation}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      object={model.scene}
      scale={props.scale}
      position={position} /> : null
  )
}

const Cup = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/Cup/scene.gltf', setModel)
  }, [])
  return (
    model ? <a.primitive
      rotation={[0.1, 10, 0.1]}
      // onPointerOver={() => set(true)}
      // onPointerOut={() => set(false)}
      object={model.scene}
      scale={[0.1, 0.1, 0.1]}
      position={[1, -8, -3]} /> : null
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
  const [array, setArray] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 75
        }}
      >
        {/* <Controls /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[110, 600, 150]} penumbra={1} castShadow />
        {array.map(() => <Popcorn
          position={[Math.random() * 5, Math.random() * 5, Math.random() * 5]}
          rotation={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
          scale={[Math.random(), Math.random(), Math.random()]}
        />)}
        <Cup />
      </Canvas>
    </div >
  );
}

export default App;
