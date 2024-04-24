import { ReviewProps } from "shared/const/types";
import { ReviewsModel } from "entities/Review";
import { updateStatusReview } from "../model";

import { ReactComponent as Edit } from "shared/assets/Edit.svg";

import {
	BtnsContainer,
	Btns,
	ButtonWithIcon,
	ButtonTomato,
	Button,
} from "./styles";

interface AdminReviewButtonProps {
	review: ReviewProps;
	editFunc: () => void;
}

export const AdminReviewButton: React.FC<AdminReviewButtonProps> = ({
	review,
	editFunc,
}) => {
	const handleReviewApproveClick = () => {
		updateStatusReview({ id: review.id!, status: "approved" });
	};

	const handleReviewRejectClick = () => {
		updateStatusReview({ id: review.id!, status: "declined" });
	};

	const edit = () => {
		ReviewsModel.setEditReview(review);
		editFunc();
	};

	return (
		<Btns>
			<BtnsContainer>
				<Button onClick={handleReviewApproveClick}>Опубликовать</Button>
				<ButtonTomato onClick={handleReviewRejectClick}>
					Отклонить
				</ButtonTomato>
			</BtnsContainer>
			<ButtonWithIcon onClick={edit}>
				<Edit />
			</ButtonWithIcon>
		</Btns>
	);
};
