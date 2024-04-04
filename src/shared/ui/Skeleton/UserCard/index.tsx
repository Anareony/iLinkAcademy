import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const UserContainer = styled.div`
	display: flex;
	margin: 80px 80px 120px;

	@media screen and (max-width: 975px) {
		margin: 25px 0 57px 0;
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;
const ProfileImage = styled.div`
	margin-top: 32px;
	max-width: 519px;
	max-height: 383px;
	min-height: 383px;

	@media screen and (max-width: 1171px) {
		max-width: 400px;
		margin-left: 16px;
	}
	@media screen and (max-width: 975px) {
		max-width: 350px;
		margin-left: 16px;
	}
	@media screen and (max-width: 768px) {
		max-width: 304px;
		margin-left: 16px;
	}
`;
const UserInfo = styled.div`
	background: #fff;
	padding: 40px;
	max-height: 383px;
	width: clamp(343px, 100%, 768px);
	display: grid;
	grid-template-areas:
		"name . date"
		"city sex age"
		"info info info"
		"pets pets pets";

	@media screen and (max-width: 1171px) {
		padding: 30px;
	}
	@media screen and (max-width: 975px) {
		padding: 20px;
		grid-template-areas:
			"name name"
			"date date"
			"city sex"
			"age age"
			"info info"
			"pets pets";
		max-height: 100%;
	}
	@media screen and (max-width: 768px) {
		max-width: 288px;
		padding: 16px;
		grid-template-areas:
			"name name"
			"date date"
			"city sex"
			"age age"
			"info info"
			"pets pets";
	}
`;
const UserName = styled.div`
	font-size: 32px;
	grid-area: name;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;
const UserBirthday = styled.div`
	font-size: 18px;
	grid-area: date;
	text-align: end;

	@media screen and (max-width: 975px) {
		padding-top: 4px;
		text-align: start;
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
	}
`;
const UserCity = styled.div`
	grid-area: city;
	width: 75%;
`;
const UserSex = styled.div`
	grid-area: sex;
	width: 75%;
`;
const UserAge = styled.div`
	grid-area: age;
	width: 75%;
	@media screen and (max-width: 975px) {
		width: 38%;
	}
`;
const UserAbout = styled.div`
	grid-area: info;

	@media screen and (max-width: 768px) {
		margin-top: 10px;
	}
`;
const UserPets = styled.div`
	grid-area: pets;

	@media screen and (max-width: 768px) {
		margin-top: 10px;
	}
`;

export const SkeletonUserCard = () => {
	return (
		<SkeletonTheme>
			<UserContainer>
				<ProfileImage>
					<Skeleton width={"300px"} height={"383px"} />
				</ProfileImage>
				<UserInfo>
					<UserName>
						<Skeleton />
					</UserName>
					<UserBirthday>
						<Skeleton />
					</UserBirthday>
					<UserCity>
						<Skeleton />
					</UserCity>
					<UserSex>
						<Skeleton />
					</UserSex>
					<UserAge>
						<Skeleton />
					</UserAge>
					<UserAbout>
						<Skeleton count={5} />
					</UserAbout>
					<UserPets>
						<Skeleton />
					</UserPets>
				</UserInfo>
			</UserContainer>
		</SkeletonTheme>
	);
};
