import styled from "styled-components";
import info from "shared/assets/InfoSquare.svg";

const Container = styled.div`
	position: relative;
`;
const Label = styled.label`
	font-family: "Factor A";
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	padding-bottom: 12px;
	display: inline-block;
	&:last-of-type {
		padding-bottom: 14px;
	}
	@media screen and (max-width: 768px) {
		padding-bottom: 8px;
		&:last-of-type {
			padding-bottom: 8px;
		}
	}
`;
const StyledTextArea = styled.textarea`
	outline: none;
	border: 1px solid rgba(224, 224, 224, 1);
	padding: 12px 12px 0 12px;
	min-height: 105px;
	width: 100%;
	font-family: "Gilroy";
	font-size: 14px;
	line-height: 22px;
	color: #8a8a8a;
	max-height: 145px;
	overflow: hidden;
	resize: vertical;
	&:focus {
		border: 1px solid #585cc6;
	}
	&.hasError {
		border: 1px solid #eb5757;
	}
`;
const LengthBlock = styled.div`
	font-family: "Gilroy";
	font-size: 10px;
	line-height: 14px;
	position: absolute;
	bottom: 10px;
	right: 5px;
`;
const Msg = styled.span`
	font-family: "Gilroy";
	font-weight: 400;
	font-size: 10px;
	line-height: 14px;
	display: none;
	position: absolute;
	bottom: 30px;
	right: -14px;
	background: #fff;
	min-width: 166px;
	max-height: 44px;
`;

const Helper = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	background-image: url(${info});
	right: 15px;
	bottom: 17px;
	cursor: pointer;
	&:hover ${Msg} {
		display: block;
	}
`;

export { LengthBlock, Label, StyledTextArea, Container, Msg, Helper };
