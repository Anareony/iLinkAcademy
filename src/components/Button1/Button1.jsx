import React from 'react'
import classes from './Button1.module.css'

const Button1 = (props) => {
    return (
        <button {...props} className={classes.button}>
            {props.children}
        </button>
    )
}

export default Button1;