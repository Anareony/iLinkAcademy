import React, { useState } from 'react'
import { Path, UseFormRegister } from "react-hook-form";
import { Helper, Msg, InputLabel, StyledInput, EyeBtn } from './styles'
import { IFormInputs } from '../../shared/const/types';

interface InputProps {
    id : Path<IFormInputs>;
    label?: string;
    name?: string;
    disabled?: boolean;
    errors?: boolean;
    errorMsg?: string;
    placeholder?: string;
    type?: "text" | "password";
    register: UseFormRegister<IFormInputs>
}

const Input: React.FC<InputProps> = ({
        id,
        name,
        type = "text",
        placeholder,
        label,
        disabled,
        errors,
        errorMsg,
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
        <div style={{position:'relative'}}>
            <InputLabel>
                {label}
            </InputLabel>
            <StyledInput
                {...register(id)} 
                type={isShowPassword ? "password" : "text"} 
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
                {errors &&    <Helper>
                                        <Msg>{errorMsg}</Msg>
                                    </Helper>
                }
            
        </div> 
    )
}

export default Input