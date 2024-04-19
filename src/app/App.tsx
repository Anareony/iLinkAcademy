import { useStore } from "effector-react";
import { Route, Routes, Navigate } from "react-router-dom";

import { authModel } from "features/AuthForm";

import { AuthorizationPage } from "pages/AuthPage";
import { PasswordRecoveryPage } from "pages/PasswordRecoveryPage";
import { MainPage } from "pages/MainPage";
import { StudentsPage } from "pages/StudentsPage";
import { ReviewsPage } from "pages/ReviewsPage";
import { AboutUserPage } from "pages/AboutUserPage";

import "./app.css";

const App: React.FC = () => {
	const isAuth = useStore(authModel.$isAuth);

	if (isAuth) {
		return (
			<Routes>
				<Route path="/main" element={<MainPage />} />
				<Route path="/students" element={<StudentsPage />} />
				<Route path="/feedbacks" element={<ReviewsPage />} />
				<Route path="/about" element={<AboutUserPage />} />
				<Route path="*" element={<Navigate to="/main" />} />
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/auth" element={<AuthorizationPage />} />
			<Route path="/pass" element={<PasswordRecoveryPage />} />
			<Route path="*" element={<Navigate to="/auth" />} />
		</Routes>
	);
};

export default App;
