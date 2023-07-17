import { ClipLoader } from "react-spinners"

const LoadSpinner = () => {
    return(
        <div className="h-[80vh] flex justify-center items-center">
            <ClipLoader color="#3B82F6"/>
        </div>
    ) 
}

export default LoadSpinner;