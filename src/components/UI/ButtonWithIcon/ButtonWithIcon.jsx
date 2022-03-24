import React from 'react'
import classes from './ButtonWithIcon.module.css'

const ButtonWithIcon = (props) => {
    return (
        <button {...props} className={classes.button} >
            {props.children}
        </button>
    )
}

export default ButtonWithIcon;