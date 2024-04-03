import * as yup from "yup";
import { Regulars } from "shared/const/regExp";

export const schema = yup.object().shape({
	name: yup
		.string()
		.min(4, "Поле должно содержать не менее 4 символов")
		.max(64, "Поле должно содержать не более 64 символов")
		.matches(Regulars.name, "Имя и фамилия не должны содержать цифр")
		.required("Имя и фамилия обязательное поле"),
	text: yup
		.string()
		.min(6, "Поле должно содержать не менее 6 символов")
		.max(200, "Максимальная длина отзыва - 200 символов")
		.required("Нужно обязательно оставить отзыв"),
	captcha: yup
		.string()
		.min(5, "Поле должно содержать 5 символа")
		.max(5, "Поле должно содержать 5 символа")
		.required("Это обязательное поле"),
	file: yup
		.mixed()
		.test(
			"fileSize",
			"Ошибка загрузки. Размер файла превышает 5Mb.",
			value => {
				if (value && value.length > 0) {
					return value[0]?.size <= 1024 * 1024 * 5;
				}
				return true;
			},
		),
});
