import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type ImgProps = {
    imghover: string;
    imgactive: string
}

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

const Img = styled.div<{img: string}>`
    display: flex;
    width: 20px;
    height: 20px;
    background-image: ${props => `url(${props.img})`};
    margin-right: 12px;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        background-image: none;
        width: 0;
        margin: 0;
    }
`

const StyledLink = styled(NavLink)<ImgProps>`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01rem;
    color: #8A8A8A;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    padding: 12px 0;

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

    &.active ${Img} {
        background:${props => `url(${props.imgactive})`};
        @media (max-width: 768px) {
            background-image: none;
        }
    }

    &:hover{
        color: #797DDF;
    }

    &:hover ${Img} {
        background-image: ${props => `url(${props.imghover})`};
        @media (max-width: 768px) {
            background-image: none;
        }
    }
`

export { StyledLink, Img, Btns, Container }