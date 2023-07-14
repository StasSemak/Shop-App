'use client';

import { imageUrl } from "@/data/images";
import { ProductItem } from "@/data/products";
import Image from "next/image"

function ProductCard ({product} : {product:ProductItem}) {
    return(
        <div className="flex flex-col gap-1 border-blue-600 border w-56 h-64 p-2
            hover:scale-105 transition-all rounded-md">
            <div className="h-40 relative">
                <Image
                    src={imageUrl(product.image)}
                    alt={product.name}
                    className="object-contain"
                    fill
                    sizes="33vw"
                />
            </div>
            <h2 className="text-md ml-1 mt-2">{product.name}</h2>
            <p className="text-xl ml-1">{product.price}&#8372;</p>
        </div>
    )
}

export default ProductCard;