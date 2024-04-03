import { Button } from "shared/ui/Button/Button";
import styled from "styled-components";

export const BtnIcon = styled.img`
	background: url("../../../shared/assets/Vector.svg") no-repeat;
	background-position: center;
	width: 18px;
	height: 18px;
`;

export const BtnText = styled.span``;
export const FileInput = styled.input`
	display: none;
`;
export const StyledButton = styled(Button)`
	align-self: flex-end;
	@media screen and (max-width: 768px) {
		padding: 10px;
		margin-top: 10px;
		align-self: center;
		width: 100%;
	}
`;
