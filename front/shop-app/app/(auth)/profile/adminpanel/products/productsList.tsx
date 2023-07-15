'use client';

import { ProductItem } from "@/data/products";
import ProductListItem from "./productListItem";

const ProductsList = ({products}:{products:ProductItem[]}) => {
    return(
        <div className="flex flex-col gap-3">
            {products.map((item, index) => (
                <ProductListItem key={index} product={item}/>
            ))}
        </div>
    )
}

export default ProductsList