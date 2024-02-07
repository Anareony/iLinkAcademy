import styled  from 'styled-components'

const StyledButton = styled.button`
    font-size: 18px;
    font-family: "Gilroy";
    font-weight: 600;
    border: none;
    position: relative;
    border-radius: 2px;
    padding: 17px 28px;
    line-height: 17px;
    color: #fff;
    cursor: pointer;

    background: #585CC6;
    background-image: linear-gradient(#696DC8  ,#696DC8);
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: .4s;

    &:hover {
        background-size: 50% 100%;
    }
    &:active {
        background-size: 100% 100%;
    }
    &:disabled {
        background: #8A8A8A;
    }
 `
 export { StyledButton }