import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Img = styled.img`
	transform: rotate(180deg);
`;

const MyPagination = styled(ReactPaginate).attrs({
	activeClassName: "active",
})`
	display: flex;
	justify-content: center;
	font-family: "Gilroy";
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	margin-top: 10px;

	li a {
		padding: 7px 10px;
		border-radius: 4px;
		border: 1px solid #e0e0e0;
		cursor: pointer;
		margin-right: 8px;
		display: inline-block;
		line-height: 1;
	}

	li.active a {
		border: 1px solid #585cc6;
		color: #585cc6;
	}

	li.next {
		display: block;
	}
`;

export { Img, MyPagination };
