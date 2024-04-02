import React from "react";
import { useStore } from "effector-react";

import { ToastModel } from "../model";

import { ReactComponent as Cross } from "shared/assets/cross.svg";

import { ToastWrapper, Content, Header, Button } from "./styles";

export const Toast = () => {
	const isShowToast = useStore(ToastModel.$isShowToast);
	const isSuccessToast = useStore(ToastModel.$isSuccessToast);
	const { titleSuccess, textSuccess, textError } = useStore(
		ToastModel.$toast,
	);

	const onClose = () => {
		ToastModel.showToast(false);
	};

	if (!isShowToast) {
		return null;
	}

	return (
		<ToastWrapper className={`${!isSuccessToast ? "error" : ""}`}>
			<Header>
				<p>{isSuccessToast ? titleSuccess : "Что-то не так..."}</p>
				<Button onClick={onClose}>
					<Cross />
				</Button>
			</Header>
			<Content>
				<p>{isSuccessToast ? textSuccess : textError}</p>
			</Content>
		</ToastWrapper>
	);
};
