import styled from "styled-components";

const Container = styled.div`
	padding: 25px 80px 26px;
	background-color: #585cc6;
	color: #fff;
	@media (max-width: 768px) {
		padding: 17px 14px 18px 16px;
	}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const User = styled.div`
	font-family: "Gilroy";
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
	color: #fff;

	@media (max-width: 768px) {
		font-size: 14px;
		line-height: 14px;
	}
`;
const ProfilePic = styled.div`
	margin-right: 12px;
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 2px;
	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Header = styled.h3`
	@media (max-width: 768px) {
		display: none;
	}
`;
const LastName = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;
const MobileHeader = styled.div`
	display: none;
	font-family: "Gilroy";
	font-weight: 800;
	font-size: 16px;
	line-height: 14px;
	margin-bottom: 8px;
	@media (max-width: 768px) {
		display: block;
	}
`;

export {
	MobileHeader,
	Header,
	ProfileWrapper,
	Img,
	ProfilePic,
	User,
	Nav,
	Container,
	LastName,
};
