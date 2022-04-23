import React from 'react'
import styled from 'styled-components'

interface IOptions {
    value: string;
    name: string;
}

interface IDropdown {
    value?: string;
    setSelect: (value:string) => void;
    options: IOptions[];
}

const Select = styled.select`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    padding: 15px 12px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
    appearance: none;
`

const Dropdown: React.FC<IDropdown> = ({options,value,setSelect}) => {
    return (
        <Select
            value={value}
            onChange={e => {setSelect(e.target.value)}}
        >
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
        </Select>
    )
}

export default Dropdown