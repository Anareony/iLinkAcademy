import React from 'react'

import { Feedback, Container, Header, UserInfo, Avatar, Icon, Camera, UserTable, UserFullName, UserLocation, FeedbackDate, Body } from './styles'

type IFeedback = {
    id?:string;
    name: string;
    surname?: string;
    avatar?: string;
    about: string;
    position?: string;
    date: string;
}

const FeedbackCard: React.FC<IFeedback> = ({name, about, avatar, position, date}) => {

    return (
        <Feedback>
            <Container>
                <Header>
                    <UserInfo>
                        { (avatar)  ?   <Avatar src={`https://academtest.ilink.dev/images/${avatar}`} alt="avatar" />
                                    :   <Icon>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.1026 10.9115C18.1026 11.4526 18.536 11.8854 19.0776 11.8854C19.6193 11.8854 20.0635 11.4526 20.0635 10.9115C20.0635 10.3704 19.6193 9.92675 19.0776 9.92675C18.536 9.92675 18.1026 10.3704 18.1026 10.9115ZM16.001 17.4476C15.2318 18.2159 14.1701 18.692 13.0001 18.692C11.8626 18.692 10.801 18.2483 9.98846 17.4476C9.18679 16.636 8.74263 15.5755 8.74263 14.4392C8.73179 13.3138 9.17596 12.2533 9.97763 11.4417C10.7901 10.6301 11.8626 10.1865 13.0001 10.1865C14.1376 10.1865 15.2101 10.6301 16.0118 11.4309C16.8135 12.2425 17.2576 13.3138 17.2576 14.4392C17.2468 15.6188 16.7701 16.6792 16.001 17.4476ZM13.0001 11.8097C12.296 11.8097 11.6351 12.0802 11.126 12.5888C10.6276 13.0866 10.3568 13.7467 10.3676 14.4284V14.4392C10.3676 15.1426 10.6385 15.8027 11.1368 16.3005C11.6351 16.7983 12.296 17.0688 13.0001 17.0688C14.4518 17.0688 15.6218 15.8893 15.6326 14.4392C15.6326 13.7358 15.3618 13.0757 14.8635 12.578C14.3651 12.0802 13.7043 11.8097 13.0001 11.8097Z" fill="#ADADAD"/>
                                                <path opacity="0.4" d="M18.8934 6.7561L18.7851 6.51804C18.4926 5.90122 18.1567 5.18701 17.9509 4.7758C17.4526 3.80189 16.5967 3.26082 15.5459 3.25H10.4434C9.39258 3.26082 8.54758 3.80189 8.04925 4.7758C7.83258 5.20866 7.46425 5.98779 7.16091 6.62625L7.09592 6.7561C7.06342 6.84267 6.97675 6.88596 6.89008 6.88596C4.27925 6.88596 2.16675 9.00694 2.16675 11.6041V18.0319C2.16675 20.629 4.27925 22.75 6.89008 22.75H19.1101C21.7101 22.75 23.8334 20.629 23.8334 18.0319V11.6041C23.8334 9.00694 21.7101 6.88596 19.1101 6.88596C19.0126 6.88596 18.9367 6.83185 18.8934 6.7561Z" fill="#ADADAD"/>
                                            </svg>
                                        </Icon>               
                        }
                        <UserTable>
                            <UserFullName>
                                {name}
                            </UserFullName>
                            <UserLocation>
                                {position}
                            </UserLocation>
                        </UserTable>
                    </UserInfo>
                    <FeedbackDate>
                        {new Date(date).toLocaleDateString()}
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