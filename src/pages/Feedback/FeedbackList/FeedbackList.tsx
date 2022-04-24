import React, { useState } from 'react'
import { IStudent } from '../../../types/types'
import styled from 'styled-components'

import FeedbackItem from '../FeedbackItem/FeedbackItem'
import ToastSucces from '../../../components/ToastSucces/ToastSucces';

interface FeedbackListProps {
    students: IStudent[]
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax( 288px, 520px) minmax( 288px, 520px);
    gap: 24px;

    @media (max-width: 900px) {
        grid-template-columns: minmax( 288px, 520px);
        justify-content: center;
        gap: 20px;
    }
`

const FeedbackList: React.FC<FeedbackListProps> = ({students}) => {

    const [succes, setSucces] = useState(false)

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