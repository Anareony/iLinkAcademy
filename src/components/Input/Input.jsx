import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    font-family: 'Gilroy';
    font-size: 14px;
    font-weight: 400;
    color: #8A8A8A;
    line-height: 22px;
    padding: 14px 12px;
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    outline: none;
    width: 100%;

    &:focus {
        border: 1px solid #585CC6;
    }
`

const Input = React.forwardRef((props,ref) => {
    return (
        <StyledInput ref={ref} {...props}/>
    )
})

export default Input