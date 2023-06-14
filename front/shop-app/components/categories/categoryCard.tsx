'use client'

const CategoryCard = ({name, imagePath} : {name:string, imagePath:string}) => {
    return(
        <div className="flex flex-col items-center w-64 border-2 rounded-xl pb-1 
            bg-white border-gray-200 hover:bg-gray-200 hover:scale-105 transition-all">
            <div className="w-full h-40">
                <img 
                    src={`https://localhost:7187/images/${imagePath}`} 
                    className="h-full w-full object-cover object-center rounded-lg"
                />
            </div>
            <p className="pt-1">{name}</p>
        </div>
    )
}

export default CategoryCard;