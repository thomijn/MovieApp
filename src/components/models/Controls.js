import React, { useRef } from "react"
import { extend, useThree, useRender } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

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

export default Controls