import IllustrationThankYou from "./assets/images/illustration-thank-you.svg?react";

type Props = {
  rating: number | null;
  setShowThankYouState: React.Dispatch<React.SetStateAction<boolean>>;
};

function ThankYouState({ rating, setShowThankYouState }: Props) {
  return (
    <div
      className="max-w-86 fixed mx-5 flex flex-col items-center gap-6 bg-gray-900 px-5 py-7 rounded-xl sm:px-7 sm:py-10 sm:max-w-90 sm:rounded-3xl"
      onClick={() => setShowThankYouState(false)}
    >
      <IllustrationThankYou width={162} height={108} />

      <p className="text-primary bg-grey-900 py-2 px-4 rounded-4xl w-fit">
        You selected <span>{rating}</span> out of 5
      </p>

      <h1 className="text-white text-2xl font-bold">Thank You!</h1>
      <p className="text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYouState;