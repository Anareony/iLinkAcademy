import { HeaderAdmin } from "widgets/HeaderAdmin/ui";
import { AboutUserForm } from "features/AboutUserForm/ui";
import { AdminTemplate } from "shared/ui/AdminTemplate";
import { AdminNavBar } from "shared/ui/AdminNavBar";
import { Footer } from "shared/ui/Footer/Footer";
import { Toast } from "entities/Toast";

export const AboutUserPage = () => {
	return (
		<>
			<AdminTemplate
				header={<HeaderAdmin />}
				nav={<AdminNavBar />}
				main={<AboutUserForm />}
				footer={<Footer />}
			/>
			<Toast />
		</>
	);
};
