'use client';

import HeroIcon from "@/components/icons/heroicon";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useFilePicker } from "use-file-picker";

interface RegisterItem {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    imageBase64: string;
}

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState<RegisterItem>({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'User',
        imageBase64: ''
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [openFileSelector, { filesContent, loading, errors, clear }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        maxFileSize: 3
    })

    const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData({...registerData, [e.target.name]: e.target.value});
    }

    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(filesContent.length !== 0) {
            setRegisterData({...registerData, imageBase64: filesContent[0].content});
        }
        axios.post("https://localhost:7187/api/users/register", registerData)
            .then(res => {
                router.push("/auth/register/success");
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
                <input 
                    type="text"
                    onChange={onChangeHandler}
                    name="userName"
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    placeholder="Username"    
                />
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
                <input 
                    type="password"
                    onChange={onChangeHandler}
                    name="confirmPassword"
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    placeholder="Confirm password"    
                />
                <div className="mb-1">
                    <p className="mb-1">Profile image (not required)</p>
                    {filesContent.length === 0 &&
                        <button 
                            type="button" 
                            className="block h-10 w-32 bg-blue-600 rounded-md"
                            onClick={() => openFileSelector()}
                        >
                            <div className="flex gap-1 justify-center">
                                <p className="text-white">Select</p>
                                <HeroIcon icon="FolderOpenIcon" className="text-white"/>
                            </div>
                        </button>
                    }   
                    <div>
                        {loading && <p>Loading...</p>}
                        {errors.length !== 0 &&
                            <p className="text-red-500">
                                {errors[0].fileSizeToolarge && 'Size of image must be not higher than 3 MB!'}
                                {errors[0].readerError && 'Error while reading file!'}    
                            </p>
                        }
                        {filesContent.map((file, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <img src={file.content} alt={file.name} className="h-36"/>
                                <button className="block h-10 w-10 bg-blue-600 rounded-md"
                                    onClick={() => clear()}>
                                    <HeroIcon icon="TrashIcon" className="text-white mx-auto"/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit"
                    className="block h-10 bg-blue-600 rounded-md">
                        <p className="text-white mx-auto">Register</p>
                </button>
            </form>
            <div className="flex gap-1 mt-2">
                <p>Already have an account?</p>
                <Link href="/auth/login">
                    <p className="text-blue-500">Login</p>
                </Link>
            </div>
        </div>
    )
}

export default RegisterForm