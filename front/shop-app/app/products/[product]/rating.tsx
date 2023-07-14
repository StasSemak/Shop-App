import HeroIcon from "@/components/icons/heroicon"

const Rating = ({rating}:{rating:number}) => {
    let solidCount: number, outlineCount: number;
    if(rating === Math.floor(rating)) {
        solidCount = rating;
        outlineCount = 5 - rating;
    }
    else {
        solidCount = Math.floor(rating);
        outlineCount = 4 - solidCount;
        if(rating - Math.floor(rating) >= 0.5) {
            solidCount++;
        }
        else outlineCount++;
    }

    return(
        <div className="flex mb-3">
                {[...Array(solidCount)].map((e, i) => (
                    <HeroIcon key={i} icon="Star" solid className="text-amber-400"/>
                ))}
                {[...Array(outlineCount)].map((e, i) => (
                    <HeroIcon key={i} icon="Star" className="text-amber-400"/>
                ))}
        </div>
    )
}

export default Rating