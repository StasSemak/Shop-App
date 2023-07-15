'use client'

import { CategoryItem } from "@/data/categories"
import { ProductItem, getProducts } from "@/data/products";
import { ChangeEvent, useState } from "react"
import ProductListItem from "./productListItem";
import Select from "@/components/reusable/select";

const CategoryList = ({categories}:{categories:CategoryItem[]}) => {
    const [products, setProducts] = useState<ProductItem[]>([]);

    const options = categories.map((cat, index) => (
        <option key={index} value={cat.id}>{cat.name}</option>
    ))

    const onChangeHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
        getProducts(parseInt(e.target.value))
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }

    return(
        <div>
            <form>
                <Select
                    onChangeAction={onChangeHandler}
                    defaultValue={0}
                    defaultOption={{text: "Select category", disabled: true}}
                >
                    {options}
                </Select>
            </form>
            <div className="flex flex-col gap-3 mt-3">
                {products.map((item, index) => (
                    <ProductListItem key={index} product={item}/>
                ))}
            </div>
        </div>
    )
}

export default CategoryList