import React from 'react'
import styled from '@emotion/styled'

const FullHeightDiv = styled.div`
    height: 100vh;
`

interface AppProps {
    component: React.ComponentType<any>
}

function App({ component: Component }: AppProps) {
    return (
        <FullHeightDiv>
            <Component />
        </FullHeightDiv>
    )
}

export default App
