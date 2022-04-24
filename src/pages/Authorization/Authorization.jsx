import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Auth from './FormAuth/FormAuth'

import ilink from '../../shared/assets/ilink.svg'

import { Main } from './styles'

const Authorization = () => {

	return (
		<div>
			<Main>
                <Link to='/'>
                    <img src={ilink} alt='ilink'/>
                </Link>
				<Auth/>
			</Main>
			<Footer/>
		</div>
	)
}

export default Authorization