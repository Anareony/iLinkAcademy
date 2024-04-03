import {
	sample,
	createStore,
	createEffect,
	forward,
	createEvent,
} from "effector";

import { ToastModel } from "entities/Toast";
import { ReviewPostProps, UploadImageProps } from "shared/const/types";
import { API } from "shared/api/requests";

const $isShowAddReview = createStore(false);

const showAddReview = createEvent<boolean>();

sample({
	clock: showAddReview,
	target: $isShowAddReview,
});

const createReview = createEvent<ReviewPostProps>();

const createReviewFx = createEffect(async (review: ReviewPostProps) =>
	API.createReview(review),
);

forward({
	from: createReview,
	to: createReviewFx,
});

const getCaptcha = createEvent();

const $captcha = createStore({
	base64Image: "",
	key: "",
});

const getCaptchaFx = createEffect(async () => {
	return API.getCaptcha();
});

forward({
	from: getCaptcha,
	to: getCaptchaFx,
});

sample({
	clock: getCaptchaFx.doneData,
	fn: (clock) => clock,
	target: $captcha,
});

const $isLoading = getCaptchaFx.pending;

const uploadPhotoComment = createEvent<UploadImageProps>();

const uploadPhotoCommentFx = createEffect<UploadImageProps, any, Error>(
	async ({ authorImage, id }) => {
		await API.updateReviewPhoto(id, authorImage);
	},
);

forward({
	from: uploadPhotoComment,
	to: uploadPhotoCommentFx,
});

sample({
	clock: createReviewFx.failData,
	fn: () => false,
	target: ToastModel.successToast,
});

sample({
	clock: createReviewFx.doneData,
	fn: () => true,
	target: ToastModel.successToast,
});

sample({
	clock: [createReviewFx.doneData, createReviewFx.failData],
	fn: () => ({
		textError: "Не удалось добавить отзыв",
		textSuccess: "Спасибо за отзыв о нашей компании :)",
		titleSuccess: "Успешно!",
	}),
	target: ToastModel.setToast,
});

sample({
	clock: [createReviewFx.doneData, createReviewFx.failData],
	fn: () => true,
	target: ToastModel.showToast,
});

export const AddReviewModel = {
	getCaptcha,
	$captcha,
	$isLoading,
	createReview,
	showAddReview,
	$isShowAddReview,
};
