import {
	Status,
	ReviewPostProps,
	AuthorizationProps,
	UpdateUserProps,
} from "shared/const/types";

const BASE_URL = "https://academtest.ilink.dev";

const authorization = async (loginData: AuthorizationProps) => {
	const url = `${BASE_URL}/user/signIn`;
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		return response.accessToken;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const getUser = async () => {
	const url = `${BASE_URL}/user/getUserProfile`;
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const getCaptcha = async () => {
	const url = `${BASE_URL}/reviews/getCaptcha`;
	try {
		const response = await fetch(url, {
			method: "GET",
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const getReviews = async () => {
	const url = `${BASE_URL}/reviews/getAll`;
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const getStudents = async () => {
	const url = `${BASE_URL}/user/getAll`;
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const createReview = async (comment: ReviewPostProps) => {
	const url = `${BASE_URL}/reviews/create`;
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify(comment),
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const updateReviewPhoto = async (
	id: string,
	authorImage: FormData,
): Promise<any> => {
	const url = `${BASE_URL}/reviews/updatePhoto/${id}`;
	try {
		const response = await fetch(url, {
			method: "POST",
			body: authorImage,
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		if (!response.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const updateReviewStatus = async (id: string, status: Status) => {
	const url = `${BASE_URL}/reviews/updateStatus/${id}`;
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
			},
			body: JSON.stringify({ status }),
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		if (!response.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const updateReviewText = async (id: string, text: string) => {
	const url = `${BASE_URL}/reviews/updateInfo/${id}`;
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
			},
			body: JSON.stringify({ text }),
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		if (!response.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};
const updateUserPhoto = async (profileImage: FormData): Promise<any> => {
	const url = `${BASE_URL}/user/updatePhoto`;
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
			},
			body: profileImage,
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		if (!response.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};
const updateUser = async (updateInfo: UpdateUserProps): Promise<any> => {
	const url = `${BASE_URL}/user/updateInfo`;
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
			},
			body: JSON.stringify(updateInfo),
		}).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		});

		if (!response.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

export const API = {
	authorization,
	getUser,
	getCaptcha,
	getReviews,
	createReview,
	getStudents,
	updateReviewPhoto,
	updateReviewStatus,
	updateReviewText,
	updateUserPhoto,
	updateUser,
};
