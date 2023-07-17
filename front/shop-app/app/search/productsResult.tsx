'use client';

import ProductCard from "@/components/products/productCard";
import LoadSpinner from "@/components/reusable/loadSpinner";
import { ProductItem, ProductSearchInput, getProductBySearchInput } from "@/data/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";

const ProductsResult = ({input} : {input:ProductSearchInput}) => {
    const [products, setProducts] = useState<ProductItem[]>([]);

    const productsFetcher: Fetcher<ProductItem[], ProductSearchInput> = (input) => getProductBySearchInput(input);

    const { data, error, isLoading } = useSWR(input, productsFetcher);

    useEffect(() => {
        if(data) setProducts(data);
        if(error) console.log(error);
    }, [data, error, setProducts])

    if(isLoading) return <LoadSpinner/>

    return(
        <div>
            <h2 className="text-xl mb-1">Products</h2>
            {products.length === 0 && 
                <p className="text-center">Products not found</p>}
            <div className="flex flex-row gap-2 flex-wrap">
                {products.map((item ,index) => (
                    <Link key={index} href={`/products/${item.id}`}>
                        <ProductCard product={item}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductsResult;