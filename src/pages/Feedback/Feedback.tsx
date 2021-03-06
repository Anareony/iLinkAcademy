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
    const [selectedSort, setSelectedSort] = useState<string>('')

    useEffect(() => {
        setStudents([...students].sort((a,b) => { 
            return b.reviewStatus.localeCompare(a.reviewStatus) ||  Number(new Date(b.reviewDate)) -  Number(new Date(a.reviewDate)) 
    }))}, [])

    const sortFeedback = (sort:string) => {
        setSelectedSort(sort)
        console.log(sort)
        if ( sort === 'unpublished') {
            setStudents([...students].sort((a,b) => { 
                return b.reviewStatus.localeCompare(a.reviewStatus)
            }))
        }
        if ( sort === 'canceled') {
            setStudents([...students].sort((a,b) => {
                return a.reviewStatus.localeCompare(b.reviewStatus)
            }))
        }
        if ( sort === 'published') {   
            const publishedReview = students.filter(review => review.reviewStatus === 'published')
            const canceledReview = students.filter(review => review.reviewStatus === 'canceled')       
            const unpublishedReview = students.filter(review => review.reviewStatus === 'unpublished')
            setStudents([...publishedReview, ...canceledReview, ...unpublishedReview])
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
                                <h3>????????????</h3>
                                <Dropdown 
                                    value={selectedSort}
                                    setSelect={sortFeedback}
                                    options={[
                                        {value: 'unpublished', name: '?????????????? ????????????????????????????????'},
                                        {value: 'canceled', name: '?????????????? ??????????????????????'},
                                        {value: 'published', name: '?????????????? ????????????????????????????'}
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