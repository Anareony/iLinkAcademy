import styled from 'styled-components'

import background2 from '../../shared/assets/background2.svg'

const Main = styled.main`
    padding: 40px 406px 452px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #585CC6;
    background-image: url(${background2});
    background-repeat: no-repeat;
    background-position: center 150%;
    background-size: 100%;

    @media (max-width: 1200px) {
        background-size: 250%;
        background-position: 50% -50%;
    }
    @media (max-width: 900px) {
        padding: 30px 50px 300px;
        background-size: 250%;
        background-position: 50% -50%;
    }
    @media (max-width: 430px) {
        padding: 20px 16px 200px;
        background-size: 400%;
        background-position: center -430%;
    }
`

export { Main }