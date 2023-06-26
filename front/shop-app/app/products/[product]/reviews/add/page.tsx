'use client';

import { CreateReviewItem } from "@/data/reviews";
import { getLoggedUser } from "@/data/users";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const AddReview = ({params} : {params: {product:number}}) => {
    const [review, setReview] = useState<CreateReviewItem>({
        text: '',
        mark: 0,
        userId: getLoggedUser().id,
        productId: params.product
    });

    const onChangeHandler = async (e: 
        ChangeEvent<HTMLTextAreaElement>|
        ChangeEvent<HTMLSelectElement>) => {
        setReview({...review, [e.target.name]: e.target.value});
    }

    const router = useRouter();
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("https://localhost:7187/api/reviews", review)
            .then(res => {
                router.push(`/products/${review.productId}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <p>Rating</p>
                    <select
                        name="mark"
                        onChange={onChangeHandler}
                        className="block w-12 rounded-md border-0 py-2 px-2.5 shadow-sm ring-1 
                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                        focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <textarea 
                    name="text"
                    onChange={onChangeHandler}
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    placeholder="Review text"    
                />
                <button 
                    type="submit"
                    className="block h-10 w-36 bg-blue-600 rounded-md"
                >
                    <div className="flex gap-1 justify-center">
                        <p className="text-white">Submit</p>
                    </div>
                </button>
            </form>
        </div>
    )
}

export default AddReview