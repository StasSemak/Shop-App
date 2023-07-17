import { Metadata } from "next"
import RegisterForm from "./registerForm"

export const metadata: Metadata = {
    title: "Register",
    description: "Create account"
}

const Register = () => {
    return(
        <RegisterForm/>
    )
}

export default Register