import React from 'react'
import classes from './FeedbackCard.module.css'
import avatar from './img/Camera.svg'

function FeedbackCard(props) {
  return (
    <div className={classes.feedback}>
        <div className={classes.container}>
            <div className={classes.user}>
                <div className={classes.icon}>
                    <img src={avatar} className={classes.avatar} alt="" />
                </div>
                <div className={classes.about}>
                    <div className={classes.name}>
                        Имя Фамилия
                    </div>
                <div className={classes.position}>
                    Должность (обязательно)
                </div>
                </div>
                <div className={classes.date}>
                    ДД.ММ.ГГГГ
                </div>
            </div>
            <div className={classes.body}>
                {props.children}
            </div>
            </div>
    </div>
  )
}

export default FeedbackCard