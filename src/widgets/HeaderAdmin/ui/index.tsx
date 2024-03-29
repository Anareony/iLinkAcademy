import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'

import { UserModel } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar'

import brand from 'shared/assets/brandWhite.svg'

import { MobileHeader, Header, ProfileWrapper, User, Nav, Container, LastName } from './styles'

export const HeaderAdmin: React.FC = () => {

    useEffect(() => {
        UserModel.getUser()
    }, [])

    const user = useStore(UserModel.$user)

    return (
        <header>
            <Container>
                <Nav>
                    <User>
                        <MobileHeader>
                            Панель управления
                        </MobileHeader>
                        <ProfileWrapper>
                            <Avatar avatar={user.profileImage}/>
                            <div>{user.firstName}&nbsp;</div>
                            <LastName>{user.lastName}</LastName>
                        </ProfileWrapper>
                    </User>
                    <Header>
                        Панель управления
                    </Header>
                    <Link to='/'>
                        <img src={brand} alt="logo" />
                    </Link>
                </Nav>
            </Container>
        </header>
    )
}