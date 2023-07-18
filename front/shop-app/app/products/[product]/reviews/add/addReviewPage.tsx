'use client';

import Button from "@/components/reusable/button";
import Select from "@/components/reusable/select";
import Toast from "@/components/reusable/toast";
import { CreateReviewItem } from "@/data/reviews";
import { getLoggedUser } from "@/data/users";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddReviewPage = ({productId}:{productId:number}) => {
    const [review, setReview] = useState<CreateReviewItem>({
        text: '',
        mark: 0,
        userId: getLoggedUser().id,
        productId: productId
    });

    const onChangeHandler = async (e: 
        ChangeEvent<HTMLTextAreaElement>|
        ChangeEvent<HTMLSelectElement>) => {
        setReview({...review, [e.target.name]: e.target.value});
    }

    const router = useRouter();
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("http://shop-next-api.somee.com/api/reviews", review)
            .then(() => {
                toast.success("Your review's added!")
                router.push(`/products/${review.productId}`);
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong! Try again");
            })
    }

    const markValues = [1,2,3,4,5];
    const options = markValues.map((item) => (
        <option key={item} value={item}>{item}</option>
    ))

    return(
        <div>
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <p>Rating</p>
                    <Select
                        name="mark"
                        onChangeAction={onChangeHandler}
                        className="w-12"
                    >
                        {options}
                    </Select>
                </div>
                <textarea 
                    name="text"
                    onChange={onChangeHandler}
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6
                    outline-none"
                    placeholder="Review text"    
                />
                <Button
                    size="md"
                    text="Submit"
                    type="submit"
                />
            </form>
            <Toast/>
        </div>
    )
}

export default AddReviewPage