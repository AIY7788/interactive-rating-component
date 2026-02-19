type Props = {
  value: number;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
};

function RatingButton({ value, rating, setRating }: Props) {
  const isActive = rating === value;

  return (
    <li>
      <button
        className={`w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-300 ${isActive ? "bg-white text-grey-950" : "bg-grey-900 hover:bg-primary hover:text-grey-950"} cursor-pointer`}
        onClick={() => setRating(value)}
      >
        {value}
      </button>
    </li>
  );
}

export default RatingButton;