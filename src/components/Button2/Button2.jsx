import React from 'react'

import styled  from 'styled-components'

const StyledButton = styled.button`

    font-size: 18px;
    font-family: "Gilroy";
    font-weight: 600;
    border: none;
    border-radius: 2px;
    padding: 17px 28px;
    background: #585CC6;
    line-height: 17px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to right, #696DC8 50%, #585CC6 50%);
    }

    &:active {
        background: #797DDF;
    }

    &:disabled {
        background: #8A8A8A;
    }
 `
const Button2 = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button2;