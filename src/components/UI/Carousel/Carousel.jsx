import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import ArrowBtn from '../ArrowBtn/ArrowBtn';

const Carousel = ({reviewers}) => {

    return (
        <div className='carousel'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
            >
            {reviewers.map( (reviewer) => 
                <SwiperSlide key={reviewer.id}><FeedbackCard reviewer={reviewer} /></SwiperSlide>
                )}
                <ArrowBtn>nazad</ArrowBtn>
            </Swiper>
        </div>
    )
}

export default Carousel