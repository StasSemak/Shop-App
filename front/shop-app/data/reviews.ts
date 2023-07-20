import { GLOBAL_SERVER } from "@/env/env";

export async function getReviewsByProduct(id:number) {
    const res = await fetch(`${GLOBAL_SERVER}/api/reviews/product/${id}`, { cache: 'no-store' });
    const reviews = await res.json();
    return reviews as ReviewItem[];
}

export async function getReview(id:number) {
    const res = await fetch(`${GLOBAL_SERVER}/api/reviews/${id}`);
    const review = await res.json();
    return review as ReviewItem;
}

export interface ReviewItem {
    id: number;
    text: string;
    mark: number;
    date: string;
    username: string;
    userId: number;
}

export interface CreateReviewItem {
    text: string;
    mark: number;
    productId: number;
    userId: number;
}