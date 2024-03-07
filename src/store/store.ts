import { createEffect, createEvent, createStore, forward, sample} from 'effector'
import { IProfileInfo } from '../shared/const/types';

const userInitialState: IProfileInfo = {
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

const $userInfo = createStore(userInitialState)

const getUserInfo = createEvent();

const getUserInfoFx = createEffect(async () => {
  const localToken = localStorage.getItem('auth')

  if (localToken) {
    const localTokenObj = JSON.parse(localToken);
    const response = await fetch(
        "https://academtest.ilink.dev/user/getUserProfile",
        {
            method: "GET",
            headers: { Authorization: `Bearer ${localTokenObj.accessToken}` },
        }
    )
      .then((response) => response.text())
      .then((response) => JSON.parse(response))
    return response;
  }
});

forward({
    from: getUserInfo,
    to: getUserInfoFx,
})

const $isLoading = getUserInfoFx.pending;

sample({
    clock: getUserInfoFx.doneData,
    fn: (clock) => clock,
    target: $userInfo,
})

export const userStore = {
    getUserInfo,
    $userInfo,
    $isLoading
};
