import IconStar from "./assets/images/icon-star.svg?react";
import RatingButton from "./components/RatingButton";

type Props = {
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  setShowThankYouState: React.Dispatch<React.SetStateAction<boolean>>;
};

function RatingState({ rating, setRating, setShowThankYouState }: Props) {
  return (
    <div className="max-w-86 bg-gray-900 px-5 py-7 rounded-xl sm:p-7 sm:max-w-90 sm:rounded-3xl">
      <div className="bg-grey-900 w-fit p-3 rounded-full">
        <IconStar />
      </div>
      <h1 className="text-white text-2xl font-bold mt-4 sm:mt-8">
        How did we do?
      </h1>
      <p className="mt-3 text-pretty">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <ul className="mt-5 flex items-center justify-between leading-0.5">
        {[1, 2, 3, 4, 5].map((num) => (
          <RatingButton
            key={num}
            value={num}
            rating={rating}
            setRating={setRating}
          />
        ))}
      </ul>

      <button
        className="mt-6 w-full p-3 rounded-4xl text-grey-950 font-bold uppercase bg-primary hover:bg-white cursor-pointer transition-colors duration-300"
        onClick={() => setShowThankYouState(prev => !prev)}
      >
        Submit
      </button>
    </div>
  );
}

export default RatingState;
