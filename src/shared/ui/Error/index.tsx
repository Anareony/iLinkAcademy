import React from "react";
import styled from "styled-components";

import error from "shared/assets/error.svg";

const ErrorWrapper = styled.div`
	margin-top: 5px;
	line-height: 1;
	color: #eb5757;
`;

interface ErrorProps {
	children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => {
	return (
		<ErrorWrapper>
			<img src={error} alt="error" />
			{children}
		</ErrorWrapper>
	);
};
