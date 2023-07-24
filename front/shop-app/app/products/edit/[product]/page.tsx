import { getCategories, getCategoryIdByName } from "@/data/categories";
import EditForm from "./editForm";
import { getProduct } from "@/data/products";
import { Metadata } from "next";
import Redirect from "@/components/redirect";

export async function generateMetadata({params}:{params:{product:number}}): Promise<Metadata> {
    const product = await getProduct(params.product); 

    return{
        title: `Admin Panel - Edit ${product.name}`,
        description: `Make changes in ${product.name}`
    }
}

const EditProduct = async ({params}:{params:{product:number}}) => {
    const categories = await getCategories(); 
    const product = await getProduct(params.product);
    const categoryId = await getCategoryIdByName(product.category);

    return(
        <>
            <Redirect type="isAdmin"/>
            <EditForm categories={categories} fetchedProduct={product} catId={categoryId}/>
        </>
    )
}

export default EditProduct;