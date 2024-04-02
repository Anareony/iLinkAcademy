import styled from "styled-components";

import background2 from "shared/assets/background2.svg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	height: 100%;
	background-color: #585cc6;
	background-image: url(${background2});
	background-repeat: no-repeat;
	background-position: center top;
	background-size: 200%;
	background-attachment: fixed;
`;
const Img = styled.img`
	margin-top: 50px;
	@media (max-width: 768px) {
		margin-top: 30px;
	}
`;
const Main = styled.main`
	flex: 1 1 auto;
	margin-bottom: 30px;
`;

export { Container, Main, Img };
