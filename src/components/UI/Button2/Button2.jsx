import React from 'react'
import cl from './Button2.module.css'
import profile from './img/Profile.svg'

const Button2 = (props) => {
    return (
        <button {...props} className={cl.button}>
            <img className={cl.icon} src={profile} alt='profile'/>
            <span className={cl.inner}>{props.children}</span>
        </button>
    )
}

export default Button2;