import React from "react";
import { useStore } from "effector-react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { AddReviewModel } from "features/AddReviewForm/model";
import { FormInputsProps } from "shared/const/types";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";

import reload from "shared/assets/Reload.svg";

import {
	Container,
	Button,
	Img,
	RightBlock,
	InputContainer,
	Centered,
} from "./styles";

interface CaptchaProps {
	register: UseFormRegister<FormInputsProps>;
	captchaImg: string;
	reloadCaptcha: () => void;
	errors?: FieldError;
}

export const Captcha: React.FC<CaptchaProps> = ({
	register,
	captchaImg,
	reloadCaptcha,
	errors,
}) => {
	const isLoading = useStore(AddReviewModel.$isLoading);

	return (
		<Container>
			<InputContainer>
				<Input
					id="captcha"
					register={register}
					label="Введите код с картинки"
					placeholder="00000"
					errors={errors}
				/>
			</InputContainer>
			<RightBlock>
				{isLoading ? (
					<Centered>
						<Loader />
					</Centered>
				) : (
					<Img src={captchaImg} />
				)}

				<Button type="button" onClick={reloadCaptcha}>
					<img src={reload} alt="reload" />
				</Button>
			</RightBlock>
		</Container>
	);
};
