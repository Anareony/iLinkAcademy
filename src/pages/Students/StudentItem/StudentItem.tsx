import React from 'react'

import { IStudent } from '../../../types/types'

import { Status, Information, Student, Container } from './styles'

interface StudentItemProps {
    student: IStudent;
}

const StudentItem: React.FC<StudentItemProps> = ({student}) => {

    function StatusContainer() {
        if (student.status === 'Обучается') {
            return <Status style={{color: '#61BF4A'}}>{student.status}</Status> 
        } else if (student.status === 'Отчислен') {
            return <Status style={{color: '#EB5757'}}>{student.status}</Status> 
        }
        return <Status>{student.status}</Status> 
    }
    
    return (
        <Container>
            <Student>{student.name + ' ' + student.surname}</Student>
            <Information>{student.information}</Information>
            <StatusContainer/>
        </Container>
    )
}

export default StudentItem