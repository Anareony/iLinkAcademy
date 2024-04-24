import styled from "styled-components";

const Content = styled.form`
	display: flex;
	flex-direction: column;
`;

const Container = styled.div`
	position: relative;
`;

const Button = styled.button`
	padding: 17px 28px;
	border: none;
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

	@media (max-width: 768px) {
		font-size: 14px;
		padding: 12px 25px;
	}
`;

const ButtonTomato = styled(Button)`
	margin-left: 12px;
	background: #eb5757;
	@media (max-width: 768px) {
		margin-left: 0;
		margin-top: 8px;
		font-size: 14px;
		padding: 12px 25px;
	}
`;

const Btns = styled.div`
	display: flex;
	margin-top: 40px;

	@media (max-width: 768px) {
		margin-top: 32px;
		flex-direction: column;
	}
`;

export { Content, Container, Button, ButtonTomato, Btns };
