import React, { useState } from 'react'

import { Helper, Msg, InputLabel, StyledInput, EyeBtn } from './styles'

type InputProps = {
    id?: string;
    label?: string;
    name?: string;
    disabled?: boolean;
    isPassword?: boolean;
    errors?: boolean;
    errorMsg?: string;
    inputValue?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    const [passwordShown, setPasswordShown] = useState<boolean>(true);
    const [isActive, setActive] = useState<boolean>(false);

    const togglePasswordVisiblity = () => {
        setActive(!isActive)
        setPasswordShown(passwordShown ? false : true);
    };

    const rootClasses: string[] = []
    const rootClassesInput: string[] = []

    if(isActive) {
        rootClasses.push('active')
    }

    if(props.errors) {
        rootClasses.push('hasError')
        rootClassesInput.push('hasError')
    }   

    if(props.inputValue) {
        rootClasses.push('activeInput')
        rootClassesInput.push('active')
    }

    return (
        <div>
            <InputLabel>{props.label}
                <StyledInput 
                    ref={ref} 
                    {...props} 
                    value={props.inputValue}
                    type={props.isPassword && passwordShown ? "password" : "text"} 
                    className={rootClassesInput.join(' ')}
                />
                    {props.isPassword && <EyeBtn
                                            type='button' 
                                            className={rootClasses.join(' ')}
                                            onClick={togglePasswordVisiblity}
                                        />
                    }
                    {props.errors &&    <Helper>
                                            <Msg>{props.errorMsg}</Msg>
                                        </Helper>
                    }
            </InputLabel>
        </div> 
    )
})

export default Input