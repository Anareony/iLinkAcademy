import React from 'react'
import { Link } from 'react-router-dom'

import brand from './img/brand.svg'
import avatar from '../../components/FeedbackCard/img/Camera.svg'

import { MobileHeader, Header, ProfileWrapper, Img, ProfilePic, User, Nav, Container } from './styles'

const HeaderAdmin: React.FC = () => {
    return (
        <header>
            <Container>
                <Nav>
                    <User>
                        <MobileHeader>
                            Панель управления
                        </MobileHeader>
                        <ProfileWrapper>
                            <ProfilePic>
                                <Img src={avatar} alt='avatar'/>
                            </ProfilePic>
                            <span>Роман Чудояков</span>
                        </ProfileWrapper>
                    </User>
                    <Header>
                            <h3>
                                Панель управления
                            </h3>
                    </Header>
                    <Link to='/'>
                        <img src={brand} alt="logo" />
                    </Link>
                </Nav>
            </Container>
        </header>
    )
}

export default HeaderAdmin