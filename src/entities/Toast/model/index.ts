import { createEvent, createStore, restore, sample } from "effector";

interface ToastProps {
	textError: string;
	titleSuccess: string;
	textSuccess: string;
}

const $isShowToast = createStore(false);

const showToast = createEvent<boolean>();

sample({
	clock: showToast,
	target: $isShowToast,
});

const $isSuccessToast = createStore(true);

const successToast = createEvent<boolean>();

sample({
	clock: successToast,
	target: $isSuccessToast,
});

const setToast = createEvent<ToastProps>();

const $toast = restore<ToastProps>(setToast, {
	textError: "",
	textSuccess: "",
	titleSuccess: "",
});

export const ToastModel = {
	$isShowToast,
	showToast,
	setToast,
	$toast,
	$isSuccessToast,
	successToast,
};
