import styled  from 'styled-components'

import img from './img/Vector.svg'

const StyledButton = styled.button`
    border: none;
    border-radius: 2px;
    background: #585CC6;
    color: #fff;
    padding: 17px 28px;
    font-size: 18px;
    display: flex;
    align-items: center;
    line-height: 18px;
    cursor: pointer;
    font-family: 'Gilroy';
    font-weight: 600;   
    gap: 10px; 

    &:hover::before {
        opacity: 1;
    }
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
 const Icon = styled.div`
    background: url(${img}) no-repeat;
    background-position: center;
    width: 18px;
    height: 18px;
 `
 export { StyledButton, Icon }