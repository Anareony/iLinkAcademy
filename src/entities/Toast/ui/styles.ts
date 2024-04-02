import styled from "styled-components";

import bubbles from "shared/assets/bubbles.svg";
import bubblesError from "shared/assets/bubblesError.svg";
import success from "shared/assets/success.svg";
import fail from "shared/assets/fail.svg";

export const ToastWrapper = styled.div`
	flex-direction: column;
	width: 438px;
	background-color: #b5ffa2;
	background-image: url(${bubbles});
	background-repeat: no-repeat;
	background-position: left bottom;
	border-radius: 32px;
	position: fixed;
	display: block;
	bottom: 5%;
	right: 10%;
	z-index: 50;
	padding: 16px 24px 24px 130px;
	animation-name: slideInDown;
	animation-duration: 0.5s;
	animation-fill-mode: both;
	animation-timing-function: cubic-bezier(0, 1.5, 0.5, 1);
	@keyframes slideInDown {
		from {
			transform: translateX(calc(100%));
		}
		to {
			transform: translateX(0);
		}
	}
	&.error {
		background-color: #f64b3c;
		background-image: url(${bubblesError});
		color: #fff;
		svg path {
			fill: #fff;
			stroke: #fff;
		}
	}
	&:after {
		content: "";
		position: absolute;
		top: -35px;
		left: 20px;
		width: 78px;
		height: 78px;
		background: url(${success}) no-repeat;
	}
	&.error:after {
		background: url(${fail}) no-repeat;
	}
	@media screen and (max-width: 768px) {
		width: 288px;
		right: 5%;
		padding: 16px 16px 21px 78px;
		background-size: 25%;
		&:after {
			left: 5px;
		}
	}
`;
export const Header = styled.div`
	font-family: "Factor A";
	font-weight: 500;
	font-size: 32px;
	line-height: 38.4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	@media screen and (max-width: 768px) {
		font-size: 22px;
		line-height: 28px;
	}
`;
export const Content = styled.div`
	font-family: "Gilroy";
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 22px;
	}
`;
export const Button = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
	width: 24px;
	height: 24px;
`;
