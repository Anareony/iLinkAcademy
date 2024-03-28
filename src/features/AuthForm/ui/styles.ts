import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'

import info from 'shared/assets/InfoSquare.svg'

const FormWrapper = styled.div`
    margin-top: 35px;
    padding: 40px 40px 24px;
    background: #FFF;
    min-width: 628px;
    min-height: 436px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 25px;
        min-width: 400px;
        max-width: 400px;
        min-height: 386px;
        padding: 30px;
    }
    @media (max-width: 430px) {
        min-width: 288px;
        max-width: 288px;
        min-height: 386px;
        padding: 16px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h3`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #333333;
    margin-bottom: 32px;
    text-align: center;
    @media (max-width: 430px) {
        margin-bottom: 24px;
        font-size: 24px;
        line-height: 32px;
    }

`

const Label = styled.label`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    position: relative;
    @media (max-width: 768px) {
        min-width: 350px;
        max-width: 350px;
    }
    @media (max-width: 430px) {
        max-width: 288px;
        min-width: 288px;
    }

`

const Wrapper = styled.div<{primary?:boolean}>`
    min-width: 548px;
    margin-bottom: ${props => props.primary ? "40px" : "32px"};

    @media (max-width: 768px) {
        min-width: 350px;
        max-width: 350px;
    }
    @media (max-width: 430px) {
        min-width: 256px;
        max-width: 256px;
    }

`

const StyledLink  = styled(Link)`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #585CC6;
    margin-top: 16px;
    &:hover {
        text-decoration: underline;
    }
`


const StyledInput = styled(Input)<{password?:boolean}>`
    margin-top: 2px;
    color: #333333;
    letter-spacing: ${props => props.password ? "0.2em" : "0"};
    font-weight: ${props => props.password ? "600" : "400"};
`

const Msg = styled.span`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    display: none;
    position: absolute;
    top: -40px;
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
    right: 14px;
    bottom: 16px;
    cursor: pointer;
    &:hover ${Msg} {
        display: block;
    }
`

const Error = styled.div`
    width: 100%;
    min-height: 62px;
    background-color: #EB5757;
    display: flex;
    padding: 20px 0;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 87.5%;
    bottom: 50%;
    right: 0%;    
    &.active {
        display: flex;
    }
`

export { Error, FormWrapper, Helper, Msg, StyledInput, StyledLink, Wrapper, Label, Form, Header }