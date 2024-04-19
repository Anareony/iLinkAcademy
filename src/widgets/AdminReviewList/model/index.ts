import { createEvent, createStore, sample } from "effector";

import { ReviewsModel } from "entities/Review";
import { filteredComments } from "shared/lib/helpers";
import { ReviewProps } from "shared/const/types";

export const filterReviews = createEvent<string>();

export const $sortedReviews = createStore<ReviewProps[]>([]);

sample({
	clock: filterReviews,
	source: ReviewsModel.$reviews,
	fn: (source, clock) => {
		return [...filteredComments(clock, source)];
	},
	target: $sortedReviews,
});

sample({
	clock: ReviewsModel.$reviews,
	source: filterReviews,
	fn: (source, clock) => {
		return filteredComments(source, clock);
	},
	target: $sortedReviews,
});
