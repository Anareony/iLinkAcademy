import React from 'react'
import classes from './Footer.module.css'

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
                        <a href="" className={classes.link}>
                            <img src={vk} alt="" />
                        </a>
                    </SocialItem>
                    <SocialItem>
                        <a href="" className={classes.link}>
                            <img src={reddit} alt="" />
                        </a>
                    </SocialItem>
                    <SocialItem>
                        <a href="" className={classes.link}>
                            <img src={tg} alt="" />
                        </a>
                    </SocialItem>
                </SocialList>
            </Container>
        </footer>
    )
}

export default Footer