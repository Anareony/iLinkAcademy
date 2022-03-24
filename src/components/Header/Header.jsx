import React from 'react'
import cl from './Header.module.css'
import avatar from './img/avatar.svg'
import brand from './img/brand.svg'
import profile from '../Button2/img/Profile.svg'

const Header = (props) => {

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <nav className={cl.nav}>
                    <div className={cl.user}>
                        <div className={cl.border}>
                            <img className={cl.icon} src={avatar} alt='avatar'/>
                        </div>
                        <span className={cl.name}>{props.user.name}</span>
                        <span className={cl.surname}>{props.user.surname}</span>
                    </div>
                    <a href='/' className={cl.link}>
                        <img src={brand} alt="logo" />
                    </a>
                    <button className={cl.btn}>
                        <img className={cl.btnIcon} src={profile} alt='profile'/>
                        <span className={cl.inner}>Панель управления</span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;