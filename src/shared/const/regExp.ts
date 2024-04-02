const email =
	/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9-]){1,25}\.)([a-zA-Z0-9]{2,4})$/;
const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/;
const name = /^[A-Za-zа-яА-Я]+$/;
const date = /^\d{2}.\d{2}.\d{4}$/;

export const Regulars = {
	email,
	password,
	name,
	date,
};
