import React from "react";

import fileIcon from "shared/assets/fileIcon.svg";
import deleteIcon from "shared/assets/Delete.svg";

import { Container, DeleteBtn, FileName } from "./styles";

interface FileBarProps {
	deleteFile: () => void;
	file: string;
}

export const FileBar: React.FC<FileBarProps> = ({ file, deleteFile }) => {
	return (
		<Container>
			<img src={fileIcon} alt="fileicon" />
			<FileName>{file}</FileName>
			<DeleteBtn onClick={deleteFile} type="button">
				<img src={deleteIcon} alt="deleteIcon" />
			</DeleteBtn>
		</Container>
	);
};
