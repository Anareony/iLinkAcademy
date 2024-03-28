import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IFormInputs } from 'shared/const/types';
import { Button } from "shared/ui/Button/Button";

import { schema } from '../lib';
import { authModel } from '../model';

import { FormWrapper, Header, StyledInput, StyledLink, Wrapper, Form } from './styles'

export const AuthForm = () => {

    const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitted }} = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        authModel.getToken({ 
            email: data.email, 
            password: data.password 
        });
    }

    return (
        <FormWrapper>
            <Header>Войти</Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Wrapper>
                        <StyledInput
                            id="email"
                            register={register}
                            placeholder="Введите адрес эл. почты"
                            label='Электронная почта'
                            errors={!!errors.email}
                            errorMsg={errors?.email?.message}
                        />
                    </Wrapper>
                    <Wrapper primary>
                        <StyledInput password
                            id="password"
                            type="password"
                            register={register}
                            label="Пароль"
                            placeholder="Введите пароль" 
                            errors={!!errors.password}
                            errorMsg={errors?.password?.message}
                        />
                    </Wrapper>
                    <Button type='submit' disabled={isDirty && !isValid && isSubmitted }>Войти</Button>
                </Form>
            <StyledLink to='/pass'>Забыли пароль?</StyledLink>
        </FormWrapper>
    )
}

