import styled, { keyframes } from "styled-components";

const white = keyframes`
    0%, 87.5% {
        transform: translate(0, 0)
    }

    12.5%, 25% {
        transform: translate(25px, 0)
    }

    37.5%, 50% {
        transform: translate(25px, 25px)
    }

    62.5%, 75% {
        transform: translate(0, 25px)
    }
`;

const lightllue = keyframes`
    0%, 87.5% {
        transform: translate(0, 0)
    }

    12.5%, 25% {
        transform: translate(0, 25px)
    }

    37.5%, 50% {
        transform: translate(-25px, 25px);
    }

    62.5%, 75%  {
        transform: translate(-25px, 0px);
    }
`;
const blue = keyframes`
    0%, 87.5% {
        transform: translate(0, 0)
    }

    12.5%, 25% {
        transform: translate(0, -25px)
    }

    37.5%, 50% {
        transform: translate(25px, -25px)
    }
    
    62.5%, 75% {
        transform: translate(25px, 0px)
    }
`;
const White = styled.div`
	width: 20px;
	height: 20px;
	background: #e0e0e0;
	border-radius: 2px;

	animation: ${white} 3s cubic-bezier(0.5, 0, 0, 1) 0.3s infinite;
`;

const LightBlue = styled.div`
	width: 20px;
	height: 20px;
	background: #797ddf;
	margin-left: 5px;
	margin-bottom: 5px;
	border-radius: 2px;
	animation: ${lightllue} 3s cubic-bezier(0.5, 0, 0, 1) 0.1s infinite;
`;
const Blue = styled.div`
	width: 20px;
	height: 20px;
	background: #585cc6;
	border-radius: 2px;
	animation: ${blue} 3s cubic-bezier(0.5, 0, 0, 1) 0.6s infinite;
`;
const Top = styled.div`
	display: flex;
`;
export { White, LightBlue, Blue, Top };
