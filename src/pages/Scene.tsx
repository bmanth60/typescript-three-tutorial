import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box'
import Dolly from '../components/Dolly'
import Isohedron from '../components/Isohedron'

export default function Scene() {
    return (
        <Canvas>
            <ambientLight />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}
