import { useState, useEffect } from "react";
import ThankYouState from "./ThankYouState";
import RatingState from "./RatingState";

function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [showThankYouState, setShowThankYouState] = useState(false);

  useEffect(() => {
    if (!rating && showThankYouState) {
      const timeoutID = setTimeout(() => {
        setShowThankYouState(false);
      }, 1500);

      return () => clearTimeout(timeoutID);
    }
  }, [rating, showThankYouState]);

  return (
    <div className="min-h-screen relative bg-grey-950 font-overpass font-regular text-body text-grey-500 flex items-center justify-center p-5">
      {showThankYouState && rating ? (
        <ThankYouState
          rating={rating}
          setShowThankYouState={setShowThankYouState}
        />
      ) : (
        <RatingState
          rating={rating}
          setRating={setRating}
          setShowThankYouState={setShowThankYouState}
          showThankYouState={showThankYouState}
        />
      )}
    </div>
  );
}

export default App;
