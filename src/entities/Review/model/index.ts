import { createEffect, createEvent, createStore, forward, sample } from 'effector'

import { ReviewProps } from 'shared/const/types';
import { API } from 'shared/api/requests';

const reviewsInitialState: ReviewProps[] = [];

const $reviews = createStore(reviewsInitialState);

const getReviewsFx = createEffect( async () => API.getReviews())
  
const getReviews = createEvent<ReviewProps[]>();

forward({
    from: getReviews,
    to: getReviewsFx,
});

sample({
    clock: getReviewsFx.doneData,
    fn: (clock) => clock,
    target: $reviews,
})

const $isLoadingReviews = getReviewsFx.pending;

const $editReview = createStore<ReviewProps>({
    status: "onCheck",
    authorName: "",
    id: "-1",
    text: "",
    authorImage: "",
    createdAt: "",
});
  
const setEditReview = createEvent<ReviewProps>();
  
sample({
    clock: setEditReview,
    target: $editReview,
});

export const ReviewsModel = {
    getReviews,
    $reviews,
    $isLoadingReviews,
    $editReview,
    setEditReview,
};