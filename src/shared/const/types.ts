export interface AuthorizationProps {
    email: string;
    password: string;
}

export interface UserProps {
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

export interface ReviewProps {
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

export interface Options {
    id: number | string;
    value: string;
}

export type Select = {
    label: string;
    value: string;
};

export interface ReviewPostProps {
    authorName: string;
    title: string;
    text: string;
    captchaKey: string;
    captchaValue: string;
}

export interface StudentProps {
    id?: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    aboutMe?: string;
    smallAboutMe: string;
    academyStatus: string;
}

export interface FormAboutUserInputsProps {
    firstName: string;
    lastName: string;
    dateBirth: string;
    text: string;
    city: Select;
    sex: Select;
    pet: Select;
    shortInfo: string;
}

export interface FormAddCommentInputsProps {
    name: string;
    text: string;
    file: any;
    captcha: string;
}

export interface FormInputsProps extends AuthorizationProps, FormAboutUserInputsProps, FormAddCommentInputsProps {}

export type Status = "onCheck" | "approved" | "declined";

export interface UpdateUserProps {
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: "male" | "female";
    cityOfResidence: string;
    hasPet: boolean;
    aboutMe: string;
    smallAboutMe: string;
}