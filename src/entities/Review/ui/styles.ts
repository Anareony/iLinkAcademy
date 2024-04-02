import styled from "styled-components";

const Feedback = styled.div`
	background-color: #f5f5f5;
	overflow: hidden;
`;
const Container = styled.div`
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
`;
const Avatar = styled.img`
	display: block;
	width: 52px;
	height: 52px;
`;
const Icon = styled.div`
	display: flex;
	padding: 13px 13px;

	@media screen and (max-width: 1100px) {
		padding-bottom: 12px;
	}
`;
const Camera = styled.img`
	display: block;
	width: 26px;
	height: 26px;
`;
const UserTable = styled.div`
	padding-right: 95px;
	padding-left: 20px @media screen and (max-width: 1200px) {
		padding-right: 9px;
	}
	@media screen and (max-width: 1100px) {
		padding-right: 0;
	}
`;
const UserFullName = styled.div`
	font-family: "Factor A";
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: -1.24%;

	@media screen and (max-width: 1100px) {
		font-size: 16px;
		line-height: 24px;
	}
`;
const UserLocation = styled.div`
	font-family: "Factor A";
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: #8a8a8a;
`;
const FeedbackDate = styled.div`
	align-self: flex-start;
	text-align: right;
	font-family: "Factor A";
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
`;
const Body = styled.div`
	font-family: "Gilroy";
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: #333333;
	min-height: 145px;
	word-wrap: break-word;
	@media screen and (max-width: 1100px) {
		font-size: 12px;
		line-height: 20px;
		max-height: 170px;
	}
`;
export {
	Feedback,
	Container,
	Header,
	UserInfo,
	Avatar,
	Icon,
	Camera,
	UserTable,
	UserFullName,
	UserLocation,
	FeedbackDate,
	Body,
};
