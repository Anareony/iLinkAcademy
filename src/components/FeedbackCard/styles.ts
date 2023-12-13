import styled from 'styled-components'

const Feedback = styled.div`

`
const Container = styled.div`
    padding: 24px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`
const Avatar = styled.img`
    display: block;
    width: 52px;
    height: 52px;
`
const Icon = styled.div`
    display: flex;
    padding: 13px 13px;
`
const Camera = styled.img`
    display: block;
    width: 26px;
    height: 26px;
`
const FeedbackDate = styled.div`
    align-self: flex-start;
    text-align: right;
    font-family: 'Factor A';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`
const Body = styled.div`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    min-height: 155px;
`
export { Feedback, Container, Header, UserInfo, Avatar, Icon, Camera, FeedbackDate, Body   }