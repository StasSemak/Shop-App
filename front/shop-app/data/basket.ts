import { GLOBAL_SERVER } from "@/env/env";

export async function getBasket(userId: number) {
    const res = await fetch(`${GLOBAL_SERVER}/api/baskets/${userId}`);
    const basket = await res.json();
    return basket as BasketItem[];
}

export interface BasketItem {
    productId: number;
    name: string;
    image: string;
    price: number;
    count: number;
}