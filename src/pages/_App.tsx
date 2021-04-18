import React from 'react'

import Menu from '../components/Menu'
import Container from '../components/Container'

interface AppProps {
    component: React.ComponentType<any>
}

function App({component: Component}: AppProps) {
    return (
        <>
            <Menu />
            <Container>
                <Component />
            </Container>
        </>
    )
}

export default App
