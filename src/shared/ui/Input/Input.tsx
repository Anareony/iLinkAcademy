import React, { useState } from 'react'
import { Path, UseFormRegister } from "react-hook-form";
import { Helper, Msg, InputLabel, StyledInput, EyeBtn, Container } from './styles'
import { IFormInputs } from '../../const/types';

interface InputProps {
    id : Path<IFormInputs>;
    label?: string;
    disabled?: boolean;
    errors?: boolean;
    errorMsg?: string;
    placeholder?: string;
    type?: "text" | "password";
    defaultValue?: string;
    register: UseFormRegister<IFormInputs>,
}

export const Input: React.FC<InputProps> = ({
        id,
        type = "text",
        placeholder,
        label,
        disabled,
        errors,
        errorMsg,
        defaultValue,
        register
    }) => {

    const [isShowPassword, setIsShowPassword] = useState<boolean>(type === "password");
    const [isActive, setIsActive] = useState<boolean>(false);

    const togglePasswordVisiblity = () => {
        setIsShowPassword(!isShowPassword)
    };

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    };
 
    return (
        <Container>
            <InputLabel>
                {label}
            </InputLabel>
            <StyledInput
                {...register(id)} 
                type={isShowPassword ? "password" : "text"} 
                disabled={disabled}
                defaultValue={defaultValue}
                className={`
                    ${isActive ? "active" : "" } 
                    ${errors ? "hasError" : "" }
                `}
                placeholder={placeholder}
                onInput={onChangeValue}
            />
            {type === "password" && (
                <EyeBtn
                    type='button' 
                    className={`
                        ${!isShowPassword ? "active" : "" } 
                        ${errors ? "hasError" : "" }
                    `}
                    onClick={togglePasswordVisiblity}
                />
            )}
            {errors && errorMsg && (
                <Helper>
                    <Msg>{errorMsg}</Msg>
                </Helper>   
            )}
        </Container> 
    )
}