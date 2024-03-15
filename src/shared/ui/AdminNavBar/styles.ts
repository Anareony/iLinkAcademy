import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 200px;
    margin: 0 24px 0 80px;
    padding-top: 59px;
    border-right: 1px solid #E0E0E0;

    @media (max-width: 768px) {
        padding-top: 24px;
        width: 100%;
        margin: 0;
        border-right: 0;
        border-bottom: 1px solid #E0E0E0;
    }
`

const Btns = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }

`

const StyledLink = styled(NavLink)`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01rem;
    color: #8A8A8A;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    padding: 12px 20px 12px 0;

    @media (max-width: 768px) {
        padding: 0 16px 12px;
        margin-bottom: 0;
    }
    

    &.active{
        border-right: 4px solid #585CC6;
        color: #585CC6;

        @media (max-width: 768px) {
            border-right: none;
            border-bottom: 4px solid #585CC6;
        }
    }

    &:hover{
        color: #797DDF;
    }

    p {
        padding-top: 2px;
    }

    svg {
        margin-right: 10px;
        @media (max-width: 768px) {
            display: none;
        }
    }

    &.active svg path {
        fill: #5c60c7;
    }

    &:hover svg path {
        fill: #797DDF;
    }
`

export { StyledLink, Btns, Container }