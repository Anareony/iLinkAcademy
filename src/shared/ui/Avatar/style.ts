import styled from "styled-components";

export const AvatarImg = styled.img`
	display: block;
	width: 52px;
	height: 52px;
	margin-right: 10px;
	&.camera {
		width: unset;
		height: unset;
		margin-right: 0;
		padding: 13px 13px;
	}
	@media screen and (max-width: 768px) {
		width: 36px;
		height: 36px;
		padding: 0;
	}
`;
