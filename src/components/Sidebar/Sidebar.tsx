import React from 'react'

import users from './img/Users.svg'
import chat from './img/Chat.svg'
import paper from './img/Paper.svg'
import usersHover from './img/UsersHover.svg'
import chatHover from './img/ChatHover.svg'
import paperHover from './img/PaperHover.svg'
import usersActive from './img/UsersActive.svg'
import chatActive from './img/ChatActive.svg'
import paperActive from './img/PaperActive.svg'

import { StyledLink, Img, Btns, Container } from './styles'

const Sidebar: React.FC = () => {

    return (
        <Container>
            <Btns>
                <StyledLink 
                    imghover={usersHover}
                    imgactive={usersActive}  
                    to='/students'>
                        <Img img={users}/>Участники
                </StyledLink>
                <StyledLink 
                    imghover={chatHover}
                    imgactive={chatActive}  
                    to='/feedback'>
                    <Img img={chat}/>Отзывы
                </StyledLink>
                <StyledLink 
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