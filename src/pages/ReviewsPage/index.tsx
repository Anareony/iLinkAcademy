import { EditReviewForm } from "features/EditReviewForm";
import { HeaderAdmin } from "widgets/HeaderAdmin";
import { AdminReviewList } from "widgets/AdminReviewList";
import { AdminTemplate } from "shared/ui/AdminTemplate";
import { AdminNavBar } from "shared/ui/AdminNavBar";
import { Footer } from "shared/ui/Footer/Footer";
import { Toast } from "entities/Toast";

export const ReviewsPage = () => {
	return (
		<>
			<AdminTemplate
				header={<HeaderAdmin />}
				nav={<AdminNavBar />}
				main={<AdminReviewList />}
				footer={<Footer />}
			/>
			<EditReviewForm />
			<Toast />
		</>
	);
};
