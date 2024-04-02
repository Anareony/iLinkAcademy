import {
	createEffect,
	createEvent,
	createStore,
	forward,
	sample,
} from "effector";

import { UserProps } from "shared/const/types";
import { API } from "shared/api/requests";

const userInitialState: UserProps = {
	id: "",
	firstName: "",
	lastName: "",
	birthDate: "",
	academyStatus: "",
	profileImage: "",
	aboutMe: "",
	favoriteFood: "",
	gender: "",
	year: "",
	smallAboutMe: "",
	cityOfResidence: "",
	hasPet: false,
	pet: "",
};

const $user = createStore(userInitialState);

const getUser = createEvent();

const getUserFx = createEffect(async () => API.getUser());

forward({
	from: getUser,
	to: getUserFx,
});

const $isLoading = getUserFx.pending;

sample({
	clock: getUserFx.doneData,
	fn: clock => clock,
	target: $user,
});

export const UserModel = {
	getUser,
	$user,
	$isLoading,
};
