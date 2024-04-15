import {
	createEffect,
	forward,
	createEvent,
	createStore,
	sample,
} from "effector";

import { StudentProps } from "shared/const/types";
import { API } from "shared/api/requests";

const initialState: StudentProps[] = [];

const $students = createStore(initialState);

const getStudents = createEvent<StudentProps[]>();

const getStudentsFx = createEffect(async () => API.getStudents());

forward({
	from: getStudents,
	to: getStudentsFx,
});

sample({
	clock: getStudentsFx.doneData,
	fn: clock => clock,
	target: $students,
});

const $isLoading = getStudentsFx.pending;

const $sortedStudents = createStore<StudentProps[]>([]);

sample({
	clock: $students,
	target: $sortedStudents,
});

const filterStudents = createEvent<string>();

sample({
	clock: filterStudents,
	source: $students,
	fn: (source, clock) => {
		if (clock === "all") {
			return source;
		}
		return source.filter(student => student.academyStatus === clock);
	},
	target: $sortedStudents,
});

export const StudentsModel = {
	getStudents,
	$students,
	filterStudents,
	$sortedStudents,
	$isLoading,
	getStudentsFx,
};
