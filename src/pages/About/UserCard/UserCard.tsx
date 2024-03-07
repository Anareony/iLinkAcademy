import React, {useEffect,useState} from 'react'
import { userStore } from '../../../store/store'
import { useStore } from 'effector-react'
import userPhoto from '../../../shared/assets/1.jpg'
import male from '../assets/Male.svg'
import dogFood from '../assets/DogFood.svg'

import { UserContainer, UserPhoto, UserInfo, UserName, UserBirthday, UserCity, UserSex, UserAge, UserAbout, UserPets } from './styles'



const UserCard:React.FC = () => {

    const userInfo = useStore(userStore.$userInfo);
    const isLoadingUserInfo = useStore(userStore.$isLoading);
    console.log(userInfo)
    const user = {
        sex: 'Мужчина',
        pets: 'Нет'
    }
    return (
        <>
       {isLoadingUserInfo ?  (
        <div>   
            
        </div>
        ) : (
            <UserContainer>
                <UserPhoto src={`https://academtest.ilink.dev/images/${userInfo.profileImage}`} alt='userPhoto'/>
                <UserInfo>
                    <UserName><p>{userInfo.firstName} {userInfo.lastName}</p></UserName>
                    <UserBirthday><p>{new Date(userInfo.birthDate).toLocaleDateString()}</p></UserBirthday>
                    <UserCity><p><strong>Город:</strong> {userInfo.cityOfResidence}</p></UserCity>
                    <UserSex><p><strong>Пол:</strong> {user.sex}</p><img src={male} alt='sex'/></UserSex>
                    <UserAge><p><strong>Возраст:</strong> {userInfo.year}</p></UserAge>
                    <UserAbout><p><strong>О себе:</strong> {userInfo.aboutMe}</p></UserAbout>
                    <UserPets><img src={dogFood} alt='dogFood' style={{marginRight:'12px'}}/><p><strong>Домашнее животное:</strong> {user.pets}</p></UserPets>
                </UserInfo>
            </UserContainer>
        )}
        </>
    )
}

export default UserCard