import React from 'react'
import styled from 'styled-components'

import StudentItem from '../StudentItem/StudentItem'

import { IStudent } from '../../../types/types'

interface StudentsListProps {
    students: IStudent[]
}

const Headers = styled.div`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 12px;
    line-height: 14.86px;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 15px 117px 13px 24px;
`

const Container = styled.div`
    margin-top: 39px;
`

const Item = styled.div`
    &:first-child {
        width: 21.9%;
    }
    &:nth-child(2) {
        flex: 1;
    }
`

const StydentsList: React.FC<StudentsListProps> = ({students}) => {
    return (
        <Container>
            <Headers>
                <Item>ИФ Участника </Item>
                <Item>Краткая информация</Item>
                <Item>Статус</Item>
            </Headers>
                {students.map(student => 
                    <StudentItem key={student.id} student={student}/>
                )}
        </Container>
    )
}

export default StydentsList