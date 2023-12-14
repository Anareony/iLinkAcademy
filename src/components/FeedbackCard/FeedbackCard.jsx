import React from 'react'
import cl from './FeedbackCard.module.css'

import icon from './img/Camera.svg'

import { Feedback, Container, Header, UserInfo, Avatar, Icon, Camera, UserTable, UserFullName, UserLocation, FeedbackDate, Body } from './styles.ts'

function FeedbackCard({name, surname, about, avatar, position, date}) {
    return (
        <Feedback>
            <Container>
                <Header>
                    <UserInfo>
                        { (avatar)  ?   <Avatar src={avatar} alt="avatar" />
                                    :   <Icon>
                                            <Camera src={icon} alt='avatar'/>
                                        </Icon>               
                        }
                        <UserTable>
                            <UserFullName>
                                {name + ' ' + surname}
                            </UserFullName>
                            <UserLocation>
                                {position}
                            </UserLocation>
                        </UserTable>
                    </UserInfo>
                    <FeedbackDate>
                        {date}
                    </FeedbackDate>
                </Header>
                <Body>
                    {about}
                </Body>
            </Container>
        </Feedback>
    )
}

export default FeedbackCard