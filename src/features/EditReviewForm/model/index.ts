import { createEffect, createEvent, createStore, sample } from "effector";

import { ToastModel } from "entities/Toast";
import { ReviewsModel } from "entities/Review";
import { API } from "shared/api/requests";

interface UpdateReviewTextProps {
	id: string;
	text: string;
}

const $isShowEditReview = createStore(false);

const showEditReview = createEvent<boolean>();

sample({
	clock: showEditReview,
	target: $isShowEditReview,
});

const updateTextReview = createEvent<UpdateReviewTextProps>();

const updateTextReviewFx = createEffect<UpdateReviewTextProps, any, Error>(
	async ({ id, text }) => await API.updateReviewText(id, text),
);

sample({
	clock: updateTextReview,
	target: updateTextReviewFx,
});

sample({
	clock: updateTextReviewFx.doneData,
	target: ReviewsModel.getReviews,
});

sample({
	clock: updateTextReviewFx.failData,
	fn: () => false,
	target: ToastModel.successToast,
});

sample({
	clock: updateTextReviewFx.doneData,
	fn: () => true,
	target: ToastModel.successToast,
});

sample({
	clock: [updateTextReviewFx.doneData, updateTextReviewFx.failData],
	fn: () => ({
		textError: "Не получилось отредактировать отзыв. Попробуйте еще раз!",
		textSuccess: "Отзыв успешно отредактирован!",
		titleSuccess: "Отзыв изменен",
	}),
	target: ToastModel.setToast,
});

sample({
	clock: [updateTextReviewFx.doneData, updateTextReviewFx.failData],
	fn: () => true,
	target: ToastModel.showToast,
});

export const EditReviewModel = {
	updateTextReviewFx,
	updateTextReview,
	showEditReview,
	$isShowEditReview,
};
