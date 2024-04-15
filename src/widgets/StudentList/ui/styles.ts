import styled from "styled-components";

const TableHeader = styled.div`
	font-family: "Gilroy";
	font-weight: 700;
	font-size: 12px;
	line-height: 14.86px;
	letter-spacing: 0.03rem;
	text-transform: uppercase;
	display: flex;
	justify-content: space-between;
	padding: 14px 25px 15px 0px;
	@media (max-width: 768px) {
		min-width: 450px;
	}
`;

const Wrapper = styled.div`
	@media (max-width: 768px) {
		overflow-x: scroll;
		width: 100%;
		margin-top: 20px;
		padding-bottom: 10px;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

const Container = styled.div`
	@media (max-width: 768px) {
		width: auto;
	}
`;

const Item = styled.div`
	&:first-child {
		width: 27%;
		@media (max-width: 768px) {
			width: 34%;
		}
	}
	&:nth-child(2) {
		flex: 1;
	}
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: baseline;
	}
`;

export { Item, Container, Wrapper, TableHeader, Header };
