"use client";

import HeroIcon from "@/components/icons/heroicon";
import React, { ChangeEvent, useEffect, useState } from "react";
import CategoriesResult from "./categoriesResult";
import ProductsResult from "./productsResult";
import { useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link";

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
                <input 
                    type="text"
                    onChange={onChangeHandler}
                    name="searchInput"
                    value={searchInput}
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    placeholder="Search by product or category name"    
                />
                <button type="submit"
                    className="block w-10 h-10 bg-blue-600 rounded-md">
                    <HeroIcon icon="MagnifyingGlassIcon" className="text-white mx-auto"/> 
                </button>
            </form>
            <div className="mt-2 ml-1">
                <Link href={`/search/filter` + (searchInput !== '' ? `?q=${searchInput}`: '')}>
                    <div className="flex items-center">
                        <p className="text-blue-500">
                            Extended products search
                        </p>
                        <HeroIcon icon="ChevronRightIcon" className="text-blue-500 h-5 w-5"/>    
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
                            font-bold text-blue-500">Enter your request</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchPage;