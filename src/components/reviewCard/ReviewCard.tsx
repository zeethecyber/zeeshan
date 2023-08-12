import StarIcon from "../../icons/star";

interface IReviewCard {
  name: string;
  country: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
}
function ReviewCard({ name, country, review, rating }: IReviewCard) {
  return (
    <div className="border border-gray-1 flex flex-col">
      <div className="py-2 px-6 border-b border-gray-1 flex justify-between items-center">
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-gray-1">{country}</p>
      </div>
      <div className="py-2 px-6 flex flex-col justify-between h-full">
        <p className="text-white">{review}</p>
        <div className="flex justify-end">
          <div className="text-white flex gap-2 mt-5">
            {Array.from({ length: rating }).map((item, index) => {
              return <StarIcon className="h-4 w-4" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
