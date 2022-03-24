import React from 'react'
import { useSwiper } from 'swiper/react';
import './ArrowBtn.css'

const ArrowBtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slidePrev()} className='prev'>Prev</button>
      <button onClick={() => swiper.slideNext()} className='next'>Next</button>
    </div>
  )
}

export default ArrowBtn