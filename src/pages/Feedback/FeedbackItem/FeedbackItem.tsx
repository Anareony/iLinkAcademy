import React, { useState } from 'react'
import { IStudent } from '../../../types/types'

import styled from 'styled-components'
import Feedback from '../../../components/FeedbackCard/FeedbackCard'
import ReviewModal from '../ReviewModal/ReviewModal'

import icon from '../assets/Edit.svg'
import canceled from '../assets/canceled.svg'
import approved from '../assets/approved.svg'

interface FeedbackItemProps {
    student: IStudent;
}

const Button = styled.button`
    padding: 17px 28px;
    border: none;
    background: #585CC6;
    color: #fff;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.01rem;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`

const ButtonTomato = styled(Button)`
    margin-left: 12px;
    background: #EB5757;
`

const ButtonWithIcon = styled(Button)`
    display: flex;
    padding: 17px;
    margin-left: 80px;
`
const Btns = styled.div`
    display: flex;
    margin: 0 24px;
`

const ReviewPublished = styled.div`
    font-family: 'Gilroy';
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.01rem;
    color: #61BF4A;
    display: flex;
    align-items: center;
    margin-top: 17px;
`

const ReviewCancled = styled(ReviewPublished)`
    color: #EB5757;
`

const Img = styled.img`
    margin-left: 24px;
    margin-right: 14px;
`

const FeedbackItem: React.FC<FeedbackItemProps> = ({student}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [reviewStat, setReviewStat] = useState(student.reviewStatus)

    console.log(reviewStat)

    function ReviewStatus() {
        if (reviewStat === 'published') {
            return <ReviewPublished><Img src={approved}/>Отзыв опубликован</ReviewPublished>
        } else if (reviewStat === 'canceled') {
            return <ReviewCancled><Img src={canceled}/>Отзыв отклонен</ReviewCancled>
        }
        return  <Btns>
                    <Button onClick={() => {student.reviewStatus = 'published';setReviewStat('published')}}>Опубликовать</Button>
                    <ButtonTomato onClick={() => {student.reviewStatus = 'canceled';setReviewStat('canceled')}}>Отклонить</ButtonTomato>
                    <ButtonWithIcon onClick={() => setModalIsOpen(true)}><img src={icon} alt='icon'/></ButtonWithIcon>
                </Btns>
    }

    return (
        <div>
            <Feedback 
                name={student.name}
                surname={student.surname}
                about={student.about}
                avatar={student.avatar}
                position={student.position}
                date={student.reviewDate}
            />
            <ReviewStatus/>
            { modalIsOpen && <ReviewModal review={student.about} closeModal={setModalIsOpen}/>}
        </div>
    )
}

export default FeedbackItem