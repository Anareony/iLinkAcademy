import React from 'react'

import cross from 'shared/assets/cross.svg'

import { ModalWrapper, Container, Header, Button } from './styles'

interface IModal {
    isShow: boolean;
    header: string;
    closeWindow: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ isShow, header, closeWindow, children }) => {
    return (
        <ModalWrapper className={isShow ? "active" : ""}>
            <Container>
                <Header>
                    <h4>{header}</h4>
                    <Button onClick={closeWindow} >
                        <img src={cross} alt='cross'/>
                    </Button>
                </Header>
                {children}
            </Container>
        </ModalWrapper>
    )
}
