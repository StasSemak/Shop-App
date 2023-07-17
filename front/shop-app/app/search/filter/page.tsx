import { getCategories } from "@/data/categories"
import SearchFilterPage from "./searchFilterPage"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search - Extended",
    description: "Extended products search"
}

const SearchFilter = async () => {
    const categories = await getCategories();

    return(
        <div>
            <SearchFilterPage fetchedCategories={categories}/>
        </div>
    )
}

export default SearchFilter