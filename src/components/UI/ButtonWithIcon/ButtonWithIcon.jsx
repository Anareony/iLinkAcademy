import React from 'react'
import classes from './ButtonWithIcon.module.css'

const ButtonWithIcon = (props) => {
    return (
        <button {...props} className={classes.button}>
            <div className={classes.icon}></div>
            {props.children}
        </button>
    )
}

export default ButtonWithIcon;