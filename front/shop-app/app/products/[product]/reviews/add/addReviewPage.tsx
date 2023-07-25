'use client';

import Button from "@/components/reusable/button";
import Select from "@/components/reusable/select";
import TextArea from "@/components/reusable/textarea";
import Toast from "@/components/reusable/toast";
import { CreateReviewItem } from "@/data/reviews";
import { getLoggedUserId } from "@/data/users";
import { GLOBAL_SERVER } from "@/env/env";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddReviewPage = ({productId}:{productId:number}) => {
    const [review, setReview] = useState<CreateReviewItem>({
        text: '',
        mark: 0,
        userId: getLoggedUserId() ?? 0,
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
        axios.post(`${GLOBAL_SERVER}/api/reviews`, review)
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
        <div className="w-full lg:w-2/3 mx-auto">
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <p>Rating</p>
                    <Select
                        name="mark"
                        onChangeAction={onChangeHandler}
                        className="w-14"
                    >
                        {options}
                    </Select>
                </div>
                <TextArea
                    name="text"
                    onChangeAction={onChangeHandler}
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