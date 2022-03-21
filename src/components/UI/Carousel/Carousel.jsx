import React, { useState} from 'react'
import ArrowBtn from '../ArrowBtn/ArrowBtn'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
                <SwiperSlide><FeedbackCard reviewer={reviewer} key={reviewer.id}/></SwiperSlide>
                )}
            </Swiper>


            {/* 
            <div className={cl.btns}>
                <ArrowBtn>left</ArrowBtn>
                <ArrowBtn>right</ArrowBtn>
            </div>  */}
        </div>
        
    )
    }

export default Carousel