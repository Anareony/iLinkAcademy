import React, { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ReviewPostProps, FormInputsProps } from "shared/const/types";
import { Modal } from "shared/ui/Modal/Modal";

import { AddReviewModel } from "../model";
import { schema } from "../lib";

import { TextArea } from "shared/ui/TextArea";
import { Input } from "shared/ui/Input/Input";
import { Captcha } from "./Captcha";
import { SubmitBlock } from "./SubmitBlock";
import { LoadFile } from "./LoadFile";
import { FileBar } from "./FileBar";

import error from "shared/assets/error.svg";

import {
	Form,
	TextAreaContainer,
	Error,
	UserInformation,
	InputContainer,
} from "./styles";

export const AddReviewForm = () => {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
		reset,
	} = useForm<FormInputsProps>({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	useEffect(() => {
		AddReviewModel.getCaptcha();
	}, []);

	const isShowAddReview = useStore(AddReviewModel.$isShowAddReview);
	const captcha = useStore(AddReviewModel.$captcha);
	const [file, setFile] = useState("");

	const refreshCaptchaHandler = () => {
		AddReviewModel.getCaptcha();
	};

	const deleteFile = () => {
		resetField("file");
		setFile("");
	};

	const closeWindow = () => {
		AddReviewModel.showAddReview(false);
		reset();
		setFile("");
	};

	const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		if (file) {
			setFile(file.name);
		}
	};

	const onSubmit = (data: FormInputsProps) => {
		// AddReviewModel.createReview({
		// 	authorName: data.name,
		// 	text: data.text,
		// 	title: data.name,
		// 	captchaValue: data.captcha,
		// 	captchaKey: captcha.key,
		//     authorImage: data.file[0]
		// });

		if (data.file) {
			const form = new FormData();
			form.append("authorImage", data.file[0]);
			console.log(form);
			// AddCommentModel.uploadPhotoComment(form);
		}

		AddReviewModel.showAddReview(false);
		setFile("");
		reset();
	};

	return (
		<Modal
			header={"Отзывы"}
			isShow={isShowAddReview}
			closeWindow={closeWindow}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<UserInformation>
					<InputContainer>
						<Input
							id="name"
							register={register}
							label="Как вас зовут?"
							placeholder={"Имя Фамилия"}
							errors={errors.name}
						/>
					</InputContainer>
					<LoadFile register={register} onChangeFile={onChangeFile} />
				</UserInformation>
				{file && <FileBar file={file} deleteFile={deleteFile} />}
				{errors.file && (
					<Error>
						<img src={error} alt="error" />
						{errors.file.message}
					</Error>
				)}
				{errors.name && (
					<Error>
						<img src={error} alt="error" />
						{errors.name.message}
					</Error>
				)}
				<TextAreaContainer>
					<TextArea
						id="text"
						register={register}
						label="Все ли вам понравилось?"
						placeholder="Напишите пару слов о вашем опыте..."
						maxLength={200}
						errors={errors.text}
					/>
					{errors.text && (
						<Error>
							<img src={error} alt="error" />
							{errors.text.message}
						</Error>
					)}
				</TextAreaContainer>
				<Captcha
					register={register}
					captchaImg={captcha.base64Image}
					reloadCaptcha={refreshCaptchaHandler}
					errors={errors.captcha}
				/>
				{errors.captcha && (
					<Error>
						<img src={error} alt="error" />
						{errors.captcha.message}
					</Error>
				)}
				<SubmitBlock />
			</Form>
		</Modal>
	);
};
