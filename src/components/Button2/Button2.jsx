import React from 'react'
import cl from './Button2.module.css'

const Button2 = (props) => {
    return (
        <button {...props} className={cl.button}>
            {props.children}
        </button>
    )
}

export default Button2;