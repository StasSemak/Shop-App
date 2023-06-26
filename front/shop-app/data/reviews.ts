export async function getReviewsByProduct(id:number) {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/reviews/product/${id}`);
    const reviews = await res.json();
    return Object.values(reviews) as ReviewItem[];
}

export async function getReview(id:number) {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/product/${id}`);
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