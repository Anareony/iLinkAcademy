import styled from 'styled-components'

const Footer = styled.footer`

`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 80px 20px 80px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 12px 23px 16px 24px;
    }
`
const Text = styled.div`
    font-size: 16px;
    font-family: 'Gilroy';
    font-weight: normal;
    color: #8A8A8A;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        color: #333333;
    }
`
const SocialList = styled.ul`
    list-style: none;
    display: flex;
`
const SocialItem = styled.li`
    &:nth-child(2) {
        padding-left: 16px;
        padding-right: 16px;
    }
`
const SocialLink = styled.a`

`
export { Footer, Container, Text, SocialList, SocialItem, SocialLink }