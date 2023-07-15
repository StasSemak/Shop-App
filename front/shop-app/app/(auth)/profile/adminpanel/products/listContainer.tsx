'use client'

import { useState } from "react"
import ProductsList from "./productsList";
import { twMerge } from "tailwind-merge";
import { ProductItem } from "@/data/products";
import CategoryList from "./categoryList";
import { CategoryItem } from "@/data/categories";

const ListContainer = ({products, categories}:{
    products:ProductItem[], categories:CategoryItem[]}) => {
    const [isList, setIsList] = useState<boolean>(true);

    return(
        <div>
            <div className="flex transition-all">   
                <div className={"w-1/2 border-b-2 cursor-pointer pb-1 border-" 
                    + (isList?"blue-600":"")}
                    onClick={() => {if(!isList) setIsList(true)}}>
                    <p className={twMerge("text-center text-xl text-gray-400", 
                        (isList?" text-blue-600 font-semibold":""))}>
                        List
                    </p>
                </div>
                <div className={"w-1/2 border-b-2 cursor-pointer pb-1 border-" 
                    + (!isList?"blue-600":"")}
                    onClick={() => {if(isList) setIsList(false)}}>
                    <p className={twMerge("text-center text-xl text-gray-400", 
                        (!isList?" text-blue-600 font-semibold":""))}>
                        By category
                    </p>
                </div>
            </div>
            <div className="mt-3">
                {isList ?
                    <ProductsList products={products}/>
                :
                    <CategoryList categories={categories}/>
                }
            </div>
        </div>
    )
}

export default ListContainer