import React from "react";
import { useStore } from "effector-react";

import { getAge } from "shared/lib/helpers";
import { UserModel } from "../model";

import male from "shared/assets/Male.svg";
import female from "shared/assets/Female.svg";
import dogFood from "shared/assets/DogFood.svg";

import {
	UserContainer,
	UserPhoto,
	UserInfo,
	UserName,
	UserBirthday,
	UserCity,
	UserSex,
	UserAge,
	UserAbout,
	UserPets,
} from "./styles";

export const UserCard: React.FC = () => {
	const user = useStore(UserModel.$user);

	return (
		<UserContainer>
			<UserPhoto
				src={`https://academtest.ilink.dev/images/${user.profileImage}`}
				alt="userPhoto"
			/>
			<UserInfo>
				<UserName>
					<p>
						{user.firstName} {user.lastName}
					</p>
				</UserName>
				<UserBirthday>
					<p>{new Date(user.birthDate).toLocaleDateString()}</p>
				</UserBirthday>
				<UserCity>
					<p>
						<strong>Город: </strong>
						{user.cityOfResidence}
					</p>
				</UserCity>
				<UserSex>
					<p style={{ display: "flex" }}>
						<strong>Пол:&nbsp;</strong>
						{user.gender === "male" ? (
							<span style={{ display: "flex" }}>
								Мужчина&nbsp;
								<img src={male} alt="Мужчина" />
							</span>
						) : (
							<span style={{ display: "flex" }}>
								Женщина&nbsp;
								<img src={female} alt="Женщина" />
							</span>
						)}
					</p>
				</UserSex>
				<UserAge>
					<p>
						<strong>Возраст: </strong>
						{getAge(user.birthDate)}
					</p>
				</UserAge>
				<UserAbout>
					<p>
						<strong>О себе: </strong>
						{user.aboutMe}
					</p>
				</UserAbout>
				<UserPets>
					<img
						src={dogFood}
						alt="dogFood"
						style={{ marginRight: "12px" }}
					/>
					<p>
						<strong>Домашнее животное: </strong>
						{user.hasPet ? "Есть" : "Нет"}
					</p>
				</UserPets>
			</UserInfo>
		</UserContainer>
	);
};
