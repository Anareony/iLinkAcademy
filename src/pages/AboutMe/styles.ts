import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Container = styled.div`
    width: 100%;
    margin: 59px 80px 0 26px;
    @media (max-width: 768px) {
        margin: 0;
    }

    @media (max-width: 900px) {
        margin: 59px 10px 0 10px;
    }

    @media (max-width: 768px) {
        margin: 26px 16px 80px ;
    }
`