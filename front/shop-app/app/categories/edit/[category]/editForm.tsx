'use client';

import { CategoryItem, getCategory } from "@/data/categories";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { useFilePicker } from "use-file-picker";
import Image from "next/image"
import { imageUrl } from "@/data/images";
import { useRouter } from "next/navigation";
import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import TextArea from "@/components/reusable/textarea";

const EditForm = ({categoryId}:{categoryId:number}) => {
    const [category, setCategory] = useState<CategoryItem>({
        id: 0,
        name: '',
        description: '',
        image: ''
    })
    const [isNewImage, setIsNewImage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const categoryFetcher: Fetcher<CategoryItem, string> = (input) => getCategory(parseInt(input));

    const { data, error } = useSWR(categoryId.toString(), categoryFetcher);

    useEffect(() => {
        if(data) setCategory(data);
        if(error) console.log(error);
    }, [data, error, setCategory]);

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
        if(isNewImage && filesContent.length === 0) {
            setErrorMessage('Image is required!');
            return;
        }

        axios.put("http://shop-next-api.somee.com/api/categories", {
            id: category.id,
            name: category.name,
            description: category.description,
            imageBase64: (isNewImage ? filesContent[0].content : '')
        })
        .then(() => {
            alert(`Category ${category.name} updated successfully!`);
            router.back();
        })
        .catch(err => {
            console.log(err);
        })
    }

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
                    value={category.name}
                    placeholder="Category name"  
                />
                <TextArea
                    name="description"
                    value={category.description}
                    onChangeAction={onChangeHandler}
                    placeholder="Category description" 
                />
                <div className="mb-1">
                    <p className="mb-1">Category image</p>
                    {isNewImage === false ?
                        <div className="flex items-center gap-3">
                            <div className="h-36 w-52 relative mb-1">
                                <Image
                                    src={imageUrl(category.image)}
                                    alt={category.name}
                                    fill
                                    sizes="33vw"
                                    className="object-contain rounded-md"
                                />
                            </div>
                            <Button
                                size="sm"
                                type="button"
                                icon="Trash"
                                onClickAction={() => setIsNewImage(true)}
                            />
                        </div>
                        :
                        <div>
                            {filesContent.length === 0 &&
                                <Button 
                                    size="md" 
                                    type="button" 
                                    text="Select"
                                    icon="FolderOpen"
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
                    }
                </div>
                <Button
                    size="lg"
                    type="submit"
                    text="Update"
                />
            </form>
        </div>
    )
}

export default EditForm