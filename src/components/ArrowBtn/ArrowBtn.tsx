import React from 'react'
import { useSwiper } from 'swiper/react';

import { Next, Prev } from './styles'

const ArrowBtn: React.FC = () => {
    const swiper = useSwiper();

    return (
        <div>
            <Prev onClick={() => swiper.slidePrev()}>Prev</Prev>
            <Next onClick={() => swiper.slideNext()}>Next</Next>
        </div>
    )
}

export default ArrowBtn