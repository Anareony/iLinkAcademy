import React from 'react'

import vk from 'shared/assets/vk.svg'
import reddit from 'shared/assets/reddit.svg'
import tg from 'shared/assets/tg.svg'

import { Container, Text, SocialList, SocialItem, SocialLink, Footer as StyledFooter } from './styles'

export const Footer:React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <Text>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</Text>
                <SocialList>
                    <SocialItem>
                        <SocialLink href="">
                            <img src={vk} alt="vk" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="">
                            <img src={reddit} alt="reddit" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="">
                            <img src={tg} alt="telegram" />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </Container>
        </StyledFooter>
    )
}