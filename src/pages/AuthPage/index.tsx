import { Toast } from "entities/Toast";
import { AuthForm } from "features/AuthForm";
import { AuthTemplate } from "shared/ui/AuthTemplate";
import { Footer } from "shared/ui/Footer/Footer";

export const AuthorizationPage = () => {
	return (
		<>
			<AuthTemplate main={<AuthForm />} footer={<Footer />} />
			<Toast />
		</>
	);
};
