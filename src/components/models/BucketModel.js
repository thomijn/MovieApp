import React, { useEffect, useState } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Bucket = () => {
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/Cup/scene.gltf', setModel)
    }, [])

    return (
        model ? <primitive
            rotation={[0.3, 10, 0.2]}
            object={model.scene}
            scale={[0.1, 0.1, 0.1]}
            position={[1, -8, -3]} /> : null
    )
}

export default Bucket