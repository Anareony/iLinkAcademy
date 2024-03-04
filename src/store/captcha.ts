import { createEffect, forward, createEvent, sample, createStore,  } from "effector";

type CaptchaType = {
  base64Image: string;
  key: string;
};

const getCaptcha = createEvent();

const $captcha = createStore({
  base64Image: '',
  key: '',
})

const getCaptchaFx = createEffect(async () => {
    const response = await fetch(
        "https://academtest.ilink.dev/reviews/getCaptcha"
    )
    .then((response) => response.text())
    .then((response) => JSON.parse(response));
    return response;
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

export const captchaStore = {
  getCaptcha,
  $captcha,
  $isLoading,
};