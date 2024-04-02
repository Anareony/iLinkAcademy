import React from "react";

import { Container, Main, Img } from "./styles";

import ilink from "shared/assets/ilink.svg";

interface AuthTemplateProps {
	main: React.ReactNode;
	footer: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ main, footer }) => {
	return (
		<Container>
			<Img src={ilink} alt="ilink" />
			<Main>{main}</Main>
			{footer}
		</Container>
	);
};
