import React from 'react'
import none from 'shared/assets/wolf.svg'
import { ImgContainer, Img } from './styles'

export const NoItems = () => {
    return (
        <ImgContainer>
            <Img src={none} alt='none'/>
        </ImgContainer>
    )
}
