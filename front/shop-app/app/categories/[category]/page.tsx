'use server'

import ProductCard from "@/components/products/productCard";
import { getCategory } from "@/data/categories";
import { getImageUrl } from "@/data/images";
import { getProducts } from "@/data/products";
import Link from "next/link";

async function Category ({params} : {params: {category:number}}) {
    const category = await getCategory(params.category);
    const products = await getProducts(params.category);

    return(
        <div>
            <div className="flex gap-4 mb-4">
                <div className="h-32 w-52">
                    <img 
                        src={getImageUrl(category.image)} 
                        alt={category.name}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div>
                    <h1 className="text-4xl mb-2 font-semibold">{category.name}</h1>
                    <p className="text-gray-500">{category.description}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 flex-wrap">
                {products.map((item, index) => (
                    <Link key={index} href={`/products/${item.id}`}>
                        <ProductCard product={item}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Category;