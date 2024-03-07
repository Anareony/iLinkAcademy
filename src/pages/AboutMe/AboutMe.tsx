import React from 'react'

import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import AboutMeForm from './AboutMeForm/AboutMeForm';

import { Wrapper, Container } from './styles'

const AboutMe: React.FC = () => {

    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar/>
                <Container>
                    <AboutMeForm/>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default AboutMe