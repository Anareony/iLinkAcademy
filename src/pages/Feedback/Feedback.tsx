import { useState, useEffect } from 'react'

import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dropdown from '../../components/Dropdown/Dropdown'
import FeedbackList from './FeedbackList/FeedbackList'

import none from '../../shared/assets/wolf.svg'

import { Img, ImgContainer, Header, Container, Scroll, Wrapper } from './styles'
import { useStore } from 'effector-react'
import { IReview, userReviewsStore } from '../../store/reviews'

const Feedback: React.FC = () => {

    const [selectedSort, setSelectedSort] = useState<string>('')
    
    const reviews = useStore(userReviewsStore.$userReviews)

    useEffect(() => {
        userReviewsStore.getUserReviews([])
    }, [])
    const sortByTime = (a: IReview, b: IReview) => {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    };
    const filterPublishReviews = (array: IReview[]) => {
        return array.filter(element => element.status === "approved").sort((a, b) => sortByTime(a, b));
    }

    const filterRejectedReviews = (array: IReview[]) => {
        return array.filter(element => element.status === "declined").sort((a, b) => sortByTime(a, b));
    }

    const filterUnpublishedReviews = (array: IReview[]) => {
        return array.filter(element => element.status === "onCheck").sort((a, b) => sortByTime(a, b));
    }

const dropDownFiltered = (dropdownValue: string, array: IReview[]) => {
    let result = [];
    if (dropdownValue === "declined") {
        result.push(...filterRejectedReviews(array));
        result.push(...filterPublishReviews(array));
        result.push(...filterUnpublishedReviews(array));

    } else if (dropdownValue === "approved") {
        result.push(...filterPublishReviews(array));
        result.push(...filterUnpublishedReviews(array));
        result.push(...filterRejectedReviews(array));
    } else {
        result.push(...filterUnpublishedReviews(array));
        result.push(...filterRejectedReviews(array));
        result.push(...filterPublishReviews(array));
    }
    return result;
}

    console.log(dropDownFiltered(selectedSort,reviews))
    
    const sortFeedback = (sort:string) => {
        setSelectedSort(sort)
        console.log(sort)
    }

    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar/>
                { reviews.length !== 0
                        ?
                        <Container>
                            <Header>
                                <h3>Отзывы</h3>
                                <Dropdown 
                                    value={selectedSort}
                                    setSelect={sortFeedback}
                                    options={[
                                        {value: 'onCheck', name: 'Сначала неопубликованные'},
                                        {value: 'declined', name: 'Сначала отклоненные'},
                                        {value: 'approved', name: 'Сначала опубликованные'}
                                ]}/>            
                            </Header>
                            <Scroll>
                                <FeedbackList students={dropDownFiltered(selectedSort,reviews)}/>
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