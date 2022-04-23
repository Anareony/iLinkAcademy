import React from 'react'
import { IStudent } from '../../../types/types'
import styled from 'styled-components'

import FeedbackItem from '../FeedbackItem/FeedbackItem'

interface FeedbackListProps {
    students: IStudent[]
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 520px 520px;
    gap: 24px;
`

const FeedbackList: React.FC<FeedbackListProps> = ({students}) => {
    return (
        <div>
            <Wrapper>
                {students.map(student => 
                    <FeedbackItem key={student.id} student={student}/>
                )}
            </Wrapper>
        </div>
    )
}

export default FeedbackList