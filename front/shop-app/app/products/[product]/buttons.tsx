'use client';

import HeroIcon from "@/components/icons/heroicon";
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
            <button 
                className="block h-10 w-36 bg-blue-600 rounded-md"
            >
                <div className="flex gap-1 justify-center">
                    <p className="text-white">Add to cart</p>
                    <HeroIcon icon="ShoppingCartIcon" className="text-white"/>
                </div>
            </button>
            <button 
                className="block h-10 w-36 bg-blue-600 rounded-md"
                onClick={reviewClickHandler}
            >
                <div className="flex gap-1 justify-center">
                    <p className="text-white">Add review</p>
                    <HeroIcon icon="StarIcon" className="text-white"/>
                </div>
            </button>
        </div>
    )
}

export default Buttons