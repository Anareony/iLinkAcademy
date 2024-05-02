import React, { useState } from "react";
import { useStore } from "effector-react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactSelect from "react-select";

import { LoadAvatar } from "./LoadAvatar";
import { schema } from "../lib";
import { optionsCity, optionsPet, optionsSex } from "../lib/options";
import { updateUser } from "../model";

import { UserModel } from "entities/User";
import { TextArea } from "shared/ui/TextArea";
import { Button } from "shared/ui/Button/Button";
import { FormInputsProps, UserProps } from "shared/const/types";

import {
	Error,
	Container,
	Header,
	Grid,
	DropdownContainer,
	DropdownText,
	TextareaContainer,
	Edit,
	FloatedBtn,
	StyledInput,
} from "./styles";

export const AboutUserForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormInputsProps, UserProps>({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const user = useStore(UserModel.$user);
	const isLoading = useStore(UserModel.$isLoading);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const onSubmit = handleSubmit<FormInputsProps>((data) => {
		const parts = data.dateBirth.split(".");
		const birthDate = new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
		updateUser({
			firstName: data.firstName,
			lastName: data.lastName,
			birthDate: birthDate,
			gender: data.sex.value as "male" | "female",
			cityOfResidence: data.city.value,
			hasPet: data.pet.value !== "false",
			aboutMe: data.text,
			smallAboutMe: data.shortInfo,
		});
		setIsDisabled(false);
	});

	return (
		<Container onSubmit={onSubmit}>
			<Header>
				<h3>Обо мне</h3>
			</Header>
			<Edit>
				<LoadAvatar
					user={user}
					register={register}
					isLoading={isLoading}
				/>
				{!isDisabled && (
					<Button type="button" onClick={() => setIsDisabled(true)}>
						Редактировать
					</Button>
				)}
			</Edit>

			<Grid>
				<Controller
					control={control}
					name="firstName"
					defaultValue={user.firstName}
					render={() => (
						<StyledInput
							id="firstName"
							register={register}
							label="Имя"
							defaultValue={user.firstName}
							disabled={!isDisabled}
							errors={errors.name}
							errorMsg={errors.name?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name="lastName"
					defaultValue={user.lastName}
					render={() => (
						<StyledInput
							id="lastName"
							register={register}
							label="Фамилия"
							defaultValue={user.lastName}
							disabled={!isDisabled}
							errors={errors.lastName}
							errorMsg={errors.lastName?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name="dateBirth"
					defaultValue={new Date(user.birthDate).toLocaleDateString()}
					render={() => (
						<StyledInput
							id="dateBirth"
							register={register}
							label="Дата рождения"
							defaultValue={new Date(
								user.birthDate,
							).toLocaleDateString()}
							disabled={!isDisabled}
							errors={errors.dateBirth}
							errorMsg={errors.dateBirth?.message}
						/>
					)}
				/>
				<DropdownContainer>
					<DropdownText>Город</DropdownText>
					<Controller
						control={control}
						name="city"
						defaultValue={optionsCity.find(
							(city) => city.value === user.cityOfResidence,
						)}
						render={({ field }) => (
							<ReactSelect
								{...field}
								isDisabled={!isDisabled}
								options={optionsCity}
								className="react-select-container"
								classNamePrefix="react-select"
								defaultValue={optionsCity.find(
									(city) =>
										city.value === user.cityOfResidence,
								)}
							/>
						)}
					/>
				</DropdownContainer>
				<DropdownContainer>
					<DropdownText>Пол</DropdownText>
					<Controller
						control={control}
						name="sex"
						defaultValue={optionsSex.find(
							(sex) => sex.value === user.gender,
						)}
						render={({ field }) => (
							<ReactSelect
								{...field}
								options={optionsSex}
								isDisabled={!isDisabled}
								className="react-select-container"
								classNamePrefix="react-select"
								defaultValue={optionsSex.find(
									(sex) => sex.value === user.gender,
								)}
							/>
						)}
					/>
				</DropdownContainer>
				<DropdownContainer>
					<DropdownText>Животное</DropdownText>
					<Controller
						control={control}
						name="pet"
						defaultValue={optionsPet.find(
							(pet) =>
								pet.value === (user.hasPet ? "true" : "false"),
						)}
						render={({ field }) => (
							<ReactSelect
								{...field}
								isDisabled={!isDisabled}
								options={optionsPet}
								className="react-select-container"
								classNamePrefix="react-select"
								defaultValue={optionsPet.find(
									(pet) =>
										pet.value ===
										(user.hasPet ? "true" : "false"),
								)}
							/>
						)}
					/>
				</DropdownContainer>
			</Grid>
			<TextareaContainer>
				<Controller
					control={control}
					name="shortInfo"
					defaultValue={user.smallAboutMe}
					render={() => (
						<TextArea
							id="shortInfo"
							register={register}
							defaultValue={user.smallAboutMe}
							label="Краткая информация"
							disabled={!isDisabled}
							placeholder="Напишите краткую информацию о себе..."
							maxLength={100}
						/>
					)}
				/>
			</TextareaContainer>
			<TextareaContainer>
				<Controller
					control={control}
					name="text"
					defaultValue={user.aboutMe}
					render={() => (
						<TextArea
							id="text"
							register={register}
							defaultValue={user.aboutMe}
							label="О себе"
							disabled={!isDisabled}
							placeholder="Напишите пару слов о себе..."
							maxLength={300}
						/>
					)}
				/>
			</TextareaContainer>
			{isDisabled && (
				<FloatedBtn type="submit">Сохранить изменения</FloatedBtn>
			)}
			{errors.file && <Error>{errors.file.message}</Error>}
		</Container>
	);
};
