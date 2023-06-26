'use client';

import { LoginItem, UserItem, logIn } from "@/data/users";
import { login } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const LoginForm = () => {
    const [loginData, setLoginData] = useState<LoginItem>({
        email: '',
        password: ''
    });    

    const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
       setLoginData({...loginData, [e.target.name]: e.target.value});
    }
    
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        axios.post<UserItem>("https://localhost:7187/api/users/login", loginData)
            .then(res => {
                logIn(res.data);
                router.push("/auth/profile");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className="flex flex-col items-center mt-5">
            <form onSubmit={submitHandler} className="flex flex-col gap-2 w-2/3 max-w-[680px]">
                <input 
                    type="text"
                    onChange={onChangeHandler}
                    name="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    placeholder="Email"    
                />
                <input 
                    type="password"
                    onChange={onChangeHandler}
                    name="password"
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    placeholder="Password"    
                />
                <button type="submit"
                    className="block h-10 bg-blue-600 rounded-md">
                    <p className="text-white mx-auto">Login</p>
                </button>
            </form>
            <div className="flex gap-1 mt-2">
                <p>Don't have an account?</p>
                <Link href="/auth/register">
                    <p className="text-blue-500">Register</p>
                </Link>
            </div>
        </div>
    )
} 

export default LoginForm