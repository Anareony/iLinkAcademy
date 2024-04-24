import { createEffect, createEvent, sample } from "effector";

import { ToastModel } from "entities/Toast";
import { ReviewsModel } from "entities/Review";
import { API } from "shared/api/requests";
import { Status } from "shared/const/types";

interface UpdateStatusReviewProps {
	id: string;
	status: Status;
}

export const updateStatusReview = createEvent<UpdateStatusReviewProps>();

export const updateStatusReviewFx = createEffect<
	UpdateStatusReviewProps,
	any,
	Error
>(async ({ id, status }) => await API.updateReviewStatus(id, status));

sample({
	clock: updateStatusReview,
	target: updateStatusReviewFx,
});

sample({
	clock: updateStatusReviewFx.doneData,
	target: ReviewsModel.getReviews,
});

sample({
	clock: updateStatusReviewFx.failData,
	fn: () => false,
	target: ToastModel.successToast,
});

sample({
	clock: updateStatusReviewFx.doneData,
	fn: () => true,
	target: ToastModel.successToast,
});

sample({
	clock: [updateStatusReviewFx.doneData, updateStatusReviewFx.failData],
	fn: () => ({
		textError: "Не получилось отредактировать отзыв. Попробуйте еще раз!",
		textSuccess: "Отзыв успешно отредактирован!",
		titleSuccess: "Отзыв изменен",
	}),
	target: ToastModel.setToast,
});

sample({
	clock: [updateStatusReviewFx.doneData, updateStatusReviewFx.failData],
	fn: () => true,
	target: ToastModel.showToast,
});
