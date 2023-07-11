'use client'

const error = ({error, reset}: {error:Error, reset: () => void }) => {
    return(
        <div>
            Error! 
            <br/>
            {error.message}
        </div>
    )
}

export default error;