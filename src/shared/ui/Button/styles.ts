import styled from "styled-components";

const StyledButton = styled.button`
	font-size: 18px;
	font-family: "Gilroy";
	font-weight: 600;
	border: none;
	position: relative;
	border-radius: 2px;
	padding: 17px 28px;
	line-height: 17px;
	color: #fff;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 18px;
	gap: 10px;

	background: #585cc6;
	background-image: linear-gradient(#696dc8, #696dc8);
	background-size: 0 100%;
	background-repeat: no-repeat;
	transition: 0.4s;

	&:hover {
		background-size: 50% 100%;
	}
	&:active {
		background-size: 100% 100%;
	}
	&:disabled {
		background: #8a8a8a;
	}
`;
export { StyledButton };
