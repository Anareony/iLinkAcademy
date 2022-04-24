import React, { useState } from 'react'

import { IStudent } from '../../../types/types'

import FeedbackItem from '../FeedbackItem/FeedbackItem'
import ToastSucces from '../../../components/ToastSucces/ToastSucces';

import { Wrapper } from './styles'

type FeedbackListProps = {
    students: IStudent[]
}

const FeedbackList: React.FC<FeedbackListProps> = ({students}) => {

    const [succes, setSucces] = useState<boolean>(false)

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