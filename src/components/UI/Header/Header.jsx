import React from 'react'
import Button2 from '../Button2/Button2';
import classes from './Header.module.css'
import avatar from './img/avatar.svg'
import brand from './img/brand.svg'

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <div className={classes.user}>
                        <div className={classes.border}>
                            <img className={classes.icon} src={avatar} alt='avatar'/>
                        </div>
                        <div className={classes.name}>Имя Фамилия</div>
                    </div>
                    <a href='/' className={classes.link}>
                        <img src={brand} alt="logo" />
                    </a>
                    <Button2>Личный кабинет</Button2>
                </nav>
            </div>
        </header>
    )
}

export default Header;