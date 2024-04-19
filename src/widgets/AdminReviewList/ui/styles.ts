import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(288px, 1fr));
	gap: 24px;

	@media (max-width: 900px) {
		grid-template-columns: minmax(288px, 1fr);
		justify-content: center;
		gap: 20px;
	}
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: baseline;
	}
`;
export { Wrapper, Header };
