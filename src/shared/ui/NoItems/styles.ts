import styled from "styled-components";

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 110px auto;

	@media (max-width: 768px) {
		margin: 110px auto 126px;
	}
`;
export const Img = styled.img`
	@media (max-width: 768px) {
		width: 240px;
	}
`;
