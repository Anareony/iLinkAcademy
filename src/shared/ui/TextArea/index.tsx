import React, { useState, useEffect } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormInputs } from '../../const/types';
import { Label, StyledTextArea, LengthBlock, Container, Msg, Helper  } from "./styles";

interface TextAreaProps {
    id : Path<IFormInputs>;
    label?: string;
    name?: string;
    disabled?: boolean;
    errors?: boolean;
    errorMsg?: string;
    placeholder?: string;
    defaultValue?: string;
    maxLength?: number;
    defalutValue?: string;
    register: UseFormRegister<IFormInputs>,
}

export const TextArea: React.FC<TextAreaProps> = ({
    id, 
    label, 
    defaultValue, 
    maxLength, 
    disabled, 
    placeholder, 
    register, 
    errors, 
    errorMsg,
}) => {
    const [symbols, setSymbols] = useState(0);

    useEffect(() => {
        setSymbols(defaultValue ? defaultValue.length : 0);
    }, [defaultValue]);
    
    const onChangeSymbols = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSymbols(e.currentTarget.value.length);
    };

    return (
        <Container>
            <Label>{label}</Label>
            <StyledTextArea 
                {...register(id)}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChangeSymbols}
                maxLength={maxLength}
                defaultValue={defaultValue}
                className={`
                    ${errors ? "hasError" : "" }
                `}    
            /> 
            <LengthBlock>{symbols}/{maxLength}</LengthBlock>
            {errors && errorMsg && (
                <Helper>
                    <Msg>{errorMsg}</Msg>
                </Helper>   
            )}
        </Container>
    )
}