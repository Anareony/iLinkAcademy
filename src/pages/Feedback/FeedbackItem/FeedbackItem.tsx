import React, { useState } from 'react'

import Feedback from '../../../components/FeedbackCard/FeedbackCard'
import ReviewModal from '../ReviewModal/ReviewModal'

import icon from '../assets/Edit.svg'
import canceled from '../assets/canceled.svg'
import approved from '../assets/approved.svg'

import { BtnsContainer, Container, Img, ReviewCancled, ReviewPublished, Btns, ButtonWithIcon, ButtonTomato, Button } from './styles'
import { IReview } from '../../../store/reviews'

type FeedbackItemProps = {
    student: IReview;
    setToast(value:boolean): void;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({student, setToast}) => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [reviewStat, setReviewStat] = useState<string>(student.status)

    const setStatus = (value:string) => {
        student.status = value
        setReviewStat(value)
    }

    function ReviewStatus() {
        if (reviewStat === 'approved') {
            return <ReviewPublished><Img src={approved}/>Отзыв опубликован</ReviewPublished>
        } else if (reviewStat === 'declined') {
            return <ReviewCancled><Img src={canceled}/>Отзыв отклонен</ReviewCancled>
        }
        return  <Btns>
                    <BtnsContainer> 
                        <Button onClick={() => setStatus('published')}>Опубликовать</Button>
                        <ButtonTomato onClick={() => setStatus('canceled')}>Отклонить</ButtonTomato>
                    </BtnsContainer> 
                    <ButtonWithIcon onClick={() => setModalIsOpen(true)}><img src={icon} alt='icon'/></ButtonWithIcon>
                </Btns>
    }

    return (
        <Container>
            <Feedback 
                name={student.authorName}
                about={student.text}
                avatar={student.authorImage}
                date={student.createdAt}
            />
            <ReviewStatus/>
            { modalIsOpen && <ReviewModal review={student.text} closeModal={setModalIsOpen} setSucces={setToast}/>}
        </Container>
    )
}

export default FeedbackItem