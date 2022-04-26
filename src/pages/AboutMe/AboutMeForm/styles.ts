import styled from 'styled-components'
import Input from '../../../components/Input/Input'
import Button2 from '../../../components/Button2/Button2'

export const Container = styled.form`
    width: 100%;

    @media (max-width: 768px) {
        margin: 0;
        margin-bottom: 24px;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 32px 24px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export const DropdownContainer = styled.div`
    width: 100%
`

export const DropdownText = styled.div`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.0124rem;
`

export const Select = styled.select`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    padding: 15px 12px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
    appearance: none;
    width: 100%;
`
export const Text = styled.div`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.0124rem;
    margin-bottom: 12px;
`
export const TextareaContainer = styled.div`
    margin-top: 32px;
    position: relative;
`
export const Textarea = styled.textarea<{small?:boolean}>`
    outline: none;
    border: 1px solid rgba(224, 224, 224, 1);
    padding: 12px 12px 0 12px;
    min-height: ${props => props.small ? "52px" : "105px"};
    resize: none;
    width: 100%;
    font-family: "Gilroy";
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    &:disabled {
        color: #8A8A8A;
    }
    @media (max-width: 768px) {
        min-height: ${props => props.small ? "74px" : "222px"};
    }
`
export const Value = styled.div`
    font-family: 'Gilroy';
    font-size: 10px;
    line-height: 14px;
    position: absolute;
    bottom: 10px;
    right: 5px;
`
export const ImgHover = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 2px;
    margin: 12px;
`

export const ImgHoverContainer = styled.div`
    display: none;
    position: absolute;
    top: 80px;
    left: -65px;
    z-index: 1000;
    background: #fff;
`

export const Img = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 2px;
    cursor: pointer;
    &:hover + ${ImgHoverContainer} {
        display: block;
    }
`

export const ProfilePic = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`

export const Button = styled.button`
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.01rem;
    color: #585CC6;
    border: none;
    cursor: pointer;
    margin-top: 12px;
    display: flex;
    align-items: center;
`

export const FileInput = styled.input`
    display: none;
`

export const PicBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
`

export const PicHeader = styled.div`
    font-family: 'Gilroy';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #8A8A8A;
    letter-spacing: -0.0124rem;
`

export const ImgEdit = styled.img`
    margin-right: 10px;
`

export const Edit = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FloatedBtn = styled(Button2)`
    float: right;
    margin-top: 40px;
    @media (max-width: 768px) {
        width: 100%
    }
`
export const StyledInput = styled(Input)`
    color: #333333;
    &:disabled{
        color:#8A8A8A;
    }
`

export const Error = styled.div`
    width: 100%;
    min-height: 62px;
    background-color: #EB5757;
    display: flex;
    padding: 20px 0;
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 93.5%;
    bottom: 50%;
    right: 0%;    
    &.active {
        display: flex;
    }
    @media (max-width: 900px){
        top: 95%;
        bottom: 50%;
    }
    @media (max-width: 430px){
        top: 95%;
        bottom: 50%;
    }
`
