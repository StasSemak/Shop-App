'use client';

import Button from "@/components/reusable/button";
import Toast from "@/components/reusable/toast";
import { getLoggedUserId } from "@/data/users";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Buttons = ({id}:{id:number}) => {
    const router = useRouter();

    const cartClickHandler = () => {
        const userId = getLoggedUserId();
        axios.post(`http://shop-next-api.somee.com/api/baskets`,{
            userId: userId,
            productId: id
        })
        .then(() => toast.success("Product is in cart now!"))
        .catch(err => {
            console.log(err);
            toast.error("We can't put this into cart, try again")
        });
    }

    const reviewClickHandler = () => {
        router.push(`/products/${id}/reviews/add`)
    }

    return(
        <div className="flex flex-col gap-2">
            <Button
                size="md"
                text="Add to cart"
                icon="ShoppingCart"
                className="w-36"
                onClickAction={cartClickHandler}
            />
            <Button
                size="md"
                text="Add review"
                icon="Star"
                className="w-36"
                onClickAction={reviewClickHandler}
            />
            <Toast/>
        </div>
    )
}

export default Buttons