import styled from 'styled-components'

const Headers = styled.div`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 12px;
    line-height: 14.86px;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 14px 81px 15px 16px;
    @media (max-width: 768px) {
        min-width: 600px;
    }

`

const Wrapper = styled.div`
    margin-top: 39px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        overflow-x: scroll;
        width: 100%;
        margin-top: 20px;
        &::-webkit-scrollbar { 
            display: none;
        }
    }
`

const Container = styled.div`
    @media (max-width: 768px) {
        width: auto;
    }
`

const Item = styled.div`
    &:first-child {
        width: 21.9%;
        @media (max-width: 768px) {
            width: 43.5%;
        }
    }
    &:nth-child(2) {
        flex: 1;
    }
`

export { Item, Container, Wrapper, Headers }