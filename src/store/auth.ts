import { createEffect, createEvent, createStore, forward, sample} from 'effector'

export interface IAuthorization {
    email: string;
    password: string;
}

const $token = createStore({
    token: ''
})

const getToken = createEvent<IAuthorization>();

const getTokenFx = createEffect((user: IAuthorization) => {
    const response = fetch("https://academtest.ilink.dev/user/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    })
    .then((response) => response.json())
    return response;
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

export const authStore = {
    $token,
    getToken,
};
