import React, { Suspense } from 'react'
import * as THREE from "three"
import { Canvas } from "react-three-fiber"

import Bucket from "./BucketModel"
import Popcorn from "./PopcornModel"
import Controls from './Controls'

const CanvasModel = ({ movies }) => {
    return (
        <Canvas
            camera={{
                position: [-4, 2, 9],
            }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}
        >
            <Controls />
            <ambientLight intensity={0.5} />
            <spotLight position={[15, 30, 5]} penumbra={1} castShadow />
            <fog attach="fog" args={["black", 5, 30]} />
            <Suspense fallback={null}>
                {movies.map(movie => <Popcorn
                    key={movie._id}
                    movie={movie}
                    position={[Math.random() * 5, Math.random() * 5, Math.random() * 5 - 3]}
                    rotation={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
                    scale={[Math.random(), Math.random(), Math.random()]}
                />)}
            </Suspense>
            <Suspense fallback={null}>
                <Bucket />
            </Suspense>
        </Canvas>
    )
}

export default CanvasModel