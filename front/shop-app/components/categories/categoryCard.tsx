'use client'

import { imageUrl } from "@/data/images";
import Image from "next/image"

const CategoryCard = ({name, imagePath} : {name:string, imagePath:string}) => {
    return(
        <div className="flex flex-col items-center w-64 border-2 rounded-xl pb-1 
            bg-white border-gray-200 hover:bg-gray-200 hover:scale-105 transition-all">
            <div className="w-full h-40 relative">
                <Image
                    src={imageUrl(imagePath)}
                    alt={name}
                    className="object-cover rounded-lg"
                    fill
                />
            </div>
            <p className="pt-1">{name}</p>
        </div>
    )
}

export default CategoryCard;