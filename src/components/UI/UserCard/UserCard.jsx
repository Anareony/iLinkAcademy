import React from 'react'

import userPhoto from './img/photo.png'
import sex from './img/Female.svg'
import dogFood from './img/DogFood.svg'

const UserCard = (props) => {
  return (
    <div className="user">
        <div className="photo">
            <img src={userPhoto} alt='userPhoto'/>
        </div>
        <div className="userCard">
            <div className="name">{props.user.name + ' ' + props.user.surname}</div>
            <div className="date">{props.user.date}</div>
            <div className="city"><span className="bold">Город:</span> {props.user.city}</div>
            <div className="sex"><span className="bold">Пол:</span> {props.user.sex}<img src={sex} alt='sex'/></div>
            <div className="age"><span className="bold">Возраст:</span> {props.user.age}</div>
            <div className="info"><span className="bold">О себе:</span> Всем привет! Меня зовут Яна, мне 22 года, я студент. Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно, например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты! 
            <br/><br/>BTW: И да, у меня есть милая кошка :)</div>
            <div className="pets"><span className="bold"><img src={dogFood} alt='dogFood'/>Домашнее животное:</span> {props.user.pets}</div>
        </div>
    </div>
  )
}

export default UserCard