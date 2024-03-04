import { IOption } from "./reviews";
import {
  createEffect,
  forward,
  createEvent,
  createStore,
  sample,
} from "effector";

export interface IStudent {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    aboutMe: string;
    smallAboutMe: string;
    academyStatus: string;
}
const initialState: IStudent[] = []
const $users = createStore(initialState)

const getUsers = createEvent<IStudent[]>();

const getUsersHandler = async () => {
    const localToken = localStorage.getItem("auth");
  
    if (localToken) {
      const localTokenObj = JSON.parse(localToken);
      const response = await fetch("https://academtest.ilink.dev/user/getAll", {
        method: "GET",
        headers: { authorization: "Bearer " + localTokenObj.accessToken },
      })
        .then((response) => response.text())
        .then((response) => JSON.parse(response));
      return response;
    }
  };
const getUsersFx = createEffect(getUsersHandler);

forward({
  from: getUsers,
  to: getUsersFx,
})

sample({
  clock: getUsersFx.doneData,
  fn: (clock) => clock,
  target: $users,
})
const $isLoadingUsers = getUsersFx.pending;

export const usersStore = {
  getUsers,
  $users,
  $isLoadingUsers,
};
