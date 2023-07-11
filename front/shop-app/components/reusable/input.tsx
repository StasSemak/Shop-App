'use client';

import { ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    type: "text" | "number" | "password" | "email";
    name: string;
    onChangeAction: ChangeEventHandler<HTMLInputElement>;
    value?: string | number;
    placeholder?: string;
    className?: string;
};

const Input = (props: Props) => {
    const baseClasses = "block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 " +
        "ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 " +
        "focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none";
    const classes = twMerge(baseClasses, props.className);

    return(
        <input
            type={props.type}
            onChange={props.onChangeAction}
            name={props.name}
            value={props.value}
            className={classes}
            placeholder={props.placeholder}
        />
    )
}

export default Input