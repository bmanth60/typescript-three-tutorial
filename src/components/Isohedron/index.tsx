import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Isohedron(props: JSX.IntrinsicElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, _delta) => {
        const time = state.clock.getElapsedTime()
        mesh.current.rotation.x += 0.01
        mesh.current.position.y = mesh.current.position.y + Math.sin(time*2)/100;
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(_event) => setActive(!active)}
            onPointerOver={(_event) => setHover(true)}
            onPointerOut={(_event) => setHover(false)}
        >
            <icosahedronBufferGeometry attach="geometry" args={[1, 1]} />
            <meshBasicMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} wireframe />
        </mesh>
    )
}