import styled from 'styled-components'
import eye from 'shared/assets/eye.svg'
import eyeHover from 'shared/assets/eyeHover.svg'   
import eyeHide from 'shared/assets/eyeHide.svg'
import eyeHideHover from 'shared/assets/eyeHideHover.svg'
import info from 'shared/assets/InfoSquare.svg'
import show from 'shared/assets/Show.svg'

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
    background-image: url(${eye});
    background-color: #fff;
    width: 24px;
    height: 24px;
    &.hasError {
        right: 45px;
        background-image: url(${show});
    }
    &.active {
        background-image: url(${eyeHide});
    }
    &.active.hasError{
        background-image: url(${eyeHide});
    }
    &:hover.active.hasError {
        background-image: url(${eyeHideHover});
    }
    &:hover.active {
        background-image: url(${eyeHideHover});
    }
    &:hover {
        background-image: url(${eyeHover});
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
    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        color: #8A8A8A;
        line-height: 22px;
        letter-spacing: 0;
    }
    &:focus + ${EyeBtn}.active {
        background-image: url(${eyeHide});
    }
    &:focus + ${EyeBtn} {
        background-image: url(${show});
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

const Msg = styled.span`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    display: none;
    position: absolute;
    bottom: 30px;
    right: -14px;
    background: #fff;
    min-width: 166px;
    max-height: 44px;
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