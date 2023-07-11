'use server';

import Reviews from "@/components/reviews/reviews";
import { imageUrl } from "@/data/images";
import { getProduct } from "@/data/products";
import Buttons from "./buttons";
import Rating from "./rating";
import Image from "next/image";

async function Product ({params} : {params: {product:number}}) {
    const product = await getProduct(params.product);

    return(
        <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <div className="flex gap-7 mb-4">
                <div className="w-80 h-60 relative">
                    <Image
                        src={imageUrl(product.image)}
                        alt={product.name} 
                        className="object-contain"
                        fill
                    />
                </div>
                <div>
                    <p className="text-2xl">{product.price}&#8372;</p>
                    <p className="mb-1">{product.category}</p>
                    <Rating rating={product.rating}/>
                    <Buttons id={product.id}/>
                </div>
            </div>
            <p className="mb-5">{product.description}</p>
            <Reviews productId={product.id}/>
        </div>
    )
}

export default Product;