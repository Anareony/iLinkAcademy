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
    setToast(value:boolean): void;
}

const Button = styled.button`
    padding: 17px 28px;
    border: none;
    border-radius: 2px;
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

    @media (max-width: 1300px) {
        font-size: 13px;
        padding: 8px 14px;
    }

    @media (max-width: 1100px) {
        font-size: 12px;
        padding: 6px 10px;
    }

    @media (max-width: 900px) {
        font-size: 14px;
        padding: 8px 14px;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`

const ButtonTomato = styled(Button)`
    display: flex;
    align-items: center;
    margin-left: 12px;
    background: #EB5757;
    @media (max-width: 768px) {
        margin-left: 6px;
        padding: 12px 15px;
    }
`

const ButtonWithIcon = styled(Button)`
    display: flex;
    padding: 17px;

    @media (max-width: 1300px) {
        padding: 15px;
    }

    @media (max-width: 1100px) {
        padding: 12px;
    }

    @media (max-width: 900px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        margin-left: 6px;
        padding: 12px;
    }
`
const Btns = styled.div`
    display: flex;
    margin: 0 24px;

    justify-content: space-between;

    @media (max-width: 1300px) {
        margin-left: 24px;
    }

    @media (max-width: 1100px) {
        margin-left: 14px;
    }
    
    @media (max-width: 768px) {
        margin-top: 12px;
        margin-left: 10px;
    }
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
    @media (max-width: 768px) {
        margin-top: 0;
    }
`

const ReviewCancled = styled(ReviewPublished)`
    color: #EB5757;
`

const Img = styled.img`
    margin-left: 24px;
    margin-right: 14px;

    @media (max-width:768px) {
        width: 24px;
        height: 24px;
        margin-left: 10px;
        margin-right: 6px;
    }
`
const Container = styled.div`
    width: 100%;

    @media (max-width: 1250px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        margin: 0 16px;
    }
`

const BtnsContainer = styled.div`
    display: flex;

`

const FeedbackItem: React.FC<FeedbackItemProps> = ({student,setToast}) => {

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
                    <BtnsContainer> 
                        <Button onClick={() => {student.reviewStatus = 'published';setReviewStat('published')}}>Опубликовать</Button>
                        <ButtonTomato onClick={() => {student.reviewStatus = 'canceled';setReviewStat('canceled')}}>Отклонить</ButtonTomato>
                    </BtnsContainer> 
                    <ButtonWithIcon onClick={() => setModalIsOpen(true)}><img src={icon} alt='icon'/></ButtonWithIcon>
                </Btns>
    }

    return (
        <Container>
            <Feedback 
                name={student.name}
                surname={student.surname}
                about={student.about}
                avatar={student.avatar}
                position={student.position}
                date={student.reviewDate}
            />
            <ReviewStatus/>
            { modalIsOpen && <ReviewModal review={student.about} closeModal={setModalIsOpen} setSucces={setToast}/>}
        </Container>
    )
}

export default FeedbackItem