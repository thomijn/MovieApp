import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from "react-three-fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useStore } from "../../store"

const Popcorn = ({ position, rotation, movie }) => {
    const setSelectedMovie = useStore(state => state.setSelectedMovie)
    const [hover, set] = useState(false)


    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/popcorn/scene.gltf', setModel)
    }, [])

    const ref = useRef()
    useFrame(() => {
        if (ref.current) {
            let scale = (ref.current.scale.x += ((hover ? 1 : 0.8) - ref.current.scale.x) * 0.1)
            ref.current.scale.set(scale, scale, scale)
        }
    })

    return (
        model ? <primitive
            ref={ref}
            onClick={() => setSelectedMovie(movie)}
            rotation={rotation}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            object={model.scene}
            position={position} /> : null
    )
}

export default Popcorn