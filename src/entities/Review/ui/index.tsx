import React from 'react'

import { IReview } from 'shared/const/types';
import { Avatar } from 'shared/ui/Avatar';
import { AdminReviewBlock } from './AdminReviewBlock';

import { Feedback, Container, Header, UserInfo, UserTable, UserFullName, UserLocation, FeedbackDate, Body } from './styles'

interface IComment extends IReview {
    isAdmin?: boolean;
    editBlock?: React.ReactNode;
}

export const Review: React.FC<IComment> = ({authorName, authorImage, status, createdAt, text, isAdmin, editBlock}) => {

    return (
        <Feedback>
            <Container>
                <Header>
                    <UserInfo>
                        <Avatar avatar={authorImage}/>
                        <UserTable>
                            <UserFullName>
                                {authorName}
                            </UserFullName>
                            <UserLocation>
                                {/* {status} */}
                            </UserLocation>
                        </UserTable>
                    </UserInfo>
                    <FeedbackDate>
                        {new Date(createdAt).toLocaleDateString()}
                    </FeedbackDate>
                </Header>
                <Body>
                    {text}
                </Body>
            </Container>
            {isAdmin && <AdminReviewBlock status={status} editBlock={editBlock}/>}
        </Feedback>
    )
}