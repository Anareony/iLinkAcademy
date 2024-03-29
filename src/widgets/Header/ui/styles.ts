import { Button } from 'shared/ui/Button/Button'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0 80px;

    @media screen and (max-width: 768px) {
        padding: 0 50px;
    }
    @media screen and (max-width: 425px) {
        padding: 0 16px;
    }
`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;

    @media screen and (max-width: 768px) {
        padding: 20px 0;
    }
    @media screen and (max-width: 425px) {
        padding: 20px 0;
    }
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`
const Border = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    margin-right: 20px;

    @media screen and (max-width: 768px) {
        margin-right: 8px;
    }
`
const Name = styled.span`
    font-size: 18px;
    font-family: 'Gilroy';
    font-weight: 700;
    padding-right: 5px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-top: 6px;
    }
`
const StyledButton = styled(Button)`    
    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`
const SurName = styled.span`
    font-size: 18px;
    font-family: 'Gilroy';
    font-weight: 700;
    padding-right: 5px;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 425px) {
        display: none;
    }
`
const Text = styled.span`
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const MobileIcon = styled.img`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
const LastName = styled.span`
    padding-left: 5px;
    @media (max-width: 768px) {
        display: none;
    }
`
const Img = styled.img`
    @media (max-width: 768px) {
        margin-right: 30px;
        width: 60px;
    }
`

export { Container, Nav, UserInfo, Border, Name, SurName, StyledButton, Text, MobileIcon, LastName, Img }