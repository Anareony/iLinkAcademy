import { IStatus, IReviewPost, IAuthorization, IUpdateUser } from "shared/const/types";

const baseUrl = "https://academtest.ilink.dev";

const authorization = async (loginData: IAuthorization) => {
    const url = `${baseUrl}/user/signIn`
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(loginData),
        })
        .then((response) => response.json())
        return response.accessToken
    } catch (e: any) {
        throw Error(e.message);
    }
}

const getProfile = async () => {
    const url =  `${baseUrl}/user/getUserProfile`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
            },
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}

const getCaptcha = async () => {
    const url = `${baseUrl}/reviews/getCaptcha`
    try {
        const response = await fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}

const getReviews = async () => {
    const url = `${baseUrl}/reviews/getAll`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
            },
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}

const getStudents = async () => {
    const url = `${baseUrl}/user/getAll`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
            },
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}

const createReview = async (comment: IReviewPost) => {
    const url = `${baseUrl}/reviews/create`
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            body: JSON.stringify(comment),
            }, 
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}

const updateStatusComment = async (id: string, status: IStatus) => {
    const url = `${baseUrl}/reviews/updateStatus/${id}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
            },
            body: JSON.stringify({ status }),
        })
        .then((response) => response.json())
        return response
    } catch (e: any) {
        throw Error(e.message);
    }
}

const updateTextComment = async (id: string, text: string) => {
    const url = `${baseUrl}/reviews/updateInfo/${id}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
            },
            body: JSON.stringify({ text }),
        })
        .then((response) => response.json())
        return response
    } catch (e: any) {
        throw Error(e.message);
    }
}
const updatePhotoUser = async (profileImage: FormData): Promise<any> => {
    const url = `${baseUrl}/user/updatePhoto`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
            },
            body: profileImage,
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}
const updateUser = async (updateInfo: IUpdateUser): Promise<any> => {
    const url = `${baseUrl}/user/updateInfo`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
            },
            body: JSON.stringify(updateInfo),
        })
        .then((response) => response.json())
        return response;
    } catch (e: any) {
        throw Error(e.message);
    }
}

export const API = {
    authorization,
    getProfile,
    getCaptcha,
    getReviews,
    createReview,
    getStudents,
    updateStatusComment,
    updateTextComment,
    updatePhotoUser,
    updateUser
}
