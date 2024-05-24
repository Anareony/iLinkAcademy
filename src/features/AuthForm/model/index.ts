import {
	createEffect,
	createEvent,
	createStore,
	forward,
	sample,
} from "effector";

import { ToastModel } from "entities/Toast";
import { API } from "shared/api/requests";
import { AuthorizationProps } from "shared/const/types";

const $token = createStore("");

const getToken = createEvent<AuthorizationProps>();

const getTokenFx = createEffect(async (user: AuthorizationProps) => {
	const accessToken = await API.authorization(user);
	localStorage.setItem("accessToken", accessToken);
	return accessToken;
});

const $isLoading = getTokenFx.pending;

const checkAccessTokenFx = createEffect(() =>
	localStorage.getItem("accessToken") !== null
		? localStorage.getItem("accessToken")!
		: "",
);

const checkAccessToken = createEvent();

sample({
	clock: checkAccessToken,
	target: checkAccessTokenFx,
});

const $isAuth = createStore<boolean>(false);

sample({
	clock: checkAccessTokenFx.doneData,
	target: $token,
});

sample({
	clock: $token,
	fn: (clock) => !!clock,
	target: $isAuth,
});

forward({
	from: getToken,
	to: getTokenFx,
});

sample({
	clock: getTokenFx.doneData,
	fn: (clock) => clock,
	target: $token,
});

sample({
	clock: getTokenFx.failData,
	fn: (clock) => !clock.message,
	target: ToastModel.successToast,
});

sample({
	clock: getTokenFx.failData,
	fn: () => ({
		textError: "Такого пользователя не существует.",
		textSuccess: "",
		titleSuccess: "",
	}),
	target: ToastModel.setToast,
});

sample({
	clock: getTokenFx.failData,
	fn: () => true,
	target: ToastModel.showToast,
});

export const authModel = {
	$isAuth,
	checkAccessToken,
	$token,
	getToken,
	$isLoading,
};
