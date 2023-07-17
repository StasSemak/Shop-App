'use client';

import { useEffect, useState } from "react";
import { CategoryItem, getCategoryBySearchInput } from "@/data/categories";
import useSWR, { Fetcher } from "swr";
import Link from "next/link";
import CategoryCard from "@/components/categories/categoryCard";
import LoadSpinner from "@/components/reusable/loadSpinner";

const CategoriesResult = ({input} : {input:string}) => {
    const [categories, setCategories] = useState<CategoryItem[]>([]);

    const categoriesFetcher: Fetcher<CategoryItem[], string> = (input) => getCategoryBySearchInput(input);

    const { data, error, isLoading } = useSWR(input, categoriesFetcher);

    useEffect(() => {
        if(data) setCategories(data);
        if(error) console.log(error);
    }, [data, error, setCategories])

    if(isLoading) return <LoadSpinner/>

    return(
        <div>
            <h2 className="text-xl mb-1">Categories</h2>
            {categories.length === 0 && 
                <p className="text-center">Categories not found</p>}
            <div className="flex flex-row gap-2 flex-wrap">
                {categories.map((item, index) => (
                    <Link key={index} href={`/categories/${item.id}`}>
                        <CategoryCard name={item.name} imagePath={item.image} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoriesResult;