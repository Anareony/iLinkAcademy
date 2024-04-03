import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-top: 40px;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		align-items: stretch;
		margin-top: 10px;
	}
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	margin-left: 16px;
	font-size: 12px;
	line-height: 16px;
	color: #8a8a8a;
	@media screen and (max-width: 768px) {
		margin-left: 0;
		margin-bottom: 5px;
	}
`;
