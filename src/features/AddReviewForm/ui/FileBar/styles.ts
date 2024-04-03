import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 14px 12px;
	margin-top: 12px;
	@media screen and (max-width: 768px) {
		padding: 5px;
		margin-top: 5px;
	}
`;
export const FileName = styled.div`
	margin: 0 12px;
	font-weight: 600;
	font-size: 14px;
	line-height: 18.2px;
`;
export const DeleteBtn = styled.button`
	border: none;
	cursor: pointer;
`;
