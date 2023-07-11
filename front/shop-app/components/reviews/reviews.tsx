'use server';

import { getReviewsByProduct } from "@/data/reviews";
import ReviewCard from "./reviewCard";

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