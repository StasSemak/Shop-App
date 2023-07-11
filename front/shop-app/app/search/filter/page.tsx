import { getCategories } from "@/data/categories"
import SearchFilterPage from "./searchFilterPage"

const SearchFilter = async () => {
    const categories = await getCategories();

    return(
        <div>
            <SearchFilterPage fetchedCategories={categories}/>
        </div>
    )
}

export default SearchFilter