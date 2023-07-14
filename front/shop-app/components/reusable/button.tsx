'use client';

import HeroIcon from "../icons/heroicon";
import { twMerge } from "tailwind-merge";

interface Props {
    text?: string;
    icon?: string;
    className?: string;
    size: "sm" | "md" | "lg";
    onClickAction?: () => void; 
    type?: "submit" | "button" | "reset";
}

const Button = (props: Props) => {
    const baseClasses = "block h-10 bg-blue-600 rounded-md " + 
        "border-2 border-blue-600 hover:bg-white " +
        "group transition-all";

    const classes = twMerge("w-"+(props.size==="sm" ? "10" : 
        (props.size==="md" ? "32" : "full")), baseClasses, props.className);

    return(
        <button
            className={classes}
            onClick={props.onClickAction}
            type={props.type}
        >
            <div className="flex gap-1 justify-center">
                {props.text !== undefined &&
                    <p className="text-white group-hover:text-blue-600
                        group-hover:font-semibold">{props.text}</p>
                }
                {props.icon !== undefined &&
                    <HeroIcon icon={props.icon} className="text-white group-hover:text-blue-600"/>
                }
            </div>
        </button>
    )
}

export default Button