import React from 'react'

import userPhoto from '../../../shared/assets/1.jpg'
import male from '../assets/Male.svg'
import dogFood from '../assets/DogFood.svg'

import { UserContainer, UserPhoto, UserInfo, UserName, UserBirthday, UserCity, UserSex, UserAge, UserAbout, UserPets } from './styles'

type IUser = {
    user: {
        name: string;
        surname: string;
        date: string;
        city: string;
        sex: string;
        age: string;
        info: string;
        pets: string;
    }
}

const UserCard:React.FC<IUser> = ({user}) => {
  
    return (
        <UserContainer>
            <UserPhoto src={userPhoto} alt='userPhoto'/>
            <UserInfo>
                <UserName><p>{user.name + ' ' + user.surname}</p></UserName>
                <UserBirthday><p>{user.date}</p></UserBirthday>
                <UserCity><p><strong>Город:</strong> {user.city}</p></UserCity>
                <UserSex><p><strong>Пол:</strong> {user.sex}</p><img src={male} alt='sex'/></UserSex>
                <UserAge><p><strong>Возраст:</strong> {user.age}</p></UserAge>
                <UserAbout><p><strong>О себе:</strong> {user.info}</p></UserAbout>
                <UserPets><img src={dogFood} alt='dogFood' style={{marginRight:'12px'}}/><p><strong>Домашнее животное:</strong> {user.pets}</p></UserPets>
            </UserInfo>
        </UserContainer>
    )
}

export default UserCard