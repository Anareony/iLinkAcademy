import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import FormPasswordRecovery from './FormPasswordRecovery/FormPasswordRecovery';

import ilink from '../../shared/assets/ilink.svg'

import { Main } from './styles'

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