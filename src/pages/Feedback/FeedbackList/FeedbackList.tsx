import React, { useState } from 'react'

import FeedbackItem from '../FeedbackItem/FeedbackItem'
import ToastSucces from '../../../components/ToastSucces/ToastSucces';

import { Wrapper } from './styles'
import { useStore } from 'effector-react';
import { IReview, userReviewsStore } from '../../../store/reviews';

type FeedbackListProps = {
    students: IReview[]
}

const FeedbackList: React.FC<FeedbackListProps> = ({students}) => {

    const [succes, setSucces] = useState<boolean>(false)
    const userReviews = useStore(userReviewsStore.$userReviews)
    // console.log(userReviews)
    return (
        <div>
            <Wrapper>
                {students.map(student => 
                    <FeedbackItem setToast={setSucces} key={student.id} student={student}/>
                )}
            </Wrapper>
            <ToastSucces 
                title="Отзыв изменен"
                body="Отзыв успешно отредактирован!"
                show={succes} 
                setShow={setSucces}
            ></ToastSucces>       
        </div>
    )
}

export default FeedbackList