import { IStatus, IReviewPost, IAuthorization } from "shared/const/types";

const baseUrl = "https://academtest.ilink.dev";

const authorization = async (loginData: IAuthorization) => {
    const url = `${baseUrl}/user/signIn`
    const response = await fetch(url, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(loginData),
    })
    .then((response) => response.json())
    return response.accessToken
}

const getProfile = async () => {
    const url =  `${baseUrl}/user/getUserProfile`
    const response = await fetch(url, {
        method: "GET",
        headers: { 
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
        },
    })
    .then((response) => response.json())
    return response;
}

const getCaptcha = async () => {
    const url = `${baseUrl}/reviews/getCaptcha`
    const response = await fetch(url, {
        method: "GET",
    })
    .then((response) => response.json())
    return response;
}

const getReviews = async () => {
    const url = `${baseUrl}/reviews/getAll`
    const response = await fetch(url, {
        method: "GET",
        headers: { 
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
        },
    })
    .then((response) => response.json())
    return response;
}

const getStudents = async () => {
    const url = `${baseUrl}/user/getAll`
    const response = await fetch(url, {
        method: "GET",
        headers: { 
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
        },
    })
    .then((response) => response.json())
    return response;
}

const createReview = async (comment: IReviewPost) => {
    const url = `${baseUrl}/reviews/create`
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
}

const updateStatusComment = async (id: string, status: IStatus) => {
    const url = `${baseUrl}/reviews/updateStatus/${id}`;

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
}

const updateTextComment = async (id: string, text: string) => {
    const url = `${baseUrl}/reviews/updateInfo/${id}`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
        body: JSON.stringify({ text }),
    })
    .then((response) => response.json())
    console.log('test')
    return response
}

export const API = {
    authorization,
    getProfile,
    getCaptcha,
    getReviews,
    createReview,
    getStudents,
    updateStatusComment,
    updateTextComment
}
