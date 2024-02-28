import React from 'react'
import cl from './Header.module.css'
import { Link } from 'react-router-dom'

import avatar from '../../components/FeedbackCard/img/Camera.svg'
import brand from './img/brand.svg'
import profile from '../Button/img/Profile.svg'

import { Heading, Container, Nav, UserInfo, Border, Name } from './styles'
import { useStore } from 'effector-react'
import { userStore } from '../../store/store'

const Header:React.FC = () => {
    
    const userInfo = useStore(userStore.$userInfo)

    return (
        <Heading>
            <Container>
                <Nav>
                    <UserInfo>
                        <Border>
                            {/* <img className={cl.icon} src={`https://academtest.ilink.dev/images/${userInfo.profileImage}`} alt='avatar'/> */}
                        </Border>
                        <Name>{userInfo.firstName} {userInfo.lastName}</Name>
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