'use server'

const Category = ({params} : {params: {category:number}}) => {
    return(
        <div>
            <h1>Category {params.category}</h1>
        </div>
    )
}

export default Category;