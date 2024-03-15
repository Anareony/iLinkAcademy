import React from 'react'

import { Main, Container } from './styles'

interface IAdminTemplate {
    header: React.ReactNode;
    nav: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
}

export const AdminTemplate: React.FC<IAdminTemplate> = ({header,nav,main,footer}) => {

    return (
        <div>
            {header}
            <Container>
                {nav}
                <Main>{main}</Main>
            </Container>
           {footer}
        </div>
    )
}