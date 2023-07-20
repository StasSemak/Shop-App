'use client';

import HeroIcon from "@/components/icons/heroicon";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useFilePicker } from "use-file-picker";
import { CategoryItem } from "@/data/categories";
import axios from "axios";
import { ProductItem } from "@/data/products";
import Image from "next/image"
import { imageUrl } from "@/data/images";
import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import TextArea from "@/components/reusable/textarea";
import Select from "@/components/reusable/select";
import Toast from "@/components/reusable/toast";
import toast from "react-hot-toast";

const EditForm = ({categories, fetchedProduct, catId}:
    {categories:CategoryItem[], fetchedProduct:ProductItem, catId:number}) => {
    const [product, setProduct] = useState<ProductItem>({
        id: 0,
        name: '',
        description: '',
        price: 0,
        image: '',
        category: '',
        rating: 0
    });

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isNewImage, setIsNewImage] = useState<boolean>(false);
    const [categoryId, setCategoryId] = useState<number>(0);

    useEffect(() => {
        setProduct(fetchedProduct);
        setCategoryId(catId);
    }, [setProduct, setCategoryId])

    const [openFileSelector, { filesContent, loading, errors, clear }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        maxFileSize: 3
    })

    const onChangeHandler = async (e: 
        ChangeEvent<HTMLInputElement>|
        ChangeEvent<HTMLTextAreaElement>) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }
    const onSelectChangeHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(parseInt(e.target.value));
    }

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
        if(isNewImage && filesContent.length === 0) {
            setErrorMessage('Image is required!');
            return;
        }

        axios.put(`http://shop-next-api.somee.com/api/products`,{
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            categoryId: categoryId,
            imageBase64: (isNewImage ? filesContent[0].content : '')
        })
        .then(() => {
            toast.success(`Product ${product.name} updated successfully!`);
        })
        .catch(err => {
            console.log(err);
            toast.error(`Error updating product ${product.name}`);
        })
    }

    const options = categories.map((cat, index) => (
        <option key={index} value={cat.id}>{cat.name}</option>
    ))

    return (
        <div className="w-full lg:w-2/3 mx-auto">
            {errorMessage != '' &&
                <p className="mb-2 mx-auto text-red-500">{errorMessage}</p>
            }
            <form onSubmit={submitHandler} className="flex flex-col gap-2">
                <Input
                    type="text"
                    onChangeAction={onChangeHandler}
                    name="name"
                    value={product.name}
                    placeholder="Product name"
                />
                <TextArea
                    name="description"
                    onChangeAction={onChangeHandler}
                    value={product.description}
                    placeholder="Product description"
                />
                <div className="flex gap-2">
                    <Input
                        type="number"
                        onChangeAction={onChangeHandler}
                        name="price"
                        value={product.price}
                        placeholder="Product price"
                    />
                    <Select
                        name="categoryId"
                        onChangeAction={onSelectChangeHandler}
                        defaultValue={categoryId}
                    >
                        {options}
                    </Select>
                </div>
                <div className="mb-1">
                    <p className="mb-1">Product image</p>
                    {isNewImage === false ?
                        <div className="flex items-center gap-3">
                            <div className="h-36 w-52 relative mb-1">
                                <Image
                                    src={imageUrl(product.image)}
                                    alt={product.name}
                                    fill
                                    sizes="33vw"
                                    className="object-contain rounded-md"
                                />
                            </div>
                            <Button
                                size="sm"
                                type="button"
                                icon="Trash"
                                onClick={() => setIsNewImage(true)}
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
                    }
                </div>
                <Button
                    size="lg"
                    type="submit"
                    text="Update"
                />
            </form>
            <Toast/>
        </div>
    )
}

export default EditForm