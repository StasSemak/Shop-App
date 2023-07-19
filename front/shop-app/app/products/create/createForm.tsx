'use client';

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useFilePicker } from "use-file-picker";
import { CategoryItem } from "@/data/categories";
import axios from "axios";
import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import TextArea from "@/components/reusable/textarea";
import Select from "@/components/reusable/select";
import Toast from "@/components/reusable/toast";
import toast from "react-hot-toast";

const CreateForm = ({categories}:{categories:CategoryItem[]}) => {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        imageBase64: '',
        categoryId: 0
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
        ChangeEvent<HTMLTextAreaElement>|
        ChangeEvent<HTMLSelectElement>) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(product.name === '') {
            setErrorMessage('Name is required!');
            return;
        }
        if(product.description === '') {
            setErrorMessage('Description is required!');
            return;
        }
        if(product.price === 0) {
            setErrorMessage('Price is required!');
            return;
        }
        if(product.categoryId === 0) {
            setErrorMessage('Category is required!');
            return;
        }
        if(filesContent.length === 0) {
            setErrorMessage('Image is required!');
            return;
        }

        setProduct({...product, imageBase64: filesContent[0].content});

        axios.post(`http://shop-next-api.somee.com/api/products`, product)
            .then(() => {
                toast.success(`Product ${product.name} created successfully!`);
            })
            .catch(err => {
                toast.error("Error while creating product!");
                console.log(err);
            })
    }

    const options = categories.map((cat, index) => (
        <option key={index} value={cat.id}>{cat.name}</option>
    ))

    return(
        <div>
            {errorMessage != '' &&
                <p className="mb-2 mx-auto text-red-500">{errorMessage}</p>
            }
            <form onSubmit={submitHandler} className="flex flex-col gap-2">
                <Input
                    type="text"
                    onChangeAction={onChangeHandler}
                    name="name"
                    placeholder="Product name"
                />
                <TextArea
                    name="description"
                    onChangeAction={onChangeHandler}
                    placeholder="Product description" 
                />
                <div className="flex gap-2">
                    <Input
                        type="number"
                        onChangeAction={onChangeHandler}
                        name="price"
                        placeholder="Product price" 
                    />
                    <Select
                        name="categoryId"
                        onChangeAction={onChangeHandler}
                        defaultValue={0}
                        defaultOption={{text: "Product category", disabled: true}}
                    >
                        {options}
                    </Select>
                </div>
                <div className="mb-1">
                    <p className="mb-1">Product image</p>
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