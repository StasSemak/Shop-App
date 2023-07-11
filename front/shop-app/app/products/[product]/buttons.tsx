'use client';

import HeroIcon from "@/components/icons/heroicon";
import Button from "@/components/reusable/button";
import { useRouter } from "next/navigation";

const Buttons = ({id}:{id:number}) => {
    const router = useRouter();

    const cartClickHandler = () => {
        //adding to cart
    }

    const reviewClickHandler = () => {
        router.push(`/products/${id}/reviews/add`)
    }

    return(
        <div className="flex flex-col gap-2">
            <Button
                size="md"
                text="Add to cart"
                icon="ShoppingCartIcon"
                className="w-36"
                onClickAction={cartClickHandler}
            />
            <Button
                size="md"
                text="Add review"
                icon="StarIcon"
                className="w-36"
                onClickAction={reviewClickHandler}
            />
        </div>
    )
}

export default Buttons