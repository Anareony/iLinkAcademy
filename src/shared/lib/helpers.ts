import { ReviewProps } from "shared/const/types";

export function getAge(dateString: string) {
	let today = new Date();
	let birthDate = new Date(dateString);
	let age = today.getFullYear() - birthDate.getFullYear();
	let m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

export const sortByTime = (a: ReviewProps, b: ReviewProps) => {
	return Date.parse(b.createdAt) - Date.parse(a.createdAt);
};

export const filterPublishReviews = (array: ReviewProps[]) => {
	return array
		.filter(element => element.status === "approved")
		.sort((a, b) => sortByTime(a, b));
};

export const filterRejectedReviews = (array: ReviewProps[]) => {
	return array
		.filter(element => element.status === "declined")
		.sort((a, b) => sortByTime(a, b));
};

export const filterUnpublishedReviews = (array: ReviewProps[]) => {
	return array
		.filter(element => element.status === "onCheck")
		.sort((a, b) => sortByTime(a, b));
};

export const filteredComments = (
	selectedSort: string,
	array: ReviewProps[],
) => {
	let comments = [];

	if (selectedSort === "declined") {
		comments.push(...filterRejectedReviews(array));
		comments.push(...filterPublishReviews(array));
		comments.push(...filterUnpublishedReviews(array));
	} else if (selectedSort === "approved") {
		comments.push(...filterPublishReviews(array));
		comments.push(...filterUnpublishedReviews(array));
		comments.push(...filterRejectedReviews(array));
	} else {
		comments.push(...filterUnpublishedReviews(array));
		comments.push(...filterRejectedReviews(array));
		comments.push(...filterPublishReviews(array));
	}
	return comments;
};
