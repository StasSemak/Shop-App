import { Metadata } from "next";
import LoginForm from "./loginForm";

export const metadata: Metadata = {
    title: "Login",
    description: "Authentificating into account"
}

const Login = () => {
    return(
        <LoginForm/>
    );
}

export default Login;