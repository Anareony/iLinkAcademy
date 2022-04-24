import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";




import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

import AboutMeForm from './AboutMeForm/AboutMeForm';


const Wrapper = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Container = styled.div`
    margin: 70px 80px 0 26px;

    @media (max-width: 900px) {
        margin: 59px 10px 0 10px;
    }

    @media (max-width: 768px) {
        margin: 26px 16px 0 ;
    }
`





const AboutMe: React.FC = () => {


    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar whoIsActive={'aboutme'}/>
                <Container>
                    <AboutMeForm/>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default AboutMe