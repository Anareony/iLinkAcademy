import React, { useState } from 'react'
import { IStudent } from '../../../types/types'

import Feedback from '../../../components/FeedbackCard/FeedbackCard'
import ReviewModal from '../ReviewModal/ReviewModal'

import icon from '../assets/Edit.svg'
import canceled from '../assets/canceled.svg'
import approved from '../assets/approved.svg'

import { BtnsContainer, Container, Img, ReviewCancled, ReviewPublished, Btns, ButtonWithIcon, ButtonTomato, Button } from './styles'

type FeedbackItemProps = {
    student: IStudent;
    setToast(value:boolean): void;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({student,setToast}) => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [reviewStat, setReviewStat] = useState<string>(student.reviewStatus)

    const setStatus = (value:string) => {
        student.reviewStatus = value
        setReviewStat(value)
    }

    function ReviewStatus() {
        if (reviewStat === 'published') {
            return <ReviewPublished><Img src={approved}/>Отзыв опубликован</ReviewPublished>
        } else if (reviewStat === 'canceled') {
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