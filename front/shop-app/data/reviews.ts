export async function getReviewsByProduct(id:number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/reviews/product/${id}`);
    const reviews = await res.json();
    return Object.values(reviews) as ReviewItem[];
}

export async function getReview(id:number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/reviews/${id}`);
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