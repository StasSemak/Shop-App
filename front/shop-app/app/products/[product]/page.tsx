import Reviews from "@/components/reviews/reviews";
import { imageUrl } from "@/data/images";
import { getProduct } from "@/data/products";
import Buttons from "./buttons";
import Rating from "./rating";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({params} : {params: {product:number}}): Promise<Metadata> {
    const product = await getProduct(params.product);

    return{
        title: product.name,
        description: `Explore and order ${product.name}`
    }
}

async function Product ({params} : {params: {product:number}}) {
    const product = await getProduct(params.product);

    return(
        <div>
            <h1 className="text-3xl font-semibold xs:mb-4 mb-2">{product.name}</h1>
            <div className="flex xs:flex-row flex-col xs:gap-7 lg:gap-14 mb-4">
                <div className="xs:w-80 h-60 lg:w-[480px] lg:h-[360px] relative mb-2">
                    <Image
                        src={imageUrl(product.image)}
                        alt={product.name} 
                        className="object-contain"
                        fill
                        sizes="50vw"
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