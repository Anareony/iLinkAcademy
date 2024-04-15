import styled from "styled-components";
import { Button } from "shared/ui/Button/Button";

export const Reviews = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		max-width: 304px;
		display: block;
	}
	@media screen and (max-width: 425px) {
		max-width: 304px;
	}
`;
export const ReviewsContainer = styled.div`
	padding: 56px 56px 26px 80px;
	background-color: white;
	max-width: 1198px;
	@media screen and (max-width: 1360px) {
		max-width: 1120px;
	}
	@media screen and (max-width: 1260px) {
		max-width: 1020px;
	}
	@media screen and (max-width: 1160px) {
		max-width: 920px;
	}
	@media screen and (max-width: 1060px) {
		max-width: 820px;
	}
	@media screen and (max-width: 975px) {
		max-width: 700px;
	}
	@media screen and (max-width: 850px) {
		max-width: 650px;
	}
	@media screen and (max-width: 768px) {
		padding: 20px 15px 25px 17px;
	}
`;
export const Carousel = styled.div`
	padding-bottom: 20px;
	position: relative;
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 38px;
`;
export const BtnIcon = styled.img`
	background-position: center;
	width: 18px;
	height: 18px;
`;
export const BtnText = styled.span`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StyledButton = styled(Button)`
	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`;
export const ArrowButton = styled.button<{ reverse?: boolean }>`
	border: none;
	border-radius: 2px;
	align-self: flex-end;
	cursor: pointer;
	background: #fff;
	margin-left: ${props => (props.reverse ? "34px" : "")};
	margin-right: ${props => (props.reverse ? "16px" : "")};
	svg {
		border: none;
		outline: none;
		transform: ${props => (props.reverse ? "rotate(180deg)" : "")};
	}
	&:hover {
		svg path {
			stroke: #585cc6;
		}
	}
	@media screen and (max-width: 975px) {
		margin-left: ${props => (props.reverse ? "17px" : "")};
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
