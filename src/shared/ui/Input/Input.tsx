import React, { InputHTMLAttributes, useState } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

import { FormInputsProps } from "shared/const/types";

import { ReactComponent as Show } from "shared/assets/eye.svg";
import { ReactComponent as Hide } from "shared/assets/eyeHide.svg";

import {
	Helper,
	Msg,
	InputLabel,
	StyledInput,
	EyeBtn,
	Container,
} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: Path<FormInputsProps>;
	register: UseFormRegister<FormInputsProps>;
	label?: string;
	errors?: FieldError;
	errorMsg?: string;
}

export const Input: React.FC<InputProps> = ({
	id,
	label,
	errors,
	errorMsg,
	type = "text",
	register,
	...props
}) => {
	const [isShowPassword, setIsShowPassword] = useState<boolean>(
		type === "password",
	);
	const [isActive, setIsActive] = useState<boolean>(false);

	const togglePasswordVisiblity = () => {
		setIsShowPassword(!isShowPassword);
	};

	const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.value) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	return (
		<Container>
			<InputLabel>{label}</InputLabel>
			<StyledInput
				{...props}
				{...register(id)}
				type={isShowPassword ? "password" : "text"}
				className={`
                    ${isActive ? "active" : ""} 
                    ${errors ? "hasError" : ""}
                `}
				onInput={onChangeValue}
			/>
			{type === "password" && (
				<EyeBtn
					type="button"
					className={`
                        ${isActive ? "active" : ""} 
                    `}
					onClick={togglePasswordVisiblity}
				>
					{isShowPassword ? <Show /> : <Hide />}
				</EyeBtn>
			)}
			{errors && errorMsg && (
				<Helper>
					<Msg>{errorMsg}</Msg>
				</Helper>
			)}
		</Container>
	);
};
