import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { SingleValue } from "react-select";

import { ReviewsModel } from "entities/Review";
import { EditReviewModel } from "features/EditReviewForm";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { SkeletonReviews } from "shared/ui/Skeleton/Reviews";

import { Items } from "./Items";
import { $sortedReviews, filterReviews } from "../model";
import { options } from "../lib/options";

import { Wrapper, Header } from "./styles";

export const AdminReviewList: React.FC = () => {
	const isLoading = useStore(ReviewsModel.$isLoading);
	const reviews = useStore($sortedReviews);

	const onChangeFilter = (
		filter: SingleValue<{ value: string; label: string }>,
	) => {
		if (!filter) return;
		filterReviews(filter.value);
	};

	useEffect(() => {
		ReviewsModel.getReviews([]);
		onChangeFilter(options[0]);
	}, []);

	const editFunc = () => {
		EditReviewModel.showEditReview(true);
	};

	return (
		<div>
			<Header>
				<h3>Отзывы</h3>
				<Dropdown
					defaultValue={options[0]}
					options={options}
					onChange={onChangeFilter}
				/>
			</Header>
			<Wrapper>
				{isLoading ? (
					<SkeletonReviews cards={4} />
				) : (
					<Items reviews={reviews} editFunc={editFunc} />
				)}
			</Wrapper>
		</div>
	);
};
