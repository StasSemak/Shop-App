'use server';

import { ReviewItem, getReviewsByProduct } from "@/data/reviews";
import ReviewCard from "./reviewCard";

const testReview: ReviewItem = {
    id: 0,
    text: "very very so very large review text. product is good, liked it sooo much. recommend to aquire it for everyone who has any doubts",
    mark: 3,
    date: "18.06.2023",
    username: "iampaidforreviews",
    userId: 0
}

async function Reviews({productId}:{productId:number}) {
    const reviews = await getReviewsByProduct(productId);

    return (
        <div>
            <h2 className="text-xl mb-1">Reviews</h2>
            <div className="flex flex-col gap-3">
                {reviews.length === 0 && 
                    <p className="text-center">There's no reviews yet</p>
                }
                {reviews.map((item, index) => (
                    <ReviewCard review={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Reviews