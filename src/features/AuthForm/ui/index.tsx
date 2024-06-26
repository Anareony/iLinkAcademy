import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormInputsProps } from "shared/const/types";
import { Button } from "shared/ui/Button/Button";

import { schema } from "../lib";
import { authModel } from "../model";

import {
	FormWrapper,
	Header,
	StyledInput,
	StyledLink,
	Wrapper,
	Form,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";

export const AuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitted },
	} = useForm<FormInputsProps>({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const token = useStore(authModel.$token);
	const navigate = useNavigate();

	useEffect(() => {
		authModel.checkAccessToken();
		if (token) {
			navigate("/main");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (token) {
			navigate("/main");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const onSubmit: SubmitHandler<FormInputsProps> = (data) => {
		authModel.getToken({
			email: data.email,
			password: data.password,
		});
	};

	return (
		<FormWrapper>
			<Header>Войти</Header>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Wrapper>
					<StyledInput
						id="email"
						register={register}
						placeholder="Введите адрес эл. почты"
						label="Электронная почта"
						errors={errors.email}
						errorMsg={errors.email?.message}
					/>
				</Wrapper>
				<Wrapper primary>
					<StyledInput
						password
						id="password"
						type="password"
						register={register}
						label="Пароль"
						placeholder="Введите пароль"
						errors={errors.password}
						errorMsg={errors.password?.message}
					/>
				</Wrapper>
				<Button
					type="submit"
					disabled={isDirty && !isValid && isSubmitted}
				>
					Войти
				</Button>
			</Form>
			<StyledLink to="/password-recovery">Забыли пароль?</StyledLink>
		</FormWrapper>
	);
};
