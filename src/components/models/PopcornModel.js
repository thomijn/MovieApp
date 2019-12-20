import React, { useRef, useState, useEffect } from 'react';
import { useSpring, a, config } from "react-spring/three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Popcorn = ({ position, rotation, scale }) => {

    const [hover, set] = useState(false)
    const props = useSpring({
        from: {
            position: [0.5, 0.5, 0.5]
        },
        scale: hover ? [0.9, 0.9, 0.9] : [0.8, 0.8, 0.8],
        config: config.wobbly
    })
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/popcorn/scene.gltf', setModel)
    }, [])

    return (
        model ? <a.primitive
            onClick={() => console.log("clocked")}
            rotation={rotation}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            object={model.scene}
            scale={props.scale}
            position={position} /> : null
    )
}

export default Popcorn