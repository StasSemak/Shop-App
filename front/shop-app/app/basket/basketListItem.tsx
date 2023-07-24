'use client';

import HeroIcon from "@/components/icons/heroicon";
import { BasketItem } from "@/data/basket";
import { imageUrl } from "@/data/images";
import { updateItem } from "@/redux/features/basketSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BasketListItem = ({basketItem, deleteHandler}:
    {
        basketItem:BasketItem,
        deleteHandler: () => void
    }) => {
    const [count, setCount] = useState<number>(basketItem.count);
    const dispatch = useAppDispatch();

    const clickAction = (value: number) => {
        setCount(count => count + value);
        dispatch(updateItem({productId: basketItem.productId, count: count + value}));
    }

    return(
        <div className="grid xs:grid-cols-11 grid-cols-5 grid-rows-2 xs:grid-rows-none items-center 
            xs:h-24 h-32 border border-blue-600 p-2 rounded-md">
            <Link href={`/products/${basketItem.productId}`} className="col-span-3">
                <p className="text-center hover:text-blue-600">{basketItem.name}</p>
            </Link>
            <div className="xs:h-20 xs:w-32 h-14 w-20 relative xs:col-span-3 col-span-2">
                <Image
                    src={imageUrl(basketItem.image)}
                    alt={basketItem.name}
                    fill
                    sizes="20vw"
                    className="object-contain"
                />
            </div> 
            <div className="col-span-2 flex gap-1 justify-center xs:justify-start">
                <button 
                    onClick={() => clickAction(-1)}
                    disabled={count === 1}
                    className="group"
                >
                    <HeroIcon icon="MinusSmall" 
                        className="text-blue-600 group-disabled:text-gray-500"/>
                </button>
                <p className="w-4 text-center">{count}</p>
                <button 
                    onClick={() => clickAction(1)}
                    disabled={count === 99}
                    className="group"
                >
                    <HeroIcon icon="PlusSmall" 
                        className="text-blue-600 group-disabled:text-gray-500"/>
                </button>
            </div>
            <p className="col-span-2 text-center">{basketItem.price * count}&#8372;</p>
            <button className="group" onClick={deleteHandler}>
                <div className="flex justify-center">
                    <HeroIcon icon="XMark" className="text-gray-500 group-hover:text-red-600"/>
                </div>
            </button>
        </div>
    )
}

export default BasketListItem