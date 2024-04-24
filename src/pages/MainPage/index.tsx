import { useEffect } from "react";
import { useStore } from "effector-react";

import { UserCard, UserModel } from "entities/User";
import { ReviewsModel } from "entities/Review";
import { Toast } from "entities/Toast";
import { AddReviewForm } from "features/AddReviewForm";
import { ReviewList } from "widgets/ReviewList";
import { Header } from "widgets/Header";
import { Footer } from "shared/ui/Footer/Footer";
import { SkeletonUserCard } from "shared/ui/Skeleton/UserCard";
import { Content, Main, MainText, Wrapper } from "./styles";

export const MainPage = () => {
	useEffect(() => {
		UserModel.getUser();
		ReviewsModel.getReviews([]);
	}, []);

	const isLoading = useStore(UserModel.$isLoading);

	return (
		<div>
			<Wrapper>
				<Header />
				<Main>
					<Content>
						<MainText>
							Добро пожаловать
							<br />в академию!
						</MainText>
						{isLoading ? <SkeletonUserCard /> : <UserCard />}
						<ReviewList />
					</Content>
				</Main>
				<Footer />
			</Wrapper>
			<AddReviewForm />
			<Toast />
		</div>
	);
};
