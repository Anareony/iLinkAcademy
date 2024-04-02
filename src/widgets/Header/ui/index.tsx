import React from "react";
import { useStore } from "effector-react";
import { Link } from "react-router-dom";

import { UserModel } from "entities/User";
import { Avatar } from "shared/ui/Avatar";
import { SkeletonHeader } from "shared/ui/Skeleton/Header";

import brand from "shared/assets/brand.svg";
import profile from "shared/assets/Profile.svg";

import {
	Container,
	Nav,
	UserInfo,
	Name,
	StyledButton,
	Text,
	MobileIcon,
	LastName,
	Img,
} from "./styles";

export const Header: React.FC = () => {
	const user = useStore(UserModel.$user);
	const isLoading = useStore(UserModel.$isLoading);

	return (
		<header>
			<Container>
				<Nav>
					{isLoading ? (
						<SkeletonHeader />
					) : (
						<UserInfo>
							<Avatar avatar={user.profileImage} />
							<Name>
								{user.firstName}
								<LastName>{user.lastName}</LastName>
							</Name>
						</UserInfo>
					)}
					<Img src={brand} alt="logo" />
					<Link to="/students">
						<StyledButton>
							<MobileIcon src={profile} alt="profile" />
							<Text>Панель управления</Text>
						</StyledButton>
					</Link>
				</Nav>
			</Container>
		</header>
	);
};
