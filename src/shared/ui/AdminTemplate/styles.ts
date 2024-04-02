import styled from "styled-components";

const Container = styled.div`
	display: flex;
	position: relative;

	@media (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 20px;
	}
`;

const Main = styled.div`
	width: 100%;
	margin: 59px 80px 0 26px;
	@media (max-width: 768px) {
		margin: 0px;
		padding: 10px 15px 0;
	}
`;
export { Main, Container };
