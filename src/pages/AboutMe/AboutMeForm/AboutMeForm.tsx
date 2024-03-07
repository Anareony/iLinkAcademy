import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import Button2 from '../../../components/Button/Button'
import ToastSucces from '../../../components/ToastSucces/ToastSucces';

import avatar from '../../../shared/assets/1.jpg'
import edit from '../assets/Edit.svg'

import { Error, ImgHoverContainer, ImgHover, Container, Header, Grid, DropdownContainer, DropdownText, Select, Text, TextareaContainer, Textarea, Value, Img, ProfilePic, Button, FileInput, PicBtn, PicHeader, ImgEdit, Edit, FloatedBtn, StyledInput } from './styles'
import { useStore } from 'effector-react';
import { userStore } from '../../../store/store';

const schema = yup.object().shape({
    file: yup
        .mixed()
        .notRequired()
        .test("fileSize", "Ошибка загрузки. Размер файла превышает 5Mb.", (value) => {
            return value && value[0] && value[0].size <= 5000000;
        }),
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя не должен содержать цифр")
        .required("Нужно обязательно указать имя"),
    surname: yup
        .string()
        .matches(/^([^0-9]*)$/, "Фамилия не должен содержать цифр")
        .required("Нужно обязательно указать фамилию"),
    date: yup
        .date()
        .notRequired()
        .test("date", "Wrong birthday", (value:any) => {
            if(!!value) {
                const today = new Date()
                return value < today
            }
            return true;
        }),
    information: yup
        .string()
        .max(99, 'Максимальная длина отзыва - 99 символов'),
    about: yup
        .string()
        .max(300, 'Максимальная длина отзыва - 300 символов'),
})

const AboutMeForm: React.FC = () => {
    const { register,handleSubmit, formState: { errors }} = useForm({
        mode: 'onChange',
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
    useEffect(()=>{
        userStore.getUserInfo()
    },[])
    const userInfo = useStore(userStore.$userInfo)
    const fileLoader = () => {
        const input = document.querySelector('#fileLoader');
        // @ts-ignore
        input.click()
    }

    const updateProfile = async (profileImage: FormData): Promise<any> => {
        const url = `https://academtest.ilink.dev/user/updatePhoto`;
        const key:any = localStorage.getItem('auth')
        const localTokenObj = JSON.parse(key);
        const request = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localTokenObj.accessToken,
            },
            body: profileImage,
        });
        const response = await request.json();
        return response;
    }

    return (
        <Container onSubmit={onSubmit}>
            <Header>
                <h3>Обо мне</h3>
            </Header>
                <Edit>
                    <ProfilePic>
                        <Img onClick={fileLoader} src={`https://academtest.ilink.dev/images/${userInfo.profileImage}`} alt='avatar'/>
                        <ImgHoverContainer>
                            <ImgHover src={`https://academtest.ilink.dev/images/${userInfo.profileImage}`} alt='avatar'/>
                        </ImgHoverContainer>
                        <PicBtn>
                            <PicHeader>Фото профиля</PicHeader>
                            <Button type='button' onClick={fileLoader}><ImgEdit src={edit} alt='edit'/>Изменить фото</Button>
                        </PicBtn>
                    </ProfilePic>
                    <FileInput type='file' id='fileLoader' accept=".png, .jpg, .jpeg" 
                        {...register("file", {
                            onChange: (e) => {
                                const formData = new FormData();
                                formData.set("profileImage", e.target?.files?.[0]);
                                console.log(e.target.files[0])
                                console.log(formData)
                                updateProfile(formData)
                            }
                        })}
                    />
                    { !isDisabled && <Button2 onClick={() => setDisabledBtn(true)}>Редактировать</Button2>}
                </Edit>
            <Grid>
                {/* <StyledInput 
                    {...register("name")} 
                    label='Имя'
                    inputValue={userInfo.firstName}
                    disabled={!isDisabled}
                    errors={errors.name}
                    errorMsg={errors.name && errors.name.message}
                />
                <StyledInput 
                    {...register("surname")} 
                    label='Фамилия'
                    inputValue={userInfo.lastName}
                    disabled={!isDisabled}
                    errors={errors.surname}
                    errorMsg={errors.surname && errors.surname.message}
                />
                <StyledInput 
                    {...register("date")} 
                    label='Дата рождения'
                    inputValue={new Date(userInfo.birthDate).toLocaleDateString()}
                    disabled={!isDisabled}
                    errors={errors.date}
                    errorMsg={errors.date && errors.date.message}
                /> */}
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
                        <option value='Нет'>
                            Нет
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
                    value={userInfo.aboutMe}
                    onChange={(e) => {
                        setAboutValue(e.target.value)
                    }}    
                > 
                </Textarea>
                { isDisabled && <Value>{aboutValue.length}/300</Value>}
            </TextareaContainer>
            { isDisabled && <FloatedBtn type={'submit'}>Сохранить изменения</FloatedBtn>}
            <ToastSucces 
                title="Сохранено"
                body="Данные успешно отредактированы!"
                show={succes} 
                setShow={setSucces}
            ></ToastSucces>
            {errors.file && <Error>{errors.file.message}</Error>}
        </Container>
    )
}

export default AboutMeForm