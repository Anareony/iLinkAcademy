import React from 'react'
import cl from './FeedbackCard.module.css'

import icon from './img/Camera.svg'

function FeedbackCard({name, surname, about, avatar, position, date}) {
    return (
        <div className={cl.feedback}>
            <div className={cl.container}>
                <div className={cl.user}>
                    <div className={cl.pic}>
                        { (avatar)  ?   <img src={avatar} className={cl.avatar} alt="avatar" />
                                    :   <div className={cl.icon}>
                                            <img className={cl.camera} src={icon} alt='avatar'/>
                                        </div>               
                        }
                        <div className={cl.about}>
                            <div className={cl.name}>
                                {name + ' ' + surname}
                            </div>
                        <div className={cl.position}>
                            {position}
                        </div>
                    </div>
                    </div>
                    <div className={cl.date}>
                        {date}
                    </div>
                </div>
                <div className={cl.body}>
                    {about}
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard