import React from 'react'

import userPhoto from '../../../shared/assets/1.jpg'
import male from '../assets/Male.svg'
import dogFood from '../assets/DogFood.svg'

import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className="user">
        <img className="photo" src={userPhoto} alt='userPhoto'/>
        <div className="userCard">
            <div className="name"><p>{props.user.name + ' ' + props.user.surname}</p></div>
            <div className="date"><p>{props.user.date}</p></div>
            <div className="city"><p><strong>Город:</strong> {props.user.city}</p></div>
            <div className="sex"><p><strong>Пол:</strong> {props.user.sex}</p><img src={male} alt='sex'/></div>
            <div className="age"><p><strong>Возраст:</strong> {props.user.age}</p></div>
            <div className="info"><p><strong>О себе:</strong> {props.user.info}</p></div>
            <div className="pets"><img src={dogFood} alt='dogFood' style={{marginRight:'12px'}}/><p><strong>Домашнее животное:</strong>{props.user.pets}</p></div>
        </div>
    </div>
  )
}

export default UserCard