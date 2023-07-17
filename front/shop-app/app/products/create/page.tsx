import { getCategories } from "@/data/categories";
import CreateForm from "./createForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Panel - Create product",
    description: "Create new product"
}

const CreateProduct = async () => {
    const categories = await getCategories();

    return(
        <CreateForm categories={categories}/>
    )
}

export default CreateProduct;