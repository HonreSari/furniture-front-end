import { Icons } from "@/Components/icons";

interface RationProps {
    rating : number;
}

export function Rating({ rating }: RationProps) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < rating;
        return (
            <Icons.star
                key={index}
                className={`h-4 w-4 ${isFilled ? "text-yellow-500" : "text-gray-300"}`}
            />
        );
    });

    return (
        <div className="flex items-center gap-1">
            {stars}
            <span className="text-sm text-gray-500">({rating})</span>
        </div>
    );
}