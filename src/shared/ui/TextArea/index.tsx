import React, { useState, useEffect, TextareaHTMLAttributes } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { FormInputsProps } from "shared/const/types";
import {
	Label,
	StyledTextArea,
	LengthBlock,
	Container,
	Msg,
	Helper,
} from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: Path<FormInputsProps>;
	register: UseFormRegister<FormInputsProps>;
	label?: string;
	errors?: FieldError;
	errorMsg?: string;
	maxLength?: number;
	defaultValue?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
	id,
	label,
	defaultValue,
	maxLength,
	register,
	errors,
	errorMsg,
	...props
}) => {
	const [symbols, setSymbols] = useState(0);

	useEffect(() => {
		setSymbols(defaultValue ? defaultValue.length : 0);
	}, [defaultValue]);

	const onChangeSymbols = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setSymbols(e.currentTarget.value.length);
	};

	return (
		<Container>
			<Label>{label}</Label>
			<StyledTextArea
				{...props}
				{...register(id)}
				onInput={onChangeSymbols}
				maxLength={maxLength}
				defaultValue={defaultValue}
				className={`
                    ${errors ? "hasError" : ""}
                `}
			/>
			<LengthBlock>
				{symbols}/{maxLength}
			</LengthBlock>
			{errors && errorMsg && (
				<Helper>
					<Msg>{errorMsg}</Msg>
				</Helper>
			)}
		</Container>
	);
};
