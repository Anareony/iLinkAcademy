import React from 'react'

import { StyledButton } from './styles'

type Props = {
    children: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
}

const Button: React.FC<Props> = ({children, type, onClick}) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;