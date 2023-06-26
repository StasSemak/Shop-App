import { ReviewItem } from "@/data/reviews";
import { HeroIcon } from "../icons/heroicon";

function ReviewCard({review}:{review:ReviewItem}) {
    return(
        <div className="border-2 border-blue-500 p-3 rounded">
            <div className="flex justify-between">
                <p style={{marginLeft: 2}}>{review.username}</p>
                <p>{review.date}</p>
            </div>
            <div className="flex mb-1">
                {[...Array(review.mark)].map((e, i) => (
                    <HeroIcon key={i} icon="StarIcon" solid className="text-amber-400"/>
                ))}
                {[...Array(5 - review.mark)].map((e, i) => (
                    <HeroIcon key={i} icon="StarIcon" className="text-amber-400"/>
                ))}
            </div>
            <p>{review.text}</p>
        </div>
    )
}

export default ReviewCard