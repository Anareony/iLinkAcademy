import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import brand from './img/brand.svg'
import avatar from '../../shared/assets/1.jpg'

const Container = styled.div`
    padding: 25px 80px 26px;
    background-color: #585CC6;
    color: #fff;
    @media (max-width: 768px) {
        padding: 17px 14px 18px 16px;
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const User = styled.div`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 14px;
    }
`
const ProfilePic = styled.div`
    margin-right: 12px;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Header = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const MobileHeader = styled.div`
    display: none;
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 16px;
    line-height: 14px;
    margin-bottom: 8px;
    @media (max-width: 768px) {
        display: block;
    }
`

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