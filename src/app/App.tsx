import { Route, Routes, Navigate } from "react-router-dom";

import { PrivateRoute } from "shared/ui/PrivateRoute";
import { AuthorizationPage } from "pages/AuthPage";
import { PasswordRecoveryPage } from "pages/PasswordRecoveryPage";
import { MainPage } from "pages/MainPage";
import { StudentsPage } from "pages/StudentsPage";
import { ReviewsPage } from "pages/ReviewsPage";
import { AboutUserPage } from "pages/AboutUserPage";

import "./app.css";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/login" element={<AuthorizationPage />} />
			<Route path="/password-reset" element={<PasswordRecoveryPage />} />
			<Route element={<PrivateRoute />}>
				<Route path="/main" element={<MainPage />} />
				<Route path="/students" element={<StudentsPage />} />
				<Route path="/feedbacks" element={<ReviewsPage />} />
				<Route path="/about" element={<AboutUserPage />} />
				<Route path="*" element={<Navigate to="/main" replace />} />
			</Route>
		</Routes>
	);
};

export default App;
