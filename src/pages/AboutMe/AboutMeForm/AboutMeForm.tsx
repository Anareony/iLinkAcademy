import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { IStudent } from '../../../types/types'

import Button2 from '../../../components/Button2/Button2'
import ToastSucces from '../../../components/ToastSucces/ToastSucces';

import avatar from '../../../shared/assets/1.jpg'
import edit from '../assets/Edit.svg'

import { Container, Header, Grid, DropdownContainer, DropdownText, Select, Text, TextareaContainer, Textarea, Value, Img, ProfilePic, Button, FileInput, PicBtn, PicHeader, ImgEdit, Edit, FloatedBtn, StyledInput } from './styles'

const schema = yup.object().shape({
    file: yup
        .mixed()
        .test("fileSize", "Ошибка загрузки. Размер файла превышает 5Mb.", (value) => {
            return value && value[0] && value[0].size <= 5000000;
        }),
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя не должен содержать цифр")
        .required("Нужно обязательно оставить отзыв"),
    surname: yup
        .string()
        .matches(/^([^0-9]*)$/, "Фамилия не должен содержать цифр")
        .required("Нужно обязательно оставить отзыв"),
    date: yup
        .date()
        .test("date", "Wrong birthday", (value:any) => {
            const today = new Date()
            return value < today
        }),
    information: yup
        .string()
        .max(99, 'Максимальная длина отзыва - 99 символов'),
    about: yup
        .string()
        .max(300, 'Максимальная длина отзыва - 300 символов'),
})

const AboutMeForm = () => {
    const { register,handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const [succes, setSucces] = useState<boolean>(false)
    const [aboutValue, setAboutValue] = useState<string>('');
    const [informationValue, setInformationValue] = useState<string>('');

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
                    <FileInput type='file' id='fileLoader' accept=".png, .jpg, .jpeg" 
                        {...register("file", {
                            onChange: (e) => console.log(e.target.files[0].name)
                        })}
                    />
                    { !isDisabled && <Button2 type='button' onClick={() => setDisabledBtn(true)}>Редактировать</Button2>}
                </Edit>
            <Grid>
                <StyledInput 
                    {...register("name")} 
                    label='Имя'
                    disabled={!isDisabled}
                    errors={errors.name}
                    errorMsg={errors.name && errors.name.message}
                />
                <StyledInput 
                    {...register("surname")} 
                    label='Фамилия'
                    disabled={!isDisabled}
                    errors={errors.surname}
                    errorMsg={errors.surname && errors.surname.message}
                />
                <StyledInput 
                    {...register("date")} 
                    label='Дата рождения'
                    disabled={!isDisabled}
                    errors={errors.date}
                    errorMsg={errors.date && errors.date.message}
                />
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
                <Textarea small
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