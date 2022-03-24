import React from 'react'
import cl from './FeedbackCard.module.css'

function FeedbackCard(props) {
  return (
    <div className={cl.feedback}>
        <div className={cl.container}>
            <div className={cl.user}>
                <div className={cl.icon}>
                    <img src={props.reviewer.avatar} className={cl.avatar} alt="" />
                    <div className={cl.about}>
                        <div className={cl.name}>
                            {props.reviewer.name + ' ' + props.reviewer.surname}
                        </div>
                    <div className={cl.position}>
                        {props.reviewer.position}
                    </div>
                </div>
                </div>
                <div className={cl.date}>
                    {props.reviewer.date}
                </div>
            </div>
            <div className={cl.body}>
                {props.reviewer.body}
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard