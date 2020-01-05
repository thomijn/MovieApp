import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from "react-three-fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useHomeStore } from "../../store"

const Popcorn = ({ position, rotation, movie }) => {
    const setSelectedMovie = useHomeStore(state => state.setSelectedMovie)
    const [hover, set] = useState(false)
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/popcorn/scene.gltf', setModel)
    }, [])

    const ref = useRef()
    const time = useRef(0);
    useFrame(() => {
        if (ref.current) {
            if (hover) {
                ref.current.rotation.y += 0.01 * 2.5
            }
            let scale = (ref.current.scale.x += ((hover ? 1 : 0.8) - ref.current.scale.x) * 0.1)
            ref.current.scale.set(scale, scale, scale)
            if (hover) {
                time.current += 0.03;
                ref.current.position.y = position[1] + Math.sin(time.current) * 0.4;
            }
        }
    })

    return (
        model ? <primitive
            ref={ref}
            onClick={() => {
                setSelectedMovie(movie)
            }}
            rotation={rotation}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            object={model.scene}
            position={position} /> : null
    )
}

export default Popcorn