import React from 'react'

import { StyledButton } from './styles'

interface Props {
    children: JSX.Element|JSX.Element[]|string;
    type?: 'button' | 'submit';
    onClick?: () => void;
    disabled?: boolean; 
    style?: React.CSSProperties;
    className?: string;
}

export const Button: React.FC<Props> = ({children, type, onClick,disabled, className, style}) => {
    return (
        <StyledButton type={type} onClick={onClick} disabled={disabled} className={className} style={style}>
            {children}
        </StyledButton>
    )
}