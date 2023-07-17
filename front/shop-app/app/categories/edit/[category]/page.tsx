import { Metadata } from "next";
import EditForm from "./editForm";
import { getCategory } from "@/data/categories";

export async function generateMetadata({params} : {params: {category:number}}): Promise<Metadata> {
    const category = await getCategory(params.category); 
    
    return{
        title: `Admin Panel - Edit ${category.name}`,
        description: `Make changes in ${category.name}`
    }
}

const EditCategory = ({params}:{params:{category:number}}) => {
    return(
        <EditForm categoryId={params.category}/>
    )
}

export default EditCategory