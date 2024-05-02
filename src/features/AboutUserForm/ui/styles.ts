import styled from "styled-components";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";

export const Container = styled.form`
	width: 100%;

	@media (max-width: 768px) {
		margin: 0;
		margin-bottom: 24px;
	}
`;

export const Header = styled.div`
	margin-bottom: 20px;
	@media (max-width: 768px) {
		margin-bottom: 16px;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 32px 24px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
`;

export const DropdownContainer = styled.div`
	width: 100%;
`;

export const DropdownText = styled.div`
	font-family: "Factor A";
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.0124rem;
`;

export const Text = styled.div`
	font-family: "Factor A";
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: -0.0124rem;
	margin-bottom: 12px;
`;
export const TextareaContainer = styled.div`
	margin-top: 32px;
	position: relative;
`;

export const Value = styled.div`
	font-family: "Gilroy";
	font-size: 10px;
	line-height: 14px;
	position: absolute;
	bottom: 10px;
	right: 5px;
`;

export const Edit = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 32px;
	@media (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 10px;
	}
`;

export const FloatedBtn = styled(Button)`
	float: right;
	margin-top: 40px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
export const StyledInput = styled(Input)`
	color: #333333;
	&:disabled {
		color: #8a8a8a;
	}
`;

export const Error = styled.div`
	width: 100%;
	min-height: 62px;
	background-color: #eb5757;
	display: flex;
	padding: 20px 0;
	color: #ffffff;
	align-items: center;
	text-align: center;
	justify-content: center;
	position: fixed;
	bottom: 0%;
	right: 0%;
	&.active {
		display: flex;
	}
`;
