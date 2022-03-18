import React from 'react'
import classes from './Footer.module.css'
import vk from './img/vk.svg'
import reddit from './img/reddit.svg'
import tg from './img/tg.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.text}>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
            <ul className={classes.socialList}>
                <li className={classes.item}>
                    <a href="1" className={classes.link}>
                        <img src={vk} alt="" />
                    </a>
                </li>
                <li className={classes.item}>
                    <a href="1" className={classes.link}>
                        <img src={reddit} alt="" />
                    </a>
                </li>
                <li className={classes.item}>
                    <a href="1" className={classes.link}>
                        <img src={tg} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer