import React from 'react'

import avatar from '../assets/Camera.svg'
import { Status, Information, Student, Container } from './styles'
import { IStudent } from '../../../store/users'

type StudentItemProps = {
    student: IStudent;
}

const StudentItem: React.FC<StudentItemProps> = ({student}) => {

    function StatusContainer() {
        if (student.academyStatus === 'studies') {
            return <Status style={{color: '#61BF4A'}}>Обучается</Status> 
        } else if (student.academyStatus === 'Отчислен') {
            return <Status style={{color: '#EB5757'}}>Отчислен</Status> 
        } 
        return <Status>Закончил</Status> 
    }
    
    return (
        <Container>
            { student.profileImage ? <img style={{width:'40px',height:'40px'}} src={`https://academtest.ilink.dev/images/${student.profileImage}`} alt='avatar'/> : <img src={avatar} alt='avatar'/>}
            <Student>{student.firstName} {student.lastName}</Student>
            <Information>{student.smallAboutMe}</Information>
            <StatusContainer/>
        </Container>
    )
}

export default StudentItem