import * as yup from "yup";

export const schema = yup.object().shape({
	text: yup
		.string()
		.min(6, "Поле должно содержать не менее 6 символов")
		.max(200, "Максимальная длина отзыва - 200 символов")
		.required("Нужно обязательно оставить отзыв"),
});
