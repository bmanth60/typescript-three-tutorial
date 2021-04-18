import { useFrame } from '@react-three/fiber'

export default function Dolly() {
    useFrame(state => {
        const time = state.clock.getElapsedTime()
        state.camera.position.z = 5 + Math.sin(time)
        state.camera.position.x = Math.sin(time) * -2
        state.camera.updateProjectionMatrix()
    })
    
    return null
}

