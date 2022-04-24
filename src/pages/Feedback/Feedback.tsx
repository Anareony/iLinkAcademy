import { useState, useEffect } from 'react'

import { IStudent } from '../../types/types'

import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dropdown from '../../components/Dropdown/Dropdown'
import FeedbackList from './FeedbackList/FeedbackList'

import none from '../../shared/assets/wolf.svg'

import { Img, ImgContainer, Header, Container, Scroll, Wrapper } from './styles'

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