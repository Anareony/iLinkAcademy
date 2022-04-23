import { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination/Pagination'

import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'

import ReviewModal from './ReviewModal/ReviewModal'

import { IStudent } from '../../types/types'
import Dropdown from '../../components/Dropdown/Dropdown'
import FeedbackList from './FeedbackList/FeedbackList'

const Wrapper = styled.div`
    display: flex;
    position: relative;
`
const Scroll = styled.div`
    margin-top: 43px;
    overflow-y: scroll;
    height: 410px;
    &::-webkit-scrollbar { 
        display: none;
    }
`
const Container = styled.div`
    margin: 59px 80px 0 26px;
    width: 100%;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Feedback: React.FC = () => {

    const [students, setStudents] = useState<IStudent[]>((require('../../students.json')))
    const [selectedSort, setSelectedSort] = useState('')

    useEffect(() => {
        setStudents([...students].sort((a:any,b:any) => b.reviewStatus.localeCompare(a.reviewStatus)))
    }, [setStudents])

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
                    : <h1>'none'</h1>
                }
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Feedback