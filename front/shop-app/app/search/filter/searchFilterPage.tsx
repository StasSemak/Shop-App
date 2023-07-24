'use client';

import HeroIcon from "@/components/icons/heroicon";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import ProductsResult from "../productsResult";
import { CategoryItem } from "@/data/categories";
import { ProductSearchInput } from "@/data/products";
import Link from "next/link";
import Button from "@/components/reusable/button";
import Input from "@/components/reusable/input";
import Select from "@/components/reusable/select";

const SearchFilterPage = ({fetchedCategories}:{fetchedCategories:CategoryItem[]}) => {
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
        setCategories(fetchedCategories);
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
        <div className="w-full lg:w-2/3 mx-auto">
            <div className="mb-2">
                <Link href={`/search` + (searchInput.name !== '' ? `?q=${searchInput.name}` : '')}>
                    <div className="flex items-center">
                        <HeroIcon icon="ChevronLeft" className="text-blue-600 h-5 w-5"/> 
                        <p className="text-blue-600">Back to simple search</p>
                    </div>
                </Link>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <Input
                    type="text"
                    onChangeAction={onChangeHandler}
                    name="name"
                    value={searchInput.name}
                    placeholder="Product name"
                />
                <Select
                    name="categoryId"
                    defaultValue={searchInput.categoryId}
                    onChangeAction={onChangeHandler}
                    defaultOption={{text: "All categories"}}
                >
                    {options}
                </Select>
                <div className="flex sm:justify-between sm:flex-row flex-col sm:gap-0 gap-3">
                    <div className="flex gap-2 items-center ml-1">
                        <p>Price:</p>
                        <Input
                            type="number"
                            onChangeAction={onChangeHandler}
                            name="minPrice"
                            value={searchInput.minPrice}
                            className="sm:w-24 w-20"
                        />
                        <p>to</p>
                        <Input
                            type="number"
                            onChangeAction={onChangeHandler}
                            name="maxPrice"
                            value={searchInput.maxPrice}
                            className="sm:w-24 w-20"
                        />
                    </div>
                    <Button 
                        size="md" 
                        type="submit" 
                        icon="MagnifyingGlass"
                        text="Search"
                    />
                </div>
            </form>
            <div className="mt-5">
                {displayResults ? 
                    <ProductsResult input={searchInput}/>
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

export default SearchFilterPage