'use client';

import HeroIcon from "@/components/icons/heroicon";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import ProductsResult from "../productsResult";
import { CategoryItem } from "@/data/categories";
import axios from "axios";
import { ProductSearchInput } from "@/data/products";
import Link from "next/link";

const SearchFilterPage = () => {
    const [searchInput, setSearchInput] = useState<ProductSearchInput>({
        name: '',
        categoryId: 0,
        maxPrice: 0,
        minPrice: 0
    });
    const [displayResults, setDisplayResults] = useState<boolean>(false);

    const [categories, setCategories] = useState<CategoryItem[]>([]);

    const router = useRouter();

    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const catId = searchParams.get('c');
    const minP = searchParams.get('lp');
    const maxP = searchParams.get('hp');

    useEffect(() => {
        if(query) {
            setSearchInput({...searchInput, name: query});
            setDisplayResults(true);
        }
        if(catId) {
            setSearchInput({...searchInput, categoryId: parseInt(catId)});
            setDisplayResults(true);
        }
        if(minP) {
            setSearchInput({...searchInput, minPrice: parseInt(minP)});
            setDisplayResults(true);
        }
        if(maxP) {
            setSearchInput({...searchInput, maxPrice: parseInt(maxP)});
            setDisplayResults(true);
        }
    }, [query, catId, maxP, minP, setCategories, setDisplayResults])

    useEffect(() => {
        axios.get<CategoryItem[]>('https://localhost:7187/api/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [setCategories])

    const onChangeHandler = async (e: 
        ChangeEvent<HTMLInputElement>|
        ChangeEvent<HTMLSelectElement>) => {
        setSearchInput({...searchInput, [e.target.name]: e.target.value});
        setDisplayResults(false);
    }
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let url = `/search/filter?`;
        if(searchInput.name !== '') url += `q=${searchInput.name}&`;
        if(searchInput.categoryId !== -1) url += `c=${searchInput.categoryId}&`;
        if(searchInput.minPrice !== 0) url += `lp=${searchInput.minPrice}&`;
        if(searchInput.maxPrice !== 0) url += `hp=${searchInput.maxPrice}`;
        router.push(url);
        setDisplayResults(true);
    }

    const options = categories.map((cat, index) => (
        <option key={index} value={cat.id}>{cat.name}</option>
    ))

    return(
        <div>
            <div className="mb-2">
                <Link href={`/search` + (searchInput.name !== '' ? `?q=${searchInput.name}` : '')}>
                    <div className="flex items-center">
                        <HeroIcon icon="ChevronLeftIcon" className="text-blue-500 h-5 w-5"/> 
                        <p className="text-blue-500">Back to simple search</p>
                    </div>
                </Link>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <input 
                    type="text"
                    onChange={onChangeHandler}
                    name="name"
                    value={searchInput.name}
                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    placeholder="Product name"    
                />

                <select 
                    name="categoryId"
                    value={searchInput.categoryId}
                    onChange={onChangeHandler}
                    className="block w-full rounded-md border-0 py-2 px-2.5 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                >
                    <option value={0}>All categories</option>
                    {options}
                </select>

                <div className="flex justify-between">
                    <div className="flex gap-2 items-center ml-1">
                        <p>Price:</p>
                        <input 
                            type="number" 
                            name="minPrice"
                            value={searchInput.minPrice}
                            onChange={onChangeHandler}
                            className="block w-24 rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                            focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                        />
                        <p>to</p>
                        <input 
                            type="number" 
                            name="maxPrice"
                            value={searchInput.maxPrice}
                            onChange={onChangeHandler}
                            className="block w-24 rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 
                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                            focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <button type="submit"
                        className="block h-10 w-28 bg-blue-600 rounded-md ml-1">
                        <div className="flex items-center gap-1 justify-center">
                            <p className="text-white">Search</p>
                            <HeroIcon icon="MagnifyingGlassIcon" className="text-white h-5 w-5"/> 
                        </div>
                    </button>
                </div>
            </form>
            <div className="mt-5">
                {displayResults ? 
                    <ProductsResult input={searchInput}/>
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

export default SearchFilterPage