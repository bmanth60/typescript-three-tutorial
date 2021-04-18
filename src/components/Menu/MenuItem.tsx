import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Link, LinkProps } from "react-router-dom"

const StyledItem = styled.li`
    float: left;
    display: inline;

    &:hover {
        background-color: #A6FAB2;
    }

    a {
        display: block;
        text-decoration: none;
        color: #000;
        text-align: center;
        padding: 10px 16px;
    }
`

export default function MenuItem({children, ...props}: PropsWithChildren<LinkProps>) {
    return <StyledItem><Link {...props}>{children}</Link></StyledItem>
}