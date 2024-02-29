import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css'
import FeedbackCard from '../../../components/FeedbackCard/FeedbackCard'
import { userReviewsStore } from '../../../store/reviews';
import { useStore } from 'effector-react';
import { IReview } from '../../../store/reviews';

const Carousel: React.FC = () => {
    const fethingReviews = useStore(userReviewsStore.$userReviews);

    return (
        <div className='carousel'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    }
                }}
                pagination={{ 
                    clickable: true,
                }}
            >
            {fethingReviews.filter((item) => item.status === "approved").map((reviewer) => 
                <SwiperSlide key={reviewer.id}>
                    <FeedbackCard 
                        name={reviewer.authorName} 
                        about={reviewer.text} 
                        avatar={reviewer.authorImage} 
                        date={reviewer.createdAt}
                    />
                </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Carousel