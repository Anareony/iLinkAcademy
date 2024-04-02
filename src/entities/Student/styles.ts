import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0;
	border-bottom: 1px dashed #e0e0e0;
	&:last-child {
		border-bottom: none;
	}
	@media (max-width: 768px) {
		min-width: 450px;
	}
`;
const Name = styled.div`
	font-family: "Gilroy";
	font-weight: 700;
	font-size: 14px;
	line-height: 17.33px;
`;
const Information = styled.div`
	flex: 1;
	overflow-wrap: break-word;
	inline-size: 150px;
	@media (max-width: 768px) {
		max-width: 200px;
		overflow-wrap: break-word;
	}
`;
const Status = styled.div`
	font-weight: 600;
	color: #8a8a8a;
	&.studies {
		color: #61bf4a;
	}
	&.expelled {
		color: #eb5757;
	}
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	width: 25%;
`;

export { Status, Information, Name, Container, Header };
