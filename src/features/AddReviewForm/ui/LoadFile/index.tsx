import React from "react";
import { UseFormRegister } from "react-hook-form";

import { FormInputsProps } from "shared/const/types";

import plus from "shared/assets/Vector.svg";

import { BtnIcon, BtnText, FileInput, StyledButton } from "./styles";

interface ILoadFile {
	onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
	register: UseFormRegister<FormInputsProps>;
}

export const LoadFile: React.FC<ILoadFile> = ({ onChangeFile, register }) => {
	const fileLoader = () => {
		const input: HTMLElement = document.querySelector(
			"#fileLoader",
		) as HTMLElement;
		input.click();
	};

	return (
		<>
			<StyledButton type="button" onClick={fileLoader}>
				<BtnIcon src={plus} alt="plus" />
				<BtnText>Загрузить файл</BtnText>
			</StyledButton>
			<FileInput
				{...register("file")}
				onInput={onChangeFile}
				type="file"
				id="fileLoader"
				accept=".jpg, .jpeg, .png"
			/>
		</>
	);
};
