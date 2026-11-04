const Shimmer = ({className}) => {
  return (
    <div className={className}>
      <div className="h-full relative z-50  flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center  text-center">
          <div className="w-14 h-14 sm:w-20 sm:h-16 border-4 border-gray-700 border-t-red-700 border-l-red-700 rounded-full animate-spin"></div>

          <h2 className="mt-6 text-xl sm:text-6xl font-semibold text-white">
            Loading
            <span className="inline-flex ml-1">
              <span className="animate-bounce [animation-delay:0ms]">.</span>
              <span className="animate-bounce [animation-delay:150ms]">.</span>
              <span className="animate-bounce [animation-delay:300ms]">.</span>
            </span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Please wait while we load your data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
