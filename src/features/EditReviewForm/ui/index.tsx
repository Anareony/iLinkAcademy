import React from "react";
import { useStore } from "effector-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ReviewsModel } from "entities/Review";
import { TextArea } from "shared/ui/TextArea";
import { FormInputsProps } from "shared/const/types";
import { Modal } from "shared/ui/Modal/Modal";
import { Error } from "shared/ui/Error";

import { schema } from "../lib";
import { EditReviewModel } from "../model";

import { Content, Container, Button, ButtonTomato, Btns } from "./styles";

export const EditReviewForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputsProps>({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const isShow = useStore(EditReviewModel.$isShowEditReview);

	const editComment = useStore(ReviewsModel.$editReview);

	const onSubmit: SubmitHandler<FormInputsProps> = (data) => {
		EditReviewModel.updateTextReview({
			id: editComment.id!,
			text: data.text,
		});
		EditReviewModel.showEditReview(false);
		reset();
	};

	const close = () => {
		EditReviewModel.showEditReview(false);
		reset();
	};

	return (
		<Modal
			header={"Редактирование отзыва"}
			isShow={isShow}
			closeWindow={close}
		>
			<Content onSubmit={handleSubmit(onSubmit)}>
				<Container>
					<TextArea
						id="text"
						register={register}
						defaultValue={editComment.text}
						label="Отзыв"
						placeholder="Напишите пару слов о вашем опыте..."
						maxLength={200}
						errors={errors.text}
					/>
				</Container>
				{errors.text && <Error>{errors.text?.message}</Error>}
				<Btns>
					<Button type="submit">Подтвердить редактирование</Button>
					<ButtonTomato type="button" onClick={close}>
						Отмена
					</ButtonTomato>
				</Btns>
			</Content>
		</Modal>
	);
};
