import React from 'react'

import { IStudent } from '../../../types/types'

import StudentItem from '../StudentItem/StudentItem'

import { Item, Container, Wrapper, Headers } from './styles'

type StudentsListProps = {
    students: IStudent[]
}

const StydentsList: React.FC<StudentsListProps> = ({students}) => {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default StydentsList