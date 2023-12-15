import React from 'react'
import cl from './Header.module.css'
import { Link } from 'react-router-dom'

import avatar from '../../components/FeedbackCard/img/Camera.svg'
import brand from './img/brand.svg'
import profile from '../Button/img/Profile.svg'

import { Heading, Container, Nav, UserInfo, Border, Name, SurName } from './styles'

type IHeader = {
    name: string;
    surname: string;
}

const Header:React.FC<IHeader> = ({name,surname}) => {

    return (
        <Heading>
            <Container>
                <Nav>
                    <UserInfo>
                        <Border>
                            <img className={cl.icon} src={avatar} alt='avatar'/>
                        </Border>
                        <Name>{name}</Name>
                        <SurName>{surname}</SurName>
                    </UserInfo>
                    <Link to='/' className={cl.link}>
                        <img src={brand} alt="logo" />
                    </Link>
                    <Link to='/students'>
                        <button className={cl.btn}>
                            <img className={cl.btnIcon} src={profile} alt='profile'/>
                            <span className={cl.inner}>Панель управления</span>
                        </button>
                    </Link>
                </Nav>
            </Container>
        </Heading>
    )
}

export default Header;