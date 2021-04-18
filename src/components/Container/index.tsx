import React, {PropsWithChildren} from 'react'
import styled from '@emotion/styled'

import {desktopOnly} from '../../theme'

const StyledDiv = styled.div`
    padding: 10px 0;

    ${desktopOnly} {
        max-width: 1000px;
    }
`

export default function Container({children}: PropsWithChildren<{}>) {
    return <StyledDiv>{children}</StyledDiv>
}