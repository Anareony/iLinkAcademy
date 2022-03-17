import React from 'react'
import Button2 from '../Button2/Button2';
import classes from './Header.module.css'
import avatar from './img/avatar.svg'
import ilink from './img/ilink.svg'
import academy from './img/academy.svg'

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.user}>
                <img className={classes.icon} src={avatar} alt='avatar'/>
                <div className={classes.name}> Роман Чудояков</div>
            </div>
            <a href='/'className={classes.link}>
                <img src={ilink} alt="ilink" />
                <img src={academy} alt="academy" />
            </a>
            <Button2>Личный кабинет</Button2>
        </div>
    )
}

export default Header;