import { getLoggedUserId } from "./users";

export async function getProducts(id:number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/products/category/${id}`);
    const products = await res.json();
    return products as ProductItem[];
}

export async function getAllProducts() {
    const res = await fetch(`http://shop-next-api.somee.com/api/products`);
    const products = await res.json();
    return products as ProductItem[]; 
}

export async function getProduct(id:number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/products/${id}`)
    const product = await res.json();
    return product as ProductItem;
}

export async function getProductBySearchInput(input: ProductSearchInput) {
    const res = await fetch(`http://shop-next-api.somee.com/api/products/search`,
        {
            headers: {
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(input)
        }
    );
    const products = await res.json();
    return products as ProductItem[];
}

export async function getIsProductInBasket(productId: number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/baskets/product`,
        {
            headers: {
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({userId: getLoggedUserId(), productId: productId})
        }
    );
    const isInBasket = await res.json() as {isInBasket: boolean};
    return isInBasket.isInBasket;
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