export interface IAuthorization {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    academyStatus: string;
    profileImage: string;
    aboutMe: string;
    favoriteFood: string;
    cityOfResidence: string;
    gender: string;
    year: string;
    smallAboutMe: string;
    hasPet: boolean;
    pet: string;
}

export interface IReview {
    id?: string;
    authorName: string;
    authorImage: string;
    createdAt: string;
    text: string;
    title?: string;
    status?: "approved" | "declined" | "onCheck";
    updateAt?: string;
    version?: number;
}

export interface IOption {
    id: number | string;
    value: string;
}

export type TSelect = {
    label: string;
    value: string;
};

export interface IReviewPost {
    authorName: string;
    title: string;
    text: string;
    captchaKey: string;
    captchaValue: string;
}

export interface IStudent {
    id?: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    aboutMe?: string;
    smallAboutMe: string;
    academyStatus: string;
}

export interface IFormAboutUserInputs {
    firstName: string;
    lastName: string;
    dateBirth: string;
    text: string;
    city: TSelect;
    sex: TSelect;
    pet: TSelect;
    shortInfo: string;
}

export interface IFormAddCommentInputs {
    name: string;
    text: string;
    file: any;
    captcha: string;
}

export interface IFormInputs extends IAuthorization, IFormAboutUserInputs, IFormAddCommentInputs {}

export type IStatus = "onCheck" | "approved" | "declined";

export interface IUpdateUser {
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: "male" | "female";
    cityOfResidence: string;
    hasPet: boolean;
    aboutMe: string;
    smallAboutMe: string;
}