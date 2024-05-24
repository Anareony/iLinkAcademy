import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
	const isAuth = localStorage.getItem("accessToken");

	if (!isAuth) return <Navigate to="/login" />;
	return <Outlet />;
};
