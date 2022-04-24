import React from 'react'

import { Select } from './styles'

type IOptions = {
    value: string;
    name: string;
}

type IDropdown = {
    value?: string;
    setSelect: (value:string) => void;
    options: IOptions[];
}

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