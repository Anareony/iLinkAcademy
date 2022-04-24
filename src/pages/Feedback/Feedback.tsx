import { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'

import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'

import { IStudent } from '../../types/types'
import Dropdown from '../../components/Dropdown/Dropdown'
import FeedbackList from './FeedbackList/FeedbackList'

import none from '../../shared/assets/wolf.svg'

const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 64px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Scroll = styled.div`
    margin-top: 43px;
    overflow-y: scroll;
    height: 410px;
    &::-webkit-scrollbar { 
        display: none;
    }
    @media (max-width: 768px) {
        margin-top: 16px;
    }
`
const Container = styled.div`
    margin: 59px 80px 0 26px;
    width: 100%;

    @media (max-width: 768px) {
        margin: 0;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        margin: 24px 0 0 16px;
        flex-direction: column;
        align-items: flex-start;
        font-size: 22px;
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 110px auto;

    @media (max-width: 768px) {
        margin: 110px auto 126px;
    }
`
const Img = styled.img`

    @media (max-width: 768px) {
        width: 240px;
    }
`

const Feedback: React.FC = () => {

    const [students, setStudents] = useState<IStudent[]>((require('../../students.json')))
    const [selectedSort, setSelectedSort] = useState('')

    useEffect(() => {
        setStudents([...students].sort((a:any,b:any) => b.reviewStatus.localeCompare(a.reviewStatus)))
    }, [])

    const sortFeedback = (sort:any) => {
        setSelectedSort(sort)
        console.log(sort)
        if ( sort === 'unpublished') {
            setStudents([...students].sort((a:any,b:any) => b.reviewStatus.localeCompare(a.reviewStatus)))
        }
        if ( sort === 'canceled') {
            setStudents([...students].sort((a:any,b:any) => a.reviewStatus.localeCompare(b.reviewStatus)))
        }
        if ( sort === 'published') {
            setStudents([...students].sort((a:any,b:any):any => {
                if(a.reviewStatus[0] < b.reviewStatus[0]) {
                    return 1
                }
                if(a.reviewStatus[0] > b.reviewStatus[0]) {
                    return -1
                }
            }))           
        }   
    }

    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar whoIsActive={'feedback'}/>
                { students.length !== 0
                        ?
                        <Container>
                            <Header>
                                <h3>Отзывы</h3>
                                <Dropdown 
                                    value={selectedSort}
                                    setSelect={sortFeedback}
                                    options={[
                                        {value: 'unpublished', name: 'Сначала неопубликованные'},
                                        {value: 'canceled', name: 'Сначала отклоненные'},
                                        {value: 'published', name: 'Сначала опубликованные'}
                                ]}/>            
                            </Header>
                            <Scroll>
                                <FeedbackList students={students}/>
                            </Scroll>
                         </Container>
                    :   <ImgContainer>
                            <Img src={none} alt='none'/>
                        </ImgContainer>
                }
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Feedback