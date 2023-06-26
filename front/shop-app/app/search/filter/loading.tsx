'use client';

import { ClipLoader } from "react-spinners"

const Loading = () => {
    return(
        <div className="h-[80vh] flex justify-center items-center">
            <ClipLoader color="#3B82F6"/>
        </div>
    ) 
}

export default Loading