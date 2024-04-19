import { Review } from "entities/Review";
import { AdminReviewButton } from "features/AdminReviewButton";
import React from "react";
import { ReviewProps } from "shared/const/types";

interface ItemsProps {
	reviews: ReviewProps[];
	editFunc: () => void;
}

export const Items: React.FC<ItemsProps> = ({ reviews, editFunc }) => {
	return (
		<>
			{reviews.map(review => (
				<Review
					key={review.id}
					authorName={review.authorName}
					text={review.text}
					authorImage={review.authorImage!}
					createdAt={review.createdAt}
					status={review.status}
					isAdmin={true}
					editBlock={
						review.status === "onCheck" && (
							<AdminReviewButton
								review={review}
								editFunc={editFunc}
							/>
						)
					}
				/>
			))}
		</>
	);
};
