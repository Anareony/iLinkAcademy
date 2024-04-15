import React, { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { SingleValue } from "react-select";

import { NoItems } from "shared/ui/NoItems/NoItems";
import { Pagination } from "shared/ui/Pagination/Pagination";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { SkeletonStudents } from "shared/ui/Skeleton/Students";

import { options } from "../lib/options";
import { StudentsModel } from "../model";
import { Items } from "./Items";

import { Item, Container, Wrapper, TableHeader, Header } from "./styles";

export const StudentList: React.FC = () => {
	const sortedStudents = useStore(StudentsModel.$sortedStudents);
	const isLoading = useStore(StudentsModel.$isLoading);
	const [itemOffset, setItemOffset] = useState<number>(0);
	const studentsPerPage = 6;

	useEffect(() => {
		StudentsModel.getStudents([]);
	}, []);

	const endOffset = itemOffset + studentsPerPage;
	const currentItems = sortedStudents.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(sortedStudents.length / studentsPerPage);

	const handlePageChange = (event: { selected: number }) => {
		const newOffset =
			(event.selected * studentsPerPage) % sortedStudents.length;
		setItemOffset(newOffset);
	};

	const onChangeFilter = (
		filter: SingleValue<{ value: string; label: string }>,
	) => {
		if (!filter) return;
		StudentsModel.filterStudents(filter.value);
	};

	return (
		<Container>
			<Header>
				<h3>Участники</h3>
				<Dropdown
					defaultValue={options[0]}
					options={options}
					onChange={onChangeFilter}
				/>
			</Header>
			<Wrapper>
				<TableHeader>
					<Item>ИФ Участника </Item>
					<Item>Краткая информация</Item>
					<Item>Статус</Item>
				</TableHeader>
				{isLoading ? (
					<SkeletonStudents />
				) : currentItems.length === 0 ? (
					<NoItems />
				) : (
					<Items items={currentItems} />
				)}
			</Wrapper>
			{!isLoading && currentItems.length !== 0 && (
				<Pagination
					pagesCount={pageCount}
					onChange={handlePageChange}
				/>
			)}
		</Container>
	);
};
