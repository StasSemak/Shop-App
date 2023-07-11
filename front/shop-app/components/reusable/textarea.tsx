'use client';

import { ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    name: string;
    onChangeAction: ChangeEventHandler<HTMLTextAreaElement>;
    value?: string;
    className?: string;
    placeholder?: string;
}

const TextArea = (props: Props) => {
    const baseClasses = "block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 " +
        "ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 " +
        "focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none";
    const classes = twMerge(baseClasses, props.className);

    return(
        <textarea
            name={props.name}
            onChange={props.onChangeAction}
            value={props.value}
            className={classes}
            placeholder={props.placeholder}
        />
    )
}

export default TextArea;