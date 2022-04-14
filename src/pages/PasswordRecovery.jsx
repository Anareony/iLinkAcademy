import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Footer from '../components/Footer/Footer'
import FormPasswordRecovery from '../components/FormPasswordRecovery/FormPasswordRecovery';

import background2 from './img/background2.svg'
import ilink from './img/ilink.svg'

const Main = styled.main`
    width: 100%;
    height: 100%;
    padding: 40px 406px 592px;
    background-color: #585CC6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${background2});
    background-repeat: no-repeat;
    background-position: center 150%;
    background-size: 100%;

    @media (max-width: 1200px) {
        background-size: 250%;
        background-position: 50% -50%;
    }
    @media (max-width: 900px) {
        padding: 30px 50px 300px;
        background-size: 250%;
        background-position: 50% -50%;
    }
    @media (max-width: 430px) {
        padding: 20px 16px 200px;
        background-size: 350%;
        background-position: center -160%;
    }
`;

const PasswordRecovery = () => {
    return (
        <div>
            <Main>
                <Link to='/'>
                    <img src={ilink} alt='ilink'/>
                </Link>
                <FormPasswordRecovery/>
            </Main>
            <Footer/>
        </div>
    )
}

export default PasswordRecovery