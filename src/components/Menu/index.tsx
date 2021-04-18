import React from 'react'
import styled from '@emotion/styled'

import MenuItem from './MenuItem'

const StyledNav = styled.nav`
    background-color: #f0f;
    width: 100%;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
`


export default function Menu() {
    return (
        <StyledNav>
            <ul>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About</MenuItem>
            </ul>
        </StyledNav>
    )
}