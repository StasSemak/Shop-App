'use client';

import Button from "@/components/reusable/button";

const Error = ({error, reset} : {error:Error, reset: () => void}) => {
    return(
        <div className="h-[60vh] flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl font-semibold text-blue-600">Something went wrong!</h1>
            <Button
                size="md"
                text="Try again"
                onClick={reset}
            />
        </div>
    )
}

export default Error