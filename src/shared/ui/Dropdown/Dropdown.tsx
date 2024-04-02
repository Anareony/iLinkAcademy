import React from "react";
import ReactSelect from "react-select";

interface DropdownProps {
	options: any;
	isDisabled?: boolean;
	defaultValue?: object;
	onChange?: any;
	ref?: any;
}

export const Dropdown: React.FC<DropdownProps> = ({
	options,
	isDisabled,
	defaultValue,
	onChange,
	ref,
}) => {
	return (
		<ReactSelect
			ref={ref}
			className="react-select-container"
			classNamePrefix="react-select"
			isSearchable={false}
			isDisabled={isDisabled}
			options={options}
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	);
};
