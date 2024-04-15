import React from "react";

import { Student } from "entities/Student";
import { StudentProps } from "shared/const/types";

interface ItemsProps {
	items: StudentProps[];
}

export const Items: React.FC<ItemsProps> = ({ items }) => {
	return (
		<>
			{items.map(student => (
				<Student
					key={student.id}
					profileImage={student.profileImage}
					firstName={student.firstName}
					lastName={student.lastName}
					academyStatus={student.academyStatus}
					smallAboutMe={student.smallAboutMe}
				/>
			))}
		</>
	);
};
