import { getCategories, getCategoryIdByName } from "@/data/categories";
import EditForm from "./editForm";
import { getProduct } from "@/data/products";

const EditProduct = async ({params}:{params:{product:number}}) => {
    const categories = await getCategories(); 
    const product = await getProduct(params.product);
    const categoryId = await getCategoryIdByName(product.category);

    return(
        <EditForm categories={categories} fetchedProduct={product} catId={categoryId}/>
    )
}

export default EditProduct;