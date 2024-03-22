import styled from 'styled-components'

const Button = styled.button`
    padding: 17px 28px;
    border: none;
    border-radius: 2px;
    background: #585CC6;
    color: #fff;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.01rem;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 1300px) {
        font-size: 13px;
        padding: 8px 14px;
    }

    @media (max-width: 1100px) {
        font-size: 12px;
        padding: 6px 10px;
    }

    @media (max-width: 900px) {
        font-size: 14px;
        padding: 8px 14px;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`

const ButtonTomato = styled(Button)`
    display: flex;
    align-items: center;
    margin-left: 12px;
    background: #EB5757;
    @media (max-width: 768px) {
        margin-left: 6px;
        padding: 12px 15px;
    }
`

const ButtonWithIcon = styled(Button)`
    display: flex;
    padding: 17px;

    @media (max-width: 1300px) {
        padding: 15px;
    }

    @media (max-width: 1100px) {
        padding: 12px;
    }

    @media (max-width: 900px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        margin-left: 6px;
        padding: 12px;
    }
`
const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 24px;
    padding-bottom: 15px;

    @media (max-width: 1300px) {
        margin-left: 24px;
    }

    @media (max-width: 1100px) {
        margin-left: 14px;
    }
    
    @media (max-width: 768px) {
        margin-top: 12px;
        margin-left: 10px;
    }
`

const ReviewPublished = styled.div`
    font-family: 'Gilroy';
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.01rem;
    display: flex;
    align-items: center;
    margin-top: 17px;
    padding-bottom: 15px;

    &.declined {
        color: #EB5757;
    }

    &.approved {
        color: #61BF4A;
    }

    @media (max-width: 768px) {
        margin-top: 0;
    }
`

const ReviewCancled = styled(ReviewPublished)`
    color: #EB5757;
`

const Img = styled.img`
    margin-left: 24px;
    margin-right: 14px;

    @media (max-width:768px) {
        width: 24px;
        height: 24px;
        margin-left: 10px;
        margin-right: 6px;
    }
`
const Container = styled.div`
    width: 100%;

    @media (max-width: 1250px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        margin: 0 16px;
    }
`

const BtnsContainer = styled.div`
    display: flex;
`

export { BtnsContainer, Container, Img, ReviewCancled, ReviewPublished, Btns, ButtonWithIcon, ButtonTomato, Button }