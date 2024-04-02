import React from "react";

import cross from "shared/assets/cross.svg";

import { ModalWrapper, Container, Header, Button } from "./styles";

interface ModalProps {
	isShow: boolean;
	header: string;
	closeWindow: () => void;
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
	isShow,
	header,
	closeWindow,
	children,
}) => {
	if (!isShow) {
		return null;
	}

	return (
		<ModalWrapper>
			<Container>
				<Header>
					<h4>{header}</h4>
					<Button onClick={closeWindow}>
						<img src={cross} alt="cross" />
					</Button>
				</Header>
				{children}
			</Container>
		</ModalWrapper>
	);
};
