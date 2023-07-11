import { getCategories } from "@/data/categories";
import CreateForm from "./createForm";

const CreateProduct = async () => {
    const categories = await getCategories();

    return(
        <CreateForm categories={categories}/>
    )
}

export default CreateProduct;