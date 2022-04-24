import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax( 288px, 520px) minmax( 288px, 520px);
    gap: 24px;

    @media (max-width: 900px) {
        grid-template-columns: minmax( 288px, 520px);
        justify-content: center;
        gap: 20px;
    }
`

export { Wrapper }