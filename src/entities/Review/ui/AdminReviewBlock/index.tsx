import canceled from "shared/assets/canceled.svg";
import approved from "shared/assets/approved.svg";

import { Img, ReviewPublished } from "./styles";

interface AdminReviewBlockProps {
	editBlock?: React.ReactNode;
	status?: "onCheck" | "approved" | "declined";
}

export const AdminReviewBlock: React.FC<AdminReviewBlockProps> = ({
	status,
	editBlock,
}) => {
	if (status === "onCheck") {
		return <>{editBlock}</>;
	}

	return (
		<ReviewPublished
			className={status === "declined" ? "declined" : "approved"}
		>
			<Img src={status === "declined" ? canceled : approved} />
			Отзыв {status === "declined" ? "отклонен" : "опубликован"}
		</ReviewPublished>
	);
};
