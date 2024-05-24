import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../lib";
import { FormInputsProps } from "shared/const/types";
import { Button } from "shared/ui/Button/Button";

import {
	MobileText,
	Text,
	BtnsWrapper,
	HeaderWrapper,
	StyledButton,
	StyledInput,
	StyledLink,
	Header,
	Form,
} from "./styles";
import { ToastModel } from "entities/Toast";

export const FormPasswordRecovery = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputsProps>({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FormInputsProps> = (data) => {
		ToastModel.successToast(false);
		ToastModel.setToast({
			textError: "Такого пользователя не существует.",
			titleSuccess: "Код отправлен",
			textSuccess: "",
		});
		ToastModel.showToast(true);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<HeaderWrapper>
				<StyledLink to="/login"></StyledLink>
				<Header>Сброс пароля</Header>
			</HeaderWrapper>
			<StyledInput
				register={register}
				id="email"
				label="Электронная почта"
				placeholder="Введите адрес эл. почты"
				errors={errors.email}
				errorMsg={errors.email?.message}
			/>
			<BtnsWrapper>
				<Button>
					<Text>Отправить код</Text>
					<MobileText>Сбросить</MobileText>
				</Button>
				<Link to="/login">
					<StyledButton>Отмена</StyledButton>
				</Link>
			</BtnsWrapper>
		</Form>
	);
};
