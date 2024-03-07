import React from 'react'

import { StyledButton } from './styles'

type Props = {
    children: JSX.Element|JSX.Element[]|string;
    type?: 'button' | 'submit';
    onClick?: () => void;
    disabled?: boolean; 
    className?: string;
}

const Button: React.FC<Props> = ({children, type, onClick,disabled, className}) => {
    return (
        <StyledButton type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </StyledButton>
    )
}

export default Button;