import React from 'react'
import cl from './FeedbackCard.module.css'

import icon from './img/Camera.svg'

import { Feedback, Container, Header, UserInfo, Avatar, Icon, Camera, FeedbackDate, Body } from './styles.ts'

function FeedbackCard({name, surname, about, avatar, position, date}) {
    return (
        <Feedback>
            <Container>
                <Header>
                    <UserInfo>
                        { (avatar)  ?   <Avatar src={avatar} className={cl.avatar} alt="avatar" />
                                    :   <Icon className={cl.icon}>
                                            <Camera className={cl.camera} src={icon} alt='avatar'/>
                                        </Icon>               
                        }
                        <div className={cl.about}>
                            <div className={cl.name}>
                                {name + ' ' + surname}
                            </div>
                            <div className={cl.position}>
                                {position}
                            </div>
                        </div>
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