import { useStore } from "effector-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { Review, ReviewsModel } from "entities/Review";
import { AddReviewModel } from "features/AddReviewForm/model";
import { SkeletonReviews } from "shared/ui/Skeleton/Reviews";
import { filterPublishReviews } from "shared/lib/helpers";

import plus from "shared/assets/Vector.svg";
import { ReactComponent as Arrow } from "shared/assets/arrow.svg";

import {
	Reviews,
	ReviewsContainer,
	Header,
	BtnIcon,
	BtnText,
	StyledButton,
	Carousel,
	ArrowButton,
} from "./styles";

export const ReviewList = () => {
	const reviews = useStore(ReviewsModel.$reviews);
	const isLoading = useStore(ReviewsModel.$isLoading);
	const publishedReviews = filterPublishReviews(reviews);

	const handleClick = (className: string) => {
		return () => {
			const prevBtn: HTMLElement = document.querySelector(
				className,
			) as HTMLElement;
			prevBtn.click();
		};
	};

	const showModal = () => {
		AddReviewModel.showAddReview(true);
	};

	return (
		<Reviews>
			<ReviewsContainer>
				<Header>
					<h2>Отзывы</h2>
					<StyledButton onClick={showModal}>
						<BtnIcon src={plus} alt="profile" />
						<BtnText>Добавить отзыв</BtnText>
					</StyledButton>
				</Header>
				<Carousel>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={20}
						loop={true}
						navigation
						initialSlide={0}
						slidesPerView={"auto"}
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
						}}
						pagination={{
							clickable: true,
						}}
					>
						{isLoading ? (
							<SkeletonReviews />
						) : (
							<>
								{publishedReviews.map((review, index) => (
									<SwiperSlide key={index}>
										<Review
											authorName={review.authorName}
											authorImage={review.authorImage}
											createdAt={review.createdAt}
											text={review.text}
										/>
									</SwiperSlide>
								))}
							</>
						)}
					</Swiper>
				</Carousel>
			</ReviewsContainer>
			<ArrowButton reverse onClick={handleClick(".swiper-button-prev")}>
				<Arrow />
			</ArrowButton>
			<ArrowButton onClick={handleClick(".swiper-button-next")}>
				<Arrow />
			</ArrowButton>
		</Reviews>
	);
};
