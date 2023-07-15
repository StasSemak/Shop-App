'use client';

import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import { LoginItem, UserItem, logIn } from "@/data/users";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const LoginForm = () => {
    const [loginData, setLoginData] = useState<LoginItem>({
        email: '',
        password: ''
    });    
    const [errorMessage, setErrorMessage] = useState<string>('');

    const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
       setLoginData({...loginData, [e.target.name]: e.target.value});
    }
    
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        axios.post<UserItem>("http://shop-next-api.somee.com/api/users/login", loginData)
            .then(res => {
                logIn(res.data);
                router.push("/profile");
            })
            .catch(err => {
                console.log(err);
                setErrorMessage(err.response.data.error);
            })
    }

    return(
        <div className="flex flex-col items-center mt-5">
            {errorMessage != '' &&
                <p className="mb-2 text-red-500">{errorMessage}</p>
            }
            <form onSubmit={submitHandler} className="flex flex-col gap-2 w-2/3 max-w-[680px]">
                <Input
                    type="text"
                    onChangeAction={onChangeHandler}
                    name="email"
                    placeholder="Email" 
                />
                <Input
                    type="password"
                    onChangeAction={onChangeHandler}
                    name="password"
                    placeholder="Password"
                />
                <Button
                    size="lg"
                    type="submit"
                    text="Login"
                />
            </form>
            <div className="flex gap-1 mt-2">
                <p>Don't have an account?</p>
                <Link href="/register">
                    <p className="text-blue-600">Register</p>
                </Link>
            </div>
        </div>
    )
} 

export default LoginForm