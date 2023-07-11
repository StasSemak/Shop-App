'use client';

import { ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface DefaultOption {
    text: string;
    disabled?: boolean;
}

const Select = ({children, name, onChangeAction, className, defaultValue, defaultOption}:
    {
        children:JSX.Element[], 
        name?:string, 
        onChangeAction:ChangeEventHandler<HTMLSelectElement>,
        className?: string,
        defaultValue?: number,
        defaultOption?: DefaultOption
    }) => {
    const baseClasses = "block w-full rounded-md border-0 py-2 px-2.5 shadow-sm ring-1 " +
        "ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 " + 
        "focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none";
    const classes = twMerge(baseClasses, className);

    return(
        <select
            name={name}
            defaultValue={defaultValue}
            className={classes}
            onChange={onChangeAction}
        >
            {defaultOption !== undefined && 
                <option 
                    value={0} 
                    disabled={defaultOption.disabled}
                    hidden={defaultOption.disabled}
                >
                    {defaultOption.text}
                </option>
            }
            {children}
        </select>
    )
}

export default Select;