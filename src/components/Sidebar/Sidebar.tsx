import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import users from './img/Users.svg'
import chat from './img/Chat.svg'
import paper from './img/Paper.svg'
import usersHover from './img/UsersHover.svg'
import chatHover from './img/ChatHover.svg'
import paperHover from './img/PaperHover.svg'
import usersActive from './img/UsersActive.svg'
import chatActive from './img/ChatActive.svg'
import paperActive from './img/PaperActive.svg'

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
interface ImgProps {
    imghover: string;
    imgactive: string
}

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

const StyledLink = styled(Link)<ImgProps>`
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

interface ISidebar {
    whoIsActive: 'students' | 'feedback' | 'aboutme'
}

const Sidebar: React.FC<ISidebar> = ({whoIsActive}) => {

    return (
        <Container>
            <Btns>
                <StyledLink 
                    className={ whoIsActive === 'students' ? 'active' : ''} 
                    imghover={usersHover}
                    imgactive={usersActive}  
                    to='/students'>
                        <Img img={users}/>Участники
                    </StyledLink>
                <StyledLink 
                    className={ whoIsActive === 'feedback' ? 'active' : ''} 
                    imghover={chatHover}
                    imgactive={chatActive}  
                    to='/feedback'>
                    <Img img={chat}/>Отзывы
                </StyledLink>
                <StyledLink 
                    className={ whoIsActive === 'aboutme' ? 'active' : ''} 
                    imghover={paperHover}
                    imgactive={paperActive} 
                    to='/aboutme'>
                    <Img img={paper}/>Обо мне
                </StyledLink>
            </Btns>
        </Container>
    )
}

export default Sidebar