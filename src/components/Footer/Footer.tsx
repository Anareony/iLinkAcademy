import React from 'react'

import vk from './img/vk.svg'
import reddit from './img/reddit.svg'
import tg from './img/tg.svg'

import { Container, Text, SocialList, SocialItem, SocialLink } from './styles'

const Footer:React.FC = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer