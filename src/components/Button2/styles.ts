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
    background-color: #585CC6;
    transition: all 400ms ease-in;

    &::before {
        position: absolute;
        content: "";
        inset: 0; /* same as { top: 0; right: 0; bottom: 0; left: 0; } */
        background: linear-gradient(to right, #696DC8 50%, #585CC6 50%);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.25s linear;
      }

    &:hover::before {
        opacity: 1;
    }
    &:hover {
        background-color: #696DC8;
    }

    &:active {
        background: #797DDF;
    }

    &:disabled {
        background: #8A8A8A;
    }
 `
 export { StyledButton }