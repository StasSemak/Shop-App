export async function getBasket(userId: number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/baskets/${userId}`);
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