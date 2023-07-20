'use client';

import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import TextArea from "@/components/reusable/textarea";
import Toast from "@/components/reusable/toast";
import { GLOBAL_SERVER } from "@/env/env";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useFilePicker } from "use-file-picker";

const CreateForm = () => {
    const [category, setCategory] = useState({
        name: '',
        description: '',
        imagebase64: ''
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [openFileSelector, { filesContent, loading, errors, clear }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        maxFileSize: 3
    })

    const onChangeHandler = async (e: 
        ChangeEvent<HTMLInputElement>|
        ChangeEvent<HTMLTextAreaElement>) => {
        setCategory({...category, [e.target.name]: e.target.value});
    }

    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(category.name === '') {
            setErrorMessage('Name is required!');
            return;
        }
        if(category.description === '') {
            setErrorMessage('Description is required!');
            return;
        }
        if(filesContent.length === 0) {
            setErrorMessage('Image is required!');
            return;
        }

        setCategory({...category, imagebase64: filesContent[0].content});

        axios.post(`${GLOBAL_SERVER}/api/categories`, category)
            .then(() => {
                toast.success(`Category ${category.name} created successfully!`);
            })
            .catch(err => {
                toast.error("Error while creating category!");
                console.log(err);
            })
    }

    return(
        <div className="w-full lg:w-2/3 mx-auto">
            {errorMessage != '' &&
                <p className="mb-2 mx-auto text-red-500">{errorMessage}</p>
            }
            <form onSubmit={submitHandler} className="flex flex-col gap-2">
                <Input
                    type="text"
                    onChangeAction={onChangeHandler}
                    name="name"
                    placeholder="Category name"   
                />
                <TextArea
                    name="description"
                    onChangeAction={onChangeHandler}
                    placeholder="Category description"
                />
                <div className="mb-1">
                    <p className="mb-1">Category image</p>
                    {filesContent.length === 0 &&
                        <Button 
                            size="md" 
                            type="button" 
                            text="Select"
                            icon="FolderOpen"
                            onClick={openFileSelector}
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
                                    onClick={clear}
                                    icon="Trash"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    size="lg"
                    type="submit"
                    text="Create"
                />
            </form>
            <Toast/>
        </div>
    )
}

export default CreateForm