import React, { useState } from 'react'
import styled from 'styled-components'

import { IStudent } from '../../types/types'

import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'

const Wrapper = styled.div`
    display: flex;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    margin-top: 59px;
    margin: 59px 80px 0 26px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 32px 24px;
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

const AboutMe: React.FC = () => {
    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
    }

    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar whoIsActive={'aboutme'}/>
                <Container>
                    <Header>
                        <h3>Обо мне</h3>
                    </Header>
                    <Grid>
                        <InputContainer>Имя
                            <Input/>
                        </InputContainer>
                        <InputContainer>Фамилия
                            <Input/>
                        </InputContainer>
                        <InputContainer>Дата рождения
                            <Input/>
                        </InputContainer>
                        <DropdownContainer>
                            <DropdownText>Город</DropdownText>
                            <Select>
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
                            <Select>
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
                            <Select>
                                <option value='Есть'>
                                    Есть
                                </option>
                                <option value='Нету'>
                                    Нету
                                </option>
                            </Select>                      
                        </DropdownContainer>
                    </Grid>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default AboutMe