import styled from 'styled-components'

const Button = styled.button`
    font-size: 18px;
    font-family: "Gilroy";
    font-weight: 600;
    border: none;
    border-radius: 2px;
    padding: 17px 28px;
    background: #fff;
    cursor: pointer;

    &:active {
        background: #C2C4FF;
    }
    &:disabled {
        background: #E0E0E0;
    }
`

export { Button }