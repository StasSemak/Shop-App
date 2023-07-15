'use client';

import HeroIcon from "@/components/icons/heroicon"
import { CategoryItem } from "@/data/categories"
import { imageUrl } from "@/data/images"
import Link from "next/link"
import Image from "next/image"
import axios from "axios";
import { useRouter } from "next/navigation";

const CategoryListItem = ({category}:{category:CategoryItem}) => {
    const router = useRouter();

    const deleteHandler = () => {
        if(confirm(`You surely want to delete category '${category.name}'?`)) {
            axios.delete(`http://shop-next-api.somee.com/api/categories/${category.id}`)
                .then(() => {
                    router.refresh();
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return(
        <div className="grid gap-2 items-center grid-cols-12
            border rounded-md border-blue-600 p-2">
            <div className="flex justify-center">
                <p>{category.id}.</p>
            </div>
            <p className="col-span-2">{category.name}</p>
            <div className="h-20 w-32 relative col-span-3">
                <Image
                    src={imageUrl(category.image)}
                    alt={category.name}
                    fill
                    sizes="20vw"
                    className="object-contain"
                />
            </div>
            <p className="col-span-4">
                {category.description.length > 20 ?
                category.description.substring(0, 20) + '...' :
                category.description}
            </p>
            <div className="flex gap-2 col-span-2 justify-center">
                <Link href={`/categories/${category.id}`}>
                    <HeroIcon icon="ArrowTopRightOnSquare" className="text-blue-600"/>
                </Link>
                <Link href={`/categories/edit/${category.id}`}>
                    <HeroIcon icon="PencilSquare" className="text-blue-600"/>
                </Link>
                <button onClick={deleteHandler}>
                    <HeroIcon icon="Trash" className="text-blue-600"/>
                </button>
            </div>
        </div>
    )
}

export default CategoryListItem