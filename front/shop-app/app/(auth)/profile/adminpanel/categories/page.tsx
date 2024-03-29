import { getCategories } from "@/data/categories"
import Link from "next/link"
import CategoryListItem from "./categoryListItem";
import Button from "@/components/reusable/button";
import { Metadata } from "next";
import Redirect from "@/components/redirect";

export const metadata: Metadata = {
    title: "Admin Panel - Categories",
    description: "Manage categories"
}

const CategoriesPanel = async () => {
    const categories = await getCategories();

    return(
        <>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl">Categories</h1>
                <Link href="/categories/create">
                    <Button size="md" text="Create new"/>
                </Link>
                <h2 className="text-xl">List</h2>
                <div className="flex flex-col gap-2">
                    {categories.map((item, index) => (
                        <CategoryListItem category={item} key={index}/>
                    ))}
                </div>
            </div>
            <Redirect type="isAdmin"/>
        </>
    )
}

export default CategoriesPanel