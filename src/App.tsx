import { useState } from "react";
import ThankYouState from "./ThankYouState";
import RatingState from "./RatingState";

function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [showThankYouState, setShowThankYouState] = useState(false);

  return (
    <div className="min-h-screen relative bg-grey-950 font-overpass font-regular text-body text-grey-500 flex items-center justify-center p-5">
      {showThankYouState ? (
        <ThankYouState
          rating={rating}
          setShowThankYouState={setShowThankYouState}
        />
      ) : (
        <RatingState
          rating={rating}
          setRating={setRating}
          setShowThankYouState={setShowThankYouState}
        />
      )}
    </div>
  );
}

export default App;
