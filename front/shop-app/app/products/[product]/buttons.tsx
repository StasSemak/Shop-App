'use client';

import Button from "@/components/reusable/button";
import Toast from "@/components/reusable/toast";
import { getIsProductInBasket } from "@/data/products";
import { getLoggedUserId } from "@/data/users";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDebugValue, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR, { Fetcher } from "swr";

const Buttons = ({id}:{id:number}) => {
    const router = useRouter();
    const userId = getLoggedUserId();
    const [isInBasket, setIsInBasket] = useState<boolean>(false);

    const fetcher: Fetcher<boolean, string> = (input) => getIsProductInBasket(parseInt(input));
    const { data, error, isLoading } = useSWR(id.toString(), fetcher);

    useEffect(() => {
        if(data) setIsInBasket(data);
        if(error) console.log(error);
    })

    const cartClickHandler = () => {
        axios.post(`http://shop-next-api.somee.com/api/baskets`,{
            userId: userId,
            productId: id
        })
        .then(() => toast.success("Product is in cart now!"))
        .catch(err => {
            console.log(err);
            toast.error("We can't put this into cart, try again!")
        });
    }

    const reviewClickHandler = () => {
        router.push(`/products/${id}/reviews/add`)
    }

    if(isLoading) return <p>Loading...</p>

    return(
        <div className="flex flex-col gap-2">
            {isInBasket ?
                <Link href="/basket">
                    <Button
                        size="md"
                        text="In cart"
                        icon="CheckCircle"
                        className="w-36"
                    />
                </Link>
                :
                <Button
                size="md"
                text="Add to cart"
                icon="ShoppingCart"
                className="w-36"
                onClickAction={cartClickHandler}
                />
            }
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