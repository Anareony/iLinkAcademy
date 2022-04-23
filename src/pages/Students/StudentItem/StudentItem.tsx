import React from 'react'
import styled from 'styled-components'

import { IStudent } from '../../../types/types'

interface StudentItemProps {
    student: IStudent;
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 24px;
    border-bottom: 1px dashed #E0E0E0;
`
const Student = styled.div`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 14px;
    line-height: 17.33px;
    width: 20%;
`
const Information = styled.div`
    flex: 1;
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
        <Wrapper>
            <Student>{student.name + ' ' + student.surname}</Student>
            <Information>{student.information}</Information>
            <StatusContainer/>
        </Wrapper>
    )
}

export default StudentItem