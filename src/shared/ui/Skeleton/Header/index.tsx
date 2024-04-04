import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const UserInfo = styled.div`
	display: flex;
	align-items: center;
`;
const Avatar = styled.div`
	width: 52px;
	height: 52px;
	@media screen and (max-width: 768px) {
		height: 36px;
		width: 36px;
	}
`;
const Name = styled.span`
	padding-right: 5px;
	margin-left: 10px;
	height: 25px;
	width: 125px;
	@media screen and (max-width: 768px) {
		margin-top: 6px;
		width: 50px;
		height: 20px;
	}
`;
export const SkeletonHeader = () => {
	return (
		<UserInfo>
			<Avatar>
				<Skeleton width="100%" height="100%" />
			</Avatar>
			<Name>
				<Skeleton width="100%" height="100%" />
			</Name>
		</UserInfo>
	);
};
