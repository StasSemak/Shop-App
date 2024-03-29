'use client';

import Button from "@/components/reusable/button";
import Toast from "@/components/reusable/toast";
import { getIsProductInBasket } from "@/data/products";
import { getLoggedUser, getLoggedUserId } from "@/data/users";
import { GLOBAL_SERVER } from "@/env/env";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR, { Fetcher } from "swr";

const Buttons = ({id}:{id:number}) => {
    const router = useRouter();
    const user = getLoggedUser();
    const [isInBasket, setIsInBasket] = useState<boolean>(false);

    const fetcher: Fetcher<boolean, string> = (input) => getIsProductInBasket(parseInt(input));
    const { data, error, isLoading } = useSWR(id.toString(), fetcher);

    useEffect(() => {
        if(data) setIsInBasket(data);
        if(error) console.log(error);
    }, [])

    const cartClickHandler = () => {
        if(user === undefined) {
            toast.error("Cart accessible only for authentificated users!")
            return;
        }

        axios.post(`${GLOBAL_SERVER}/api/baskets`,{
            userId: user.id,
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

    if(isLoading) return <p className="h-[88px]">Loading...</p>

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
                    onClick={cartClickHandler}
                />
            }
            <Button
                size="md"
                text="Add review"
                icon="Star"
                className="w-36"
                onClick={reviewClickHandler}
            />
            <Toast/>
        </div>
    )
}

export default Buttons