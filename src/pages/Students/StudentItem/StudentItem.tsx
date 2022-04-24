import React from 'react'
import styled from 'styled-components'

import { IStudent } from '../../../types/types'

interface StudentItemProps {
    student: IStudent;
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px dashed #E0E0E0;
    &:last-child{
        border-bottom: none;
    }
    @media (max-width: 768px) {
        padding: 19px 38px 19px 16px;;
        min-width: 600px;
    }

`
const Student = styled.div`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 14px;
    line-height: 17.33px;
    width: 20%;
    @media (max-width: 768px) {
        width: 30%;
    }
`
const Information = styled.div`
    flex: 1;
    @media (max-width: 768px) {
        max-width: 200px;
    }
`
const Status = styled.div`
    font-weight: 600;
    color: #8A8A8A;
`

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