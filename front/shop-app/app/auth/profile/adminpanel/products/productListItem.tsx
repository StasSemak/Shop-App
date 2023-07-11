'use client';

import HeroIcon from "@/components/icons/heroicon";
import { imageUrl } from "@/data/images"
import { ProductItem } from "@/data/products"
import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductListItem = ({product}:{product:ProductItem}) => {
    const router = useRouter();

    const deleteHandler = () => {
        if(confirm(`You surely want to delete product '${product.name}'?`)) {
            axios.delete(`http://shop-next-api.somee.com/api/products/${product.id}`)
                .then(res => {
                    router.refresh();
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return(
        <div className="grid gap-2 items-center grid-cols-12
            border-y-2 border-blue-600 py-1 px-1">
            <p className="text-center">{product.id}.</p>
            <p className="text-center col-span-2">{product.name}</p>
            <div className="h-20 w-32 relative col-span-3">
                <Image
                    src={imageUrl(product.image)}
                    alt={product.name}
                    fill
                    className="object-contain"
                />
            </div> 
            <p className="text-center col-span-2">{product.price}&#8372;</p>
            <div className="flex items-center justify-center col-span-2">
                <p>{product.rating}</p>
                <HeroIcon icon="StarIcon"/>
            </div>
            <div className="flex gap-2 col-span-2 justify-center">
                <Link href={`/products/${product.id}`}>
                    <HeroIcon icon="ArrowTopRightOnSquareIcon" className="text-blue-600"/>
                </Link>
                <Link href={`/products/edit/${product.id}`}>
                    <HeroIcon icon="PencilSquareIcon" className="text-blue-600"/>
                </Link>
                <button onClick={deleteHandler}>
                    <HeroIcon icon="TrashIcon" className="text-blue-600"/>
                </button>
            </div>
        </div>
    )
}

export default ProductListItem