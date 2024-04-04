import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface WrapperProps {
	children?: React.ReactNode;
}

const WrapperStudents: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div
			style={{
				margin: "24px 0",
			}}
		>
			{children}
		</div>
	);
};

export const SkeletonStudents = () => {
	return <Skeleton count={6} height="50px" wrapper={WrapperStudents} />;
};
