import IconStar from "./assets/images/icon-star.svg?react";
import RatingButton from "./components/RatingButton";
import Tooltip from "./components/Tooltip";

type Props = {
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  showThankYouState: boolean;
  setShowThankYouState: React.Dispatch<React.SetStateAction<boolean>>;
};

function RatingState(
  { rating, setRating, showThankYouState, setShowThankYouState }: Props
) {
  return (
    <div className="max-w-86 bg-radial-[at_50%_20%] from-grey-800 to-grey-900 px-5 py-7 rounded-xl sm:p-7 sm:max-w-90 sm:rounded-3xl">
      <div className="bg-grey-800 w-fit p-3 rounded-full">
        <IconStar />
      </div>
      <h1 className="text-white text-2xl font-bold mt-4 sm:mt-8">
        How did we do?
      </h1>
      <p className="mt-3 text-pretty">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>

      <div className="relative">
        <ul className="mt-5 flex items-center justify-between leading-0.5">
          {[1, 2, 3, 4, 5].map((num) => (
            <RatingButton
              key={num}
              value={num}
              rating={rating}
              showThankYouState={showThankYouState}
              setRating={setRating}
            />
          ))}
        </ul>

        <Tooltip
          rating={rating}
          showThankYouState={showThankYouState}
          message={"Please select a rating before submitting."}
        />
      </div>

      <button
        className={`mt-6 w-full p-3 rounded-4xl text-grey-950 font-bold uppercase tracking-widest bg-primary transition-colors duration-300 ${showThankYouState && !rating ? "opacity-60 pointer-events-none" : "cursor-pointer hover:bg-white"}`}
        onClick={() => setShowThankYouState((prev) => !prev)}
      >
        Submit
      </button>
    </div>
  );
}

export default RatingState;
