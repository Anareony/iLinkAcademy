import styled from "styled-components";
import { Link } from "react-router-dom";

import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";

import arrow from "shared/assets/arrow2.svg";
import arrowHover from "shared/assets/arrowHover.svg";

const Form = styled.form`
	min-width: 628px;
	min-height: 288px;
	padding: 40px 40px 24px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 44px;
	@media (max-width: 700px) {
		min-width: 400px;
		max-width: 400px;
		padding: 25px;
	}
	@media (max-width: 430px) {
		min-width: 288px;
		max-width: 288px;
		min-height: 246px;
		padding: 16px;
	}
`;

const Header = styled.header`
	font-family: "Factor A";
	font-weight: 700;
	font-size: 32px;
	line-height: 32px;
	color: #333333;
	text-align: center;
	margin-bottom: 32px;
	@media (max-width: 430px) {
		margin-bottom: 24px;
		font-size: 24px;
		line-height: 32px;
	}
`;

const StyledLink = styled(Link)`
	display: block;
	width: 24px;
	height: 24px;
	background-image: url("${arrow}");
	margin-right: 150px;
	&:hover {
		background-image: url("${arrowHover}");
	}
	@media (max-width: 700px) {
		margin-right: 45px;
	}
	@media (max-width: 430px) {
		margin-right: 21px;
	}
`;

const StyledInput = styled(Input)`
	width: 100%;
	margin-top: 4px;
`;

const StyledButton = styled(Button)`
	background: #fff;
	color: #585cc6;
	border: 1px solid #585cc6;
	margin-left: 12px;
	&:hover {
		background: #fff;
		border: 1px solid #797ddf;
		color: #797ddf;
	}
	@media (max-width: 430px) {
		display: none;
	}
`;

const Wrapper = styled.div`
	min-width: 548px;
	margin-bottom: 40px;
	position: relative;
	@media (max-width: 700px) {
		min-width: 350px;
		max-width: 350px;
	}
	@media (max-width: 430px) {
		min-width: 256px;
		max-width: 256px;
		margin-bottom: 40px;
	}
`;

const HeaderWrapper = styled.div`
	display: flex;
	align-self: flex-start;
`;

const BtnsWrapper = styled.div`
	display: flex;
	margin-top: 20px;
	@media (max-width: 430px) {
		justify-content: center;
		width: 100%;
	}
`;
const Text = styled.span`
	@media (max-width: 700px) {
		display: none;
	}
`;

const MobileText = styled.span`
	display: none;
	@media (max-width: 700px) {
		display: block;
	}
`;

export {
	MobileText,
	Text,
	BtnsWrapper,
	HeaderWrapper,
	Wrapper,
	StyledButton,
	StyledInput,
	StyledLink,
	Header,
	Form,
};
