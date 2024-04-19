import { Regulars } from "shared/const/regExp";
import * as yup from "yup";

export const schema = yup.object().shape({
	email: yup
		.string()
		.matches(Regulars.email, "Недопустимые адрес электронной почты")
		.required("Имя и фамилия обязательное поле"),
});
