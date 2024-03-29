import React, { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './styles'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...props}) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}