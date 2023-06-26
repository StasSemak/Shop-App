'use client';

import { getImageUrl } from "@/data/images";
import { ProductItem } from "@/data/products";

function ProductCard ({product} : {product:ProductItem}) {
    return(
        <div className="flex flex-col gap-1 border-gray-200 border-2 w-56 h-64 p-2
            hover:scale-105 transition-all">
            <div className="h-40 flex items-center">
                <img 
                    src={getImageUrl(product.image)} 
                    alt={product.name} 
                    className="mx-auto max-h-40"
                />
            </div>
            <h2 className="text-md ml-1 mt-2">{product.name}</h2>
            <p className="text-xl ml-1">{product.price}&#8372;</p>
        </div>
    )
}

export default ProductCard;