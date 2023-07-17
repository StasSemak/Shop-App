import { Metadata } from "next";
import SearchPage from "./searchPage";

export const metadata: Metadata = {
    title: "Search",
    description: "Search categories and products by name"
}

const Search = () => {
    return (
        <div>
            <SearchPage/>
        </div>
    )
}

export default Search;