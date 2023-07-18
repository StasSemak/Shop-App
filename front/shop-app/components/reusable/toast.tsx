import { Toaster } from "react-hot-toast"

const Toast = () => {
    return(
        <Toaster 
            position="top-right"
            toastOptions={{
                success: {
                    iconTheme: {
                        primary: "#2563EB",
                        secondary: "white"
                    }
                },
                error: {
                    duration: 3000
                }
            }}
        />
    )
}

export default Toast