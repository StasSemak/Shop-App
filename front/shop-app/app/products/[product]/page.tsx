'use server';

import Reviews from "@/components/reviews/reviews";
import { getImageUrl } from "@/data/images";
import { getProduct } from "@/data/products";

async function Product ({params} : {params: {product:number}}) {
    const product = await getProduct(params.product);

    return(
        <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <div className="flex gap-7 mb-4">
                <div className="w-80 h-60 flex items-center">
                    <img 
                        src={getImageUrl(product.image)} 
                        alt={product.name} 
                        className="mx-auto max-h-60"
                    />
                </div>
                <div>
                    <p className="text-2xl">{product.price}&#8372;</p>
                    <p>Rating: {product.rating}</p>
                    <p>{product.category}</p>
                </div>
            </div>
            <p className="mb-5">{product.description}</p>
            <Reviews productId={product.id}/>
        </div>
    )
}

export default Product;