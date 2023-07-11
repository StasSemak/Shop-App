"use client";

import HeroIcon from "@/components/icons/heroicon";
import React, { ChangeEvent, useEffect, useState } from "react";
import CategoriesResult from "./categoriesResult";
import ProductsResult from "./productsResult";
import { useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link";
import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [displayResults, setDisplayResults] = useState<boolean>(false); 

    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    useEffect(() => {
        if(query) {
            setSearchInput(query);
            setDisplayResults(true);
        }
    }, [query, setSearchInput, setDisplayResults])

    const router = useRouter();

    const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
        setDisplayResults(false);
    }
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search` + (searchInput !== '' ? `?q=${searchInput}` : ''))
        setDisplayResults(true);
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="flex gap-1">
                <Input
                    type="text"
                    onChangeAction={onChangeHandler}
                    name="searchInput"
                    value={searchInput}
                    placeholder="Search by product or category name"
                />
                <Button size="sm" icon="MagnifyingGlassIcon" type="submit"/>
            </form>
            <div className="mt-2 ml-1">
                <Link href={`/search/filter` + (searchInput !== '' ? `?q=${searchInput}`: '')}>
                    <div className="flex items-center">
                        <p className="text-blue-600">
                            Extended products search
                        </p>
                        <HeroIcon icon="ChevronRightIcon" className="text-blue-600 h-5 w-5"/>    
                    </div>
                </Link>
            </div>
            <div className="mt-5">
                {displayResults ? 
                    <div className="flex flex-col gap-5">
                        <CategoriesResult input={searchInput}/>
                        <ProductsResult input={{name: searchInput, categoryId: 0, maxPrice: 0, minPrice: 0}}/>
                    </div>
                    :
                    <div className="h-72 flex items-center justify-center">
                        <p className="text-center text-2xl
                            font-bold text-blue-600">Enter your request</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchPage;