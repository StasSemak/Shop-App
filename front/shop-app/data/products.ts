export async function getProducts(id:number) {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/products/category/${id}`);
    const products = await res.json();
    return Object.values(products) as ProductItem[];
}

export async function getProduct(id:number) {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/products/${id}`)
    const product = await res.json();
    return product as ProductItem;
}

export async function getProductBySearchInput(input: ProductSearchInput) {
    const res = await fetch(`https://localhost:7187/api/products/search`,
        {
            headers: {
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(input)
        }
    );
    const products = await res.json();
    return Object.values(products) as ProductItem[];
}

export interface ProductItem {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    category: string;
}

export interface ProductSearchInput {
    name: string;
    categoryId: number;
    maxPrice: number;
    minPrice: number;
}