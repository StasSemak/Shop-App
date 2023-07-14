export async function getBasket(userId: number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/baskets/${userId}`);
    const basket = res.json();
    return basket as unknown as BasketItem[];
}

export interface BasketItem {
    productId: number;
    name: string;
    image: string;
    price: number;
    count: number;
}