import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import brand from './img/brand.svg'
import avatar from '../../components/FeedbackCard/img/Camera.svg'

import { MobileHeader, Header, ProfileWrapper, Img, ProfilePic, User, Nav, Container } from './styles'
import { useStore } from 'effector-react'
import { userStore } from '../../store/store'

const HeaderAdmin: React.FC = () => {

    const userInfo = useStore(userStore.$userInfo)
    useEffect(() => {
        userStore.getUserInfo()
    },[])

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
                                {/* <Img src={`https://academtest.ilink.dev/images/${userInfo.profileImage}`} alt='avatar'/> */}
                            </ProfilePic>
                            <div>{userInfo.firstName} {userInfo.lastName}</div>
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