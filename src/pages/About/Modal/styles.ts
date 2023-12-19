import styled from 'styled-components'

const Container = styled.div`
    max-width: 676px;
    margin: 150px auto;
    max-height: 443;
`
const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: white;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
const Feedback = styled.div`
    position: relative;
    margin-top: 32px;
`
const Error = styled.div`
    margin-top: 12px;
    color: #EB5757;
`

export { Container, ModalForm, Header, Feedback, Error}