import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 80px;
    }
`

const Container = styled.div`
    width: 100%;
    margin: 59px 80px 0 26px;
    @media (max-width: 768px) {
        margin: 0;
    }

`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        margin: 24px 0 0 16px;
        flex-direction: column;
        align-items: flex-start;
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 110px auto;

    @media (max-width: 768px) {
        margin: 110px auto 126px;
    }
`
const Img = styled.img`

    @media (max-width: 768px) {
        width: 240px;
    }
`
export { Img, ImgContainer, Header, Container, Wrapper }