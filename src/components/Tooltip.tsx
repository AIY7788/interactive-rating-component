type Props = {
  rating: number | null;
  showThankYouState: boolean;
  message: string;
};

function Tooltip({ rating, showThankYouState, message }: Props) {
  return (
    <div
      className={`absolute bottom-12 left-1/2 -translate-x-1/2 mb-3
      opacity-0 shadow-2xl transition-opacity duration-200 pointer-events-none ${showThankYouState && !rating && "opacity-100"}`}
    >
      <div className="relative w-60 bg-white text-primary text-center text-sm px-4 py-2 rounded-4xl sm:w-fit sm:whitespace-nowrap">
        {message}
        {/* Arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
      </div>
    </div>
  );
}

export default Tooltip;
