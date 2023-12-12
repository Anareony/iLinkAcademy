import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css'
import FeedbackCard from '../../../components/FeedbackCard/FeedbackCard'

const Carousel = ({reviewers}) => {

    return (
        <div className='carousel'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                navigation
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    }
                }}
                pagination={{ clickable: true }}
            >
            {reviewers.map( (reviewer) => 
                <SwiperSlide key={reviewer.id}>
                    <FeedbackCard 
                        name={reviewer.name} 
                        surname={reviewer.surname} 
                        about={reviewer.about} 
                    />
                </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Carousel