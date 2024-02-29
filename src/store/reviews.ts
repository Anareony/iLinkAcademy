import { createEffect, forward, createEvent, restore, sample, createStore } from "effector";

export interface IReview {
    id: string;
    authorName: string;
    authorImage: string;
    createdAt: string;
    text: string;
    title: string;
    status: string;
    updateAt: string;
    version: number;
}

export interface IOption {
    id: number | string;
    value: string;
  }

// get reviews
const reviewsInitialState: IReview[] = [];

const $userReviews = createStore(reviewsInitialState);

const getUserReviewsFx = createEffect( async () => {
    const localToken = localStorage.getItem("auth");

    if (localToken) {
        const localTokenObj = JSON.parse(localToken);
        const response = await fetch("https://academtest.ilink.dev/reviews/getAll", {
            method: "GET",
            headers: { authorization: "Bearer " + localTokenObj.accessToken },
        })
        .then((response) => response.text()) 
        .then((response) => JSON.parse(response)) 
    return response;
}})
  
const getUserReviews = createEvent<IReview[]>();

forward({
  from: getUserReviews,
  to: getUserReviewsFx,
});

sample({
  clock: getUserReviewsFx.doneData,
  fn: (clock) => clock,
  target: $userReviews,
})

const $isLoadingReviews = getUserReviewsFx.pending;

export const userReviewsStore = {
    getUserReviews,
    $userReviews,
    $isLoadingReviews,
  };