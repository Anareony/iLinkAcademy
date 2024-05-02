import styled from "styled-components";

export const ImgHover = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 2px;
	margin: 12px;
`;

export const ImgHoverContainer = styled.div`
	display: none;
	position: absolute;
	top: 80px;
	left: -10px;
	z-index: 1000;
	background: #fff;
`;

export const Img = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 2px;
	cursor: pointer;
	&:hover + ${ImgHoverContainer} {
		display: block;
	}
`;

export const ProfilePic = styled.div`
	display: flex;
	position: relative;
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`;

export const LoadButton = styled.button`
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 0.01rem;
	color: #585cc6;
	border: none;
	cursor: pointer;
	margin-top: 12px;
	display: flex;
	align-items: center;
	background: transparent;
`;

export const FileInput = styled.input`
	display: none;
`;

export const PicBtn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 16px;
`;

export const PicHeader = styled.div`
	font-family: "Gilroy";
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	color: #8a8a8a;
	letter-spacing: -0.0124rem;
`;

export const ImgEdit = styled.img`
	margin-right: 10px;
`;
