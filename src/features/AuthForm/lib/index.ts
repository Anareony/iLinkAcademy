import * as yup from "yup";
import { Regulars } from "shared/const/regExp";

export const schema = yup.object().shape({
	email: yup
		.string()
		.matches(Regulars.email, "Недопустимые адрес электронной почты")
		.required("Это обязательно поле"),
	password: yup
		.string()
		.matches(
			Regulars.password,
			'Пароль должен содержать как минимум 8 символов: английские заглавные и прописные буквы, цифру и один из спецсимволов: "!#$%&"',
		)
		.required("Это обязательно поле"),
});
