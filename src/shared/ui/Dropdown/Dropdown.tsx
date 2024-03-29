import React from 'react'
import ReactSelect from 'react-select'
import "./styles.css"

interface DropdownProps {
    options: any;
    isDisabled?: boolean;
    defaultValue?: any;
    onChange?: any;
}

export const Dropdown: React.FC<DropdownProps> = ({options, isDisabled, defaultValue, onChange}) => {
    return (
        <ReactSelect
            className="react-select-container"
            classNamePrefix="react-select"
            isSearchable={false}
            isDisabled={isDisabled}
            options={options}
            defaultValue={defaultValue}
            onChange={onChange}
        />
    )
}
