'use client';

import HeroIcon from "../icons/heroicon";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    size: "sm" | "md" | "lg";
    text?: string;
    icon?: string;
    type?: "submit" | "button" | "reset";
}

const Button = ({size, text, icon, className, type, ...props} : ButtonProps) => {
    const baseClasses = "block h-10 bg-blue-600 rounded-md " + 
        "border-2 border-blue-600 hover:bg-white " +
        "group transition-all";

    const classes = twMerge("w-"+(size === "sm" ? "10" : 
        (size === "md" ? "32" : "full")), baseClasses, className);
    
    return(
        <button
            className={classes}
            type={type}
            {...props}
        >
            <div className="flex gap-1 justify-center">
                {text !== undefined &&
                    <p className="text-white group-hover:text-blue-600
                        group-hover:font-semibold">{text}</p>
                }
                {icon !== undefined &&
                    <HeroIcon icon={icon} className="text-white group-hover:text-blue-600"/>
                }
            </div>
        </button>
    )
}

export default Button