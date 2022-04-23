import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import brand from './img/brand.svg'
import avatar from '../../shared/assets/1.jpg'

const Container = styled.div`
    padding: 25px 80px 26px;
    background-color: #585CC6;
    color: #fff;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const User = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
`
const ProfilePic = styled.div`
    margin-right: 12px;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
`

const HeaderAdmin: React.FC = () => {
    return (
        <header>
            <Container>
                <Nav>
                    <User>
                        <ProfilePic>
                            <Img src={avatar} alt='avatar'/>
                        </ProfilePic>
                        <span>Роман Чудояков</span>
                    </User>
                    <div>
                        <h3>
                            Панель управления
                        </h3>
                    </div>
                    <Link to='/'>
                        <img src={brand} alt="logo" />
                    </Link>
                </Nav>
            </Container>
        </header>
    )
}

export default HeaderAdmin