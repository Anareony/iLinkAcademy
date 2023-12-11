import React from 'react'

import { StyledButton, Icon } from './styles'

type Props = {
    children: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
    style: React.CSSProperties;
}

const ButtonWithIcon: React.FC<Props> = ({children, type, onClick, style}) => {
    return (
        <StyledButton type={type} onClick={onClick} style={style} >
            <Icon/>
            {children}
        </StyledButton>
    )
}

export default ButtonWithIcon;