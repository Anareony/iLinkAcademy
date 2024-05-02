import React from "react";
import Skeleton from "react-loading-skeleton";
import { UseFormRegister } from "react-hook-form";

import { FormInputsProps, UserProps } from "shared/const/types";
import { uploadUserPhoto } from "features/AboutUserForm/model";

import edit from "shared/assets/Edit.svg";

import {
	ImgHoverContainer,
	ImgHover,
	Img,
	ProfilePic,
	LoadButton,
	FileInput,
	PicBtn,
	PicHeader,
	ImgEdit,
} from "./styles";

interface LoadAvatarProps {
	user: UserProps;
	register: UseFormRegister<FormInputsProps>;
	isLoading: boolean;
}

export const LoadAvatar: React.FC<LoadAvatarProps> = ({
	user,
	register,
	isLoading,
}) => {
	const fileLoader = () => {
		const input: HTMLElement = document.querySelector(
			"#fileLoader",
		) as HTMLElement;
		input.click();
	};

	const loadImage = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];

		if (file.size / 1024 / 1024 < 5) {
			const formData = new FormData();
			formData.append("profileImage", file);
			uploadUserPhoto(formData);
		}
	};

	return (
		<>
			<ProfilePic>
				{isLoading ? (
					<Skeleton width="64px" height="64px" />
				) : (
					<Img
						onClick={fileLoader}
						src={`https://academtest.ilink.dev/images/${user.profileImage}`}
						alt="avatar"
					/>
				)}
				<ImgHoverContainer>
					<ImgHover
						src={`https://academtest.ilink.dev/images/${user.profileImage}`}
						alt="avatar"
					/>
				</ImgHoverContainer>
				<PicBtn>
					<PicHeader>Фото профиля</PicHeader>
					<LoadButton type="button" onClick={fileLoader}>
						<ImgEdit src={edit} alt="edit" />
						Изменить фото
					</LoadButton>
				</PicBtn>
			</ProfilePic>
			<FileInput
				type="file"
				id="fileLoader"
				accept=".png, .jpg, .jpeg"
				{...register("file", {
					onChange: (e) => {
						loadImage(e);
					},
				})}
			/>
		</>
	);
};
