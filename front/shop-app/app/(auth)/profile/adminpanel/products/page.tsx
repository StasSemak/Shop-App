import { getAllProducts } from "@/data/products"
import Link from "next/link";
import ListContainer from "./listContainer";
import { getCategories } from "@/data/categories";
import Button from "@/components/reusable/button";
import { Metadata } from "next";
import Redirect from "@/components/redirect";

export const metadata: Metadata = {
    title: "Admin Panel - Products",
    description: "Manage products"
}

const ProductsPanel = async () => {
    const products = await getAllProducts();
    const categories = await getCategories();

    return(
        <>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl">Products</h1>
                <Link href="/products/create">
                    <Button size="md" text="Create new"/>
                </Link>
                <ListContainer products={products} categories={categories}/>
            </div>
            <Redirect type="isAdmin"/>
        </>
    )
}

export default ProductsPanel