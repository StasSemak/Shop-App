import { Metadata } from "next";
import AddReviewPage from "./addReviewPage"
import { getProduct } from "@/data/products";

export async function generateMetadata({params} : {params: {product:number}}): Promise<Metadata> {
    const product = await getProduct(params.product);

    return{
        title: `Add review for ${product.name}`,
        description: `Express your opinion about ${product.name}`
    }
}

const AddReview = ({params} : {params: {product:number}}) => {
    return(
        <AddReviewPage productId={params.product}/>        
    )
}

export default AddReview