import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px dashed #E0E0E0;
    &:last-child{
        border-bottom: none;
    }
    @media (max-width: 768px) {
        padding: 19px 38px 19px 16px;;
        min-width: 600px;
    }

`
const Name = styled.div`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 14px;
    line-height: 17.33px;
`
const Information = styled.div`
    flex: 1;
    overflow-wrap: break-word;
    inline-size: 150px;
    @media (max-width: 768px) {
        max-width: 200px;
        overflow-wrap: break-word;
    }
`
const Status = styled.div`
    font-weight: 600;
    color: #8A8A8A;
    &.studies {
        color: #61BF4A;
    }
    &.expelled {
        color: #EB5757;
    }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
`

export { Status, Information, Name, Container, Header }