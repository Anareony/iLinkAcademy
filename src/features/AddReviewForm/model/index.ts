import {
	sample,
	createStore,
	createEffect,
	forward,
	createEvent,
} from "effector";

import { ToastModel } from "entities/Toast";
import {
	ReviewPostProps,
	ReviewProps,
	UploadImageProps,
} from "shared/const/types";
import { API } from "shared/api/requests";

const $isShowAddReview = createStore(false);

const showAddReview = createEvent<boolean>();

sample({
	clock: showAddReview,
	target: $isShowAddReview,
});

const $review = createStore<ReviewProps>({
	id: "",
	authorName: "",
	authorImage: "",
	createdAt: "",
	text: "",
});

const createReview = createEvent<ReviewPostProps>();

const createReviewFx = createEffect(
	async (review: ReviewPostProps) => await API.createReview(review),
);

forward({
	from: createReview,
	to: createReviewFx,
});

sample({
	clock: createReviewFx.doneData,
	fn: (clock) => clock,
	target: $review,
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

const uploadImageReview = createEvent<FormData>();

const $uploadPhotoCommentData = createStore<FormData | null>(null);

sample({
	clock: uploadImageReview,
	target: $uploadPhotoCommentData,
});

const uploadImageReviewFx = createEffect<UploadImageProps, any, Error>(
	async ({ id, authorImage }) => {
		await API.updateReviewPhoto(id, authorImage);
	},
);

sample({
	clock: createReviewFx.doneData,
	source: $uploadPhotoCommentData,
	fn: (source, clock) => {
		return { authorImage: source!, id: clock.id };
	},
	target: uploadImageReviewFx,
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
	uploadImageReview,
};
