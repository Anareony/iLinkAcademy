import { Toast } from "entities/Toast";
import { FormPasswordRecovery } from "features/PasswordRecoveryForm";
import { AuthTemplate } from "shared/ui/AuthTemplate";
import { Footer } from "shared/ui/Footer/Footer";

export const PasswordRecoveryPage = () => {
	return (
		<>
			<AuthTemplate main={<FormPasswordRecovery />} footer={<Footer />} />
			<Toast />
		</>
	);
};
