import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	margin-top: 32px;
	@media screen and (max-width: 768px) {
		margin-top: 5px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const Button = styled.button`
	background: #f5f5f5;
	border-radius: 2px;
	width: 54px;
	height: 54px;
	padding: 17px 17px;
	border: none;
	cursor: pointer;
	&:hover {
		background: #d4d4d4;
	}
`;
export const Img = styled.img`
	border-radius: 2px;
	width: 165px;
	height: 52px;
	text-align: center;
	margin-right: 10px;
	@media screen and (max-width: 768px) {
		align-items: center;
	}
`;
export const RightBlock = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		align-items: center;
		margin-top: 10px;
	}
`;
export const InputContainer = styled.div`
	width: 63%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const Centered = styled.div`
	margin-right: 50px;
	@media screen and (max-width: 768px) {
		margin-right: 50px;
	}
`;
