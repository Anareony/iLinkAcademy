import styled from 'styled-components'
import info from 'shared/assets/InfoSquare.svg'

const Container = styled.div`
    position: relative;
    width: 100%;
`

const EyeBtn = styled.button`
    border: none;
    position: absolute;
    bottom: 14px;
    right: 15px;
    cursor: pointer;
    background-color: #fff;
    width: 24px;
    height: 24px;

    svg path{
        stroke: #8A8A8A;
       
    }
    &.active{
        svg path{
            stroke: #585CC6;
        }
    }
    &:hover {
        svg path{
            stroke: #585CC6;
        }
    }
`
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
    &.active {
        border: 1px solid #585CC6;
    }
    &.hasError {
        border: 1px solid #EB5757;
    }
    &.hasError + ${EyeBtn} {
        right: 45px;
    }
    &:focus + ${EyeBtn} {
        svg path{
            stroke: #585CC6;
        }
    }
    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        color: #8A8A8A;
        line-height: 22px;
        letter-spacing: 0;
    }

`
const InputLabel = styled.label`
    display: inline-block;
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
    @media screen and (max-width: 768px) {
        margin-bottom: 5px;
    }
`

const Msg = styled.p`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    display: none;
    position: absolute;
    bottom: 30px;
    right: -14px;
    background: #F5F5F5;
    min-width: 166px;
`

const Helper = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url(${info});
    right: 15px;
    bottom: 17px;
    cursor: pointer;
    &:hover ${Msg} {
        display: block;
    }
`

export { Helper, Msg, InputLabel, StyledInput, EyeBtn, Container }