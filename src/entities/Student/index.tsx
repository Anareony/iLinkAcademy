import React from 'react'

import { IStudent } from 'shared/const/types'
import { Avatar } from 'shared/ui/Avatar'

import { Status, Information, Name, Container, Header } from './styles'

export const Student: React.FC<IStudent> = ({profileImage, firstName, lastName, academyStatus, smallAboutMe}) => {

    return (
        <Container>
            <Header>
                <Avatar avatar={profileImage}/>
                <Name>{firstName} {lastName}</Name>
            </Header>
            <Information>{smallAboutMe}</Information>
            <Status className={`
                ${academyStatus === "studies" ? "studies": ""}
                ${academyStatus === "expelled" ? "expelled": ""}
            `}>
                {academyStatus === "studies" ? "Обучается" : 
                academyStatus === "expelled" ? "Отчислен" : "Закончил"}
            </Status> 
        </Container>
    )
}