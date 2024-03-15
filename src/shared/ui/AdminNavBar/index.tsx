import React from 'react'

import { ReactComponent as Users } from 'shared/assets/Users.svg'
import { ReactComponent as Chat } from 'shared/assets/Chat.svg'
import { ReactComponent as Paper } from 'shared/assets/Paper.svg'

import { StyledLink, Btns, Container } from './styles'

export const AdminNavBar: React.FC = () => {
    return (
        <Container>
            <Btns>
                <StyledLink to='/students'>
                    <Users/>
                    <p>Участники</p>
                </StyledLink>
                <StyledLink to='/feedbacks'>
                    <Chat/>
                    <p>Отзывы</p>
                </StyledLink>
                <StyledLink to='/about'>
                    <Paper/>
                    <p>Обо мне</p>
                </StyledLink>
            </Btns>
        </Container>
    )
}