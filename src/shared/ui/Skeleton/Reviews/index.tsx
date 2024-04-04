import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Feedback = styled.div`
	background-color: #f5f5f5;
	padding: 24px;

	@media screen and (max-width: 1100px) {
		padding: 12px;
	}
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 24px;

	@media screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 12px;
	}
`;
const UserInfo = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
const UserTable = styled.div`
	width: 100%;
	margin-left: 15px;
	padding-left: 20px @media screen and (max-width: 1200px) {
		padding-right: 9px;
	}
	@media screen and (max-width: 1100px) {
		padding-right: 0;
	}
`;

interface SkeletonProps {
	cards?: number;
}

export const SkeletonReviews: React.FC<SkeletonProps> = ({ cards }) => {
	return (
		<>
			{Array(cards)
				.fill(0)
				.map((_, i) => (
					<SkeletonTheme key={i}>
						<Feedback>
							<Header>
								<UserInfo>
									<Skeleton
										count={1}
										height="50px"
										width="50px"
									/>
									<UserTable>
										<Skeleton count={2} height="25px" />
									</UserTable>
								</UserInfo>
							</Header>
							<Skeleton count={7} height="25px" />
						</Feedback>
					</SkeletonTheme>
				))}
		</>
	);
};
