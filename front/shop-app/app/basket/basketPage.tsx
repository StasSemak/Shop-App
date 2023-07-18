'use client';

import Button from "@/components/reusable/button";
import { BasketItem, getBasket } from "@/data/basket";
import { getLoggedUserId } from "@/data/users";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasketListItem from "./basketListItem";
import useSWR, { Fetcher } from "swr";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteItem, setItems } from "@/redux/features/basketSlice";
import { RootState } from "@/redux/store";
import LoadSpinner from "@/components/reusable/loadSpinner";
import { toast } from "react-hot-toast";
import Toast from "@/components/reusable/toast";

interface DeleteData {
    userId: number;
    productId: number;
}

const BasketPage = () => {
    const [basket, setBasket] = useState<BasketItem[]>([]);

    const userId = getLoggedUserId();

    const basketFetcher: Fetcher<BasketItem[], string> = (input) => getBasket(parseInt(input));
    const { data, error, isLoading } = useSWR(userId.toString(), basketFetcher);

    const dispatch = useAppDispatch();
    const itemsInRedux = useAppSelector((state: RootState) => state.basketReducer);

    useEffect(() => {
        setBasket(itemsInRedux);
    }, [itemsInRedux])

    useEffect(() => {
        if(data) {
            setBasket(data);
            dispatch(setItems(data));
        } 
        if(error) console.log(error);
    }, [data, error, setBasket])

    const deleteItemHandler = (productId: number) => {
        axios.delete<any, any, DeleteData>(`http://shop-next-api.somee.com/api/baskets`, {
            data: {
                userId: userId,
                productId: productId
            }
        })
        .then(() => { 
            setBasket(basket.filter(x => x.productId !== productId));
            dispatch(deleteItem(productId));
        })
        .catch(err => console.log(err));
    }

    const saveClickHandler = () => {
        axios.put(`http://shop-next-api.somee.com/api/baskets`, {
            userId: userId,
            products: basket
        })
        .then(() => toast.success("Basket saved!"))
        .catch(err => console.log(err));
    }

    const totalPrice = () => {
        let sum = 0;
        basket.forEach(item => sum += item.price * item.count);
        return sum;
    }

    if(isLoading) return <LoadSpinner/>

    return(
        <div>
            {basket.length === 0 ?
                <div className="h-80 flex items-center justify-center flex-col gap-3">
                    <p className="text-center text-2xl
                        font-bold text-blue-600">Basket is empty</p>
                    <Link href="/">
                        <Button
                            size="md"
                            text="Find something"
                            className="w-36"
                        />
                    </Link>
                </div>
                :
                <>
                <div className="flex flex-col gap-3">
                    {basket.map((item, index) => (
                        <BasketListItem 
                            key={index} 
                            basketItem={item}
                            deleteHandler={() => deleteItemHandler(item.productId)}
                        />
                    ))}
                </div>
                    
                <div className="flex justify-between mt-4 items-center">
                    <div className="flex gap-2">
                        <p className="text-xl">Total price:</p>
                        <p className="text-xl font-semibold text-blue-600">{totalPrice()}&#8372;</p>
                    </div>
                    <div>
                        <Button
                            size="md"
                            text="Save"
                            onClickAction={saveClickHandler}
                        />
                    </div>
                </div>
                </>
            }
            <Toast/>
        </div>
    )
}

export default BasketPage;