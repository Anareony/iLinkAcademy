import { Regulars } from "shared/const/regExp";
import * as yup from "yup";

export const schema = yup.object().shape({
	firstName: yup
		.string()
		.min(2, "Поле должно содержать не менее 2 символов")
		.max(40, "Поле должно содержать не более 40 символов")
		.matches(
			Regulars.name,
			"Это поле может содержать только латиницу и кириллицу",
		),
	lastName: yup
		.string()
		.min(2, "Поле должно содержать не менее 2 символов")
		.max(40, "Поле должно содержать не более 40 символов")
		.matches(
			Regulars.name,
			"Это поле может содержать только латиницу и кириллицу",
		),
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
	dateBirth: yup
		.string()
		.matches(Regulars.date, "Дата должна быть в формате: дд.мм.гггг")
		.test(
			"date",
			"Дата должна быть не больше сегодняшней",
			(value: any) => {
				const today = new Date().getTime();
				const parts = value.split(".");
				const birthDate = new Date(
					`${parts[1]}-${parts[0]}-${parts[2]}`,
				).getTime();

				return birthDate <= today;
			},
		),
	city: yup.object({
		label: yup.string(),
		value: yup.string(),
	}),
	sex: yup.object({
		label: yup.string(),
		value: yup.string(),
	}),
	pet: yup.object({
		label: yup.string(),
		value: yup.string(),
	}),
	information: yup
		.string()
		.max(99, "Максимальная длина отзыва - 99 символов"),
	about: yup.string().max(300, "Максимальная длина отзыва - 300 символов"),
});
