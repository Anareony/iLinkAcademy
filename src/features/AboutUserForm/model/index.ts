import { createEffect, createEvent, sample } from "effector";
import { ToastModel } from "entities/Toast";
import { UserModel } from "entities/User";
import { API } from "shared/api/requests";
import { UpdateUserProps } from "shared/const/types";

export const updateUser = createEvent<UpdateUserProps>();

const updateUserFx = createEffect<UpdateUserProps, any, Error>(
	async (updateInfo) => await API.updateUser(updateInfo),
);

sample({
	clock: updateUser,
	target: updateUserFx,
});

sample({
	clock: updateUserFx.doneData,
	target: UserModel.getUser,
});

sample({
	clock: updateUserFx.failData,
	fn: () => false,
	target: ToastModel.successToast,
});

sample({
	clock: updateUserFx.doneData,
	fn: () => true,
	target: ToastModel.successToast,
});

sample({
	clock: [updateUserFx.doneData, updateUserFx.failData],
	fn: () => ({
		textError: "Не получилось отредактировать данные. Попробуйте еще раз!",
		textSuccess: "Данные успешно отредактированы!",
		titleSuccess: "Сохранено!",
	}),
	target: ToastModel.setToast,
});

sample({
	clock: [updateUserFx.doneData, updateUserFx.failData],
	fn: () => true,
	target: ToastModel.showToast,
});

export const uploadUserPhoto = createEvent<FormData>();

const uploadUserPhotoFx = createEffect<FormData, any, Error>(
	async (profileImage) => await API.updateUserPhoto(profileImage),
);

sample({
	clock: uploadUserPhoto,
	target: uploadUserPhotoFx,
});

sample({
	clock: uploadUserPhotoFx.doneData,
	target: UserModel.getUser,
});

sample({
	clock: uploadUserPhotoFx.failData,
	fn: () => false,
	target: ToastModel.successToast,
});

sample({
	clock: uploadUserPhotoFx.doneData,
	fn: () => true,
	target: ToastModel.successToast,
});

sample({
	clock: [uploadUserPhotoFx.doneData, uploadUserPhotoFx.failData],
	fn: () => ({
		textError: "Не удалось отправить фото!",
		textSuccess: "Данные успешно отредактированы!",
		titleSuccess: "Сохранено!",
	}),
	target: ToastModel.setToast,
});

sample({
	clock: [uploadUserPhotoFx.doneData, uploadUserPhotoFx.failData],
	fn: () => true,
	target: ToastModel.showToast,
});
