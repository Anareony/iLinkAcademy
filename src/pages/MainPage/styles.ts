import styled from "styled-components";

import background from "shared/assets/background.svg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;
export const Content = styled.div`
	padding: 100px 0;
	position: relative;

	@media screen and (max-width: 600px) {
		padding: 43px 0;
		padding-bottom: 82px;
	}
	@media screen and (max-width: 425px) {
		padding: 0;
		padding-bottom: 82px;
	}
`;
export const Main = styled.main`
	width: 100%;
	height: 100%;
	background-color: #585cc6;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${background});
	background-repeat: no-repeat;
	background-position: top center;

	@media screen and (max-width: 768px) {
		background-position: top;
	}
`;
export const MainText = styled.h1`
	line-height: 148px;
	letter-spacing: 0px;
	color: white;
	text-align: justify;
	@media screen and (max-width: 975px) {
		padding: 0 80px;
		font-size: 84px;
		line-height: 120px;
		padding: 0 40px;
	}
	@media screen and (max-width: 600px) {
		font-size: 48px;
		line-height: 54px;
	}
	@media screen and (max-width: 425px) {
		padding: 43px 16px 0 16px;
	}
`;
