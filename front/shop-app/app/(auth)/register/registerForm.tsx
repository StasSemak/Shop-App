'use client';

import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import { RegisterItem } from "@/data/users";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useFilePicker } from "use-file-picker";

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
        axios.post("http://shop-next-api.somee.com/api/users/register", registerData)
            .then(() => {
                router.push("/register/success");
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
                    name="userName"
                    placeholder="Username"   
                />
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
                <Input
                    type="password"
                    onChangeAction={onChangeHandler}
                    name="confirmPassword"
                    placeholder="Confirm password"
                />
                <div className="mb-1">
                    <p className="mb-1">Profile image (not required)</p>
                    {filesContent.length === 0 &&
                        <Button 
                            size="md" 
                            type="button" 
                            text="Select"
                            icon="FolderOpenIcon"
                            onClickAction={openFileSelector}
                        />
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
                                <Button
                                    size="sm"
                                    type="button"
                                    onClickAction={clear}
                                    icon="TrashIcon"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    size="lg"
                    type="submit"
                    text="Register"
                />
            </form>
            <div className="flex gap-1 mt-2">
                <p>Already have an account?</p>
                <Link href="/login">
                    <p className="text-blue-600">Login</p>
                </Link>
            </div>
        </div>
    )
}

export default RegisterForm