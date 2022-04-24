import React, { useState } from 'react'

import { useForm } from "react-hook-form";
import styled from 'styled-components'
import avatar from '../../../shared/assets/1.jpg'
import edit from '../Edit.svg'
import { IStudent } from '../../../types/types'
import Input from '../../../components/Input/Input'
import Button2 from '../../../components/Button2/Button2'
import ToastSucces from '../../../components/ToastSucces/ToastSucces';



import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'


const Container = styled.form`
    width: 100%;

    @media (max-width: 768px) {
        margin: 0;
        margin-bottom: 80px;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 32px 24px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

const InputContainer = styled.label`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.0124rem;
    margin-bottom: 4px;
`

const DropdownContainer = styled.div`
    width: 100%
`

const DropdownText = styled.div`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.0124rem;
`

const Select = styled.select`
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
const Text = styled.div`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.0124rem;
    margin-bottom: 12px;
`
const TextareaContainer = styled.div`
    margin-top: 32px;
    position: relative;
`
const Textarea = styled.textarea`
    outline: none;
    border: 1px solid rgba(224, 224, 224, 1);
    padding: 12px 12px 0 12px;
    min-height: 105px;
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
        min-height: 222px;
    }
`
const Value = styled.div`
    font-family: 'Gilroy';
    font-size: 10px;
    line-height: 14px;
    position: absolute;
    bottom: 10px;
    right: 5px;
`

const Img = styled.img`
    width: 64px;
    height: 64px;
`

const ProfilePic = styled.div`
    display: flex;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`

const Button = styled.button`
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

const FileInput = styled.input`
    display: none;
`

const PicBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
`

const PicHeader = styled.div`
    font-family: 'Gilroy';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #8A8A8A;
    letter-spacing: -0.0124rem;
`

const ImgEdit = styled.img`
    margin-right: 10px;
`

const Edit = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const FloatedBtn = styled(Button2)`
    float: right;
    margin-top: 40px;
`
const StyledInput = styled(Input)`
    color: #333333;
    &:disabled{
        color:#8A8A8A;
    }
`

const schema = yup.object().shape({
    file: yup
        .string()
        .max(200, 'Максимальная длина отзыва - 200 символов')
        .required("Нужно обязательно оставить отзыв"),
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя и фамилия не должны содержать цифр")
        .required("Нужно обязательно оставить отзыв"),
    surname: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя и фамилия не должны содержать цифр")
        .required("Нужно обязательно оставить отзыв"),
    date: yup
        .string()
        .max(200, 'Максимальная длина отзыва - 200 символов'),
    information: yup
        .string()
        .max(99, 'Максимальная длина отзыва - 200 символов'),
    about: yup
        .string()
        .max(300, 'Максимальная длина отзыва - 200 символов'),
})

const AboutMeForm = () => {
    const { register,handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const [succes, setSucces] = useState(false)
    const [aboutValue, setAboutValue] = useState('');
    const [informationValue, setInformationValue] = useState('');

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setDisabledBtn(false)
        setSucces(true)
    });

    const [isDisabled, setDisabledBtn] = useState<boolean>(false)

    const fileLoader = () => {
        const input = document.querySelector('#fileLoader');
        // @ts-ignore
        input.click()
    }

    return (
        <Container onSubmit={onSubmit}>
            <Header>
                <h3>Обо мне</h3>
            </Header>
                <Edit>
                    <ProfilePic>
                        <Img src={avatar} alt='avatar'/>
                        <PicBtn>
                            <PicHeader>Фото профиля</PicHeader>
                            <Button type='button' onClick={fileLoader}><ImgEdit src={edit} alt='edit'/>Изменить фото</Button>
                        </PicBtn>
                    </ProfilePic>
                    <FileInput type='file' id='fileLoader' {...register("file", {
                        onChange: (e) => console.log(e.target.files[0].name)
                    })}/>
                    { !isDisabled && <Button2 type='button' onClick={() => setDisabledBtn(true)}>Редактировать</Button2>}
                </Edit>
            <Grid>
                <InputContainer>Имя
                    <StyledInput disabled={!isDisabled} {...register("name")} />
                </InputContainer>
                <InputContainer>Фамилия
                    <StyledInput disabled={!isDisabled}{...register("surname")} />
                </InputContainer>
                <InputContainer>Дата рождения
                    <StyledInput disabled={!isDisabled} {...register("date")}/>
                </InputContainer>
                <DropdownContainer>
                    <DropdownText>Город</DropdownText>
                    <Select disabled={!isDisabled} {...register("city")}>
                        <option value='Томск'>
                            Томск
                        </option>
                        <option value='Кемерово'>
                            Кемерово
                        </option>
                        <option value='Москва'>
                            Москва
                        </option>
                    </Select>   
                </DropdownContainer>
                <DropdownContainer>
                <DropdownText>Пол</DropdownText>
                    <Select disabled={!isDisabled} {...register("sex")}>
                        <option value='Мужчина'>
                            Мужчина
                        </option>
                        <option value='Женщина'>
                            Женщина
                        </option>
                    </Select>   
                </DropdownContainer>
                <DropdownContainer>
                    <DropdownText>Животное</DropdownText>
                    <Select disabled={!isDisabled} {...register("pet")}>
                        <option value='Нету'>
                            Нету
                        </option>
                        <option value='Есть'>
                            Есть
                        </option>
                    </Select>                      
                </DropdownContainer>
            </Grid>
            <TextareaContainer>
                <Text>Краткая информация</Text>
                <Textarea
                    disabled={!isDisabled} {...register("information")}
                    placeholder="Напишите краткую информацию о себе..."
                    value={informationValue}
                    onChange={(e) => {
                        setInformationValue(e.target.value)
                    }}    
                > 
                </Textarea>
                { isDisabled && <Value>{informationValue.length}/99</Value>}
            </TextareaContainer>
            <TextareaContainer>
                <Text>О себе</Text>
                <Textarea
                    disabled={!isDisabled} {...register("about")}
                    placeholder="Напишите пару слов о себе..."
                    value={aboutValue}
                    onChange={(e) => {
                        setAboutValue(e.target.value)
                    }}    
                > 
                </Textarea>
                { isDisabled && <Value>{aboutValue.length}/300</Value>}
            </TextareaContainer>
            { isDisabled && <FloatedBtn type='submit'>Сохранить изменения</FloatedBtn>}
            <ToastSucces 
                title="Сохранено"
                body="Данные успешно отредактированы!"
                show={succes} 
                setShow={setSucces}
            ></ToastSucces>  
        </Container>
    )
}

export default AboutMeForm