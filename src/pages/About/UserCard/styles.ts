import styled from 'styled-components'

const UserContainer = styled.div`
    display: flex;
    margin: 80px 80px 120px;

    @media screen and (max-width: 975px) {
        margin: 25px 0 57px 0;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const UserPhoto = styled.img`
    margin-top: 32px;
    max-width: 519px;
    max-height: 383px;
    min-height: 383px;

    @media screen and (max-width: 1171px) {
        max-width: 400px;
        margin-left: 16px
    }
    @media screen and (max-width: 975px) {
        max-width: 350px;
        margin-left: 16px
    }
    @media screen and (max-width: 768px) {
        max-width: 304px;
        margin-left: 16px;
    }
`
const UserInfo = styled.div`
    background-color: white;
    font-family: 'Gilroy';
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    max-width: 768px;
    min-width: 288px;
    max-height: 383px;
    padding: 40px;
    display: grid;
    grid-template-areas: 
        "name name date"
        "city sex age"
        "info info info"
        "pets pets pets";

    @media screen and (max-width: 1171px) {
        padding: 30px;
    }
    @media screen and (max-width: 975px) {
        padding: 20px;
        grid-template-areas: 
        "name name"
        "date date"
        "city sex"
        "age age"
        "info info"
        "pets pets";
        max-height: 100%;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 22px;
        max-width: 288px;
        padding: 16px;
        grid-template-areas: 
            "name name"
            "date date"
            "city sex"
            "age age"
            "info info"
            "pets pets";
    }
`
const UserName = styled.div`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #585CC6;
    grid-area: name;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
    }
`
const UserBirthday  = styled.div`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color:#8A8A8A;
    grid-area: date;
    text-align: end;

    @media screen and (max-width: 975px) {
        padding-top: 4px;
        text-align: start;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const UserCity = styled.div`
    grid-area: city;
`
const UserSex = styled.div`
    gap: 5px;
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-top: 2px;
    grid-area: sex;
`
const UserAge = styled.div`
    grid-area: age;
`
const UserAbout = styled.div`
    letter-spacing: 1%;
    grid-area: info;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
    }
`
const UserPets = styled.div`
    grid-area: pets;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
    }
`
export { UserContainer, UserPhoto, UserInfo, UserName, UserBirthday, UserCity, UserSex, UserAge, UserAbout, UserPets }