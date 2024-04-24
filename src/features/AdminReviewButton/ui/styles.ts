import styled from "styled-components";

const Button = styled.button`
	padding: 17px 28px;
	border: none;
	border-radius: 2px;
	background: #585cc6;
	color: #fff;
	font-family: "Gilroy";
	font-weight: 600;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 0.01rem;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}

	@media (max-width: 1300px) {
		font-size: 13px;
		padding: 8px 14px;
	}

	@media (max-width: 1100px) {
		font-size: 12px;
		padding: 6px 10px;
	}

	@media (max-width: 900px) {
		font-size: 14px;
		padding: 8px 14px;
	}

	@media (max-width: 768px) {
		font-size: 14px;
		padding: 6px 12px;
	}
`;

const ButtonTomato = styled(Button)`
	display: flex;
	align-items: center;
	margin-left: 12px;
	background: #eb5757;
	@media (max-width: 768px) {
		margin-left: 6px;
		padding: 12px 15px;
	}
`;

const ButtonWithIcon = styled(Button)`
	display: flex;
	padding: 17px;

	svg path {
		stroke: #fff;
	}

	@media (max-width: 1300px) {
		padding: 15px;
	}

	@media (max-width: 1100px) {
		padding: 12px;
	}

	@media (max-width: 900px) {
		padding: 15px;
	}

	@media (max-width: 768px) {
		margin-left: 6px;
		padding: 12px;
	}
`;
const Btns = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 24px;
	padding-bottom: 15px;

	@media (max-width: 1300px) {
		margin-left: 24px;
	}

	@media (max-width: 1100px) {
		margin-left: 14px;
	}

	@media (max-width: 768px) {
		margin-top: 12px;
		margin-left: 10px;
	}
`;
const BtnsContainer = styled.div`
	display: flex;
`;

export { BtnsContainer, Btns, ButtonWithIcon, ButtonTomato, Button };
