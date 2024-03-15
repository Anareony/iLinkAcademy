import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    background-color:rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    width: 100%;
    height: 100%;
    z-index: 500;
    &.active {
        display: block;
    }
`
export const Container = styled.div`
    max-width: 676px;
    margin: 30px auto;
    max-height: 443;
    padding: 24px;
    background: white;
    @media screen and (max-width: 768px) {
        margin: 10px auto;
        padding: 15px 24px;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
    }
`
export const Button = styled.button`
    border: none;
    cursor: pointer;
    height: 24px;
`