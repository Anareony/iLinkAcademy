import styled from "styled-components";

const Form = styled.form``;

const TextAreaContainer = styled.div`
	position: relative;
	margin-top: 32px;
	@media screen and (max-width: 768px) {
		margin-top: 5px;
	}
`;
const InputContainer = styled.div`
	width: 63%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const UserInformation = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export { Form, TextAreaContainer, UserInformation, InputContainer };
