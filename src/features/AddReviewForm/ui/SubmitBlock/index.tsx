import { Button } from "shared/ui/Button/Button";

import info from "shared/assets/info.svg";

import { Container, Info } from "./styles";

export const SubmitBlock = () => {
	return (
		<Container>
			<Button type="submit">Отправить отзыв</Button>
			<Info>
				<img style={{ marginRight: "8px" }} src={info} alt="" />
				<span>Все отзывы проходят модерацию в течение 2 часов</span>
			</Info>
		</Container>
	);
};
