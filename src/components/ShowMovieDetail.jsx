import { IMG_CDN_URL } from "../utils/constants";

const ShowMovieDetail = ({ movieDetails, showMovieScreen }) => {
  
  const RemoveMovieDetails = () => {
    showMovieScreen(false);
  };

  return (
    <div className="relative">
      <div className="bg-transparent inset-0 backdrop-blur-sm h-screen w-screen top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fixed  z-100">
        <div onClick={RemoveMovieDetails}
          className="h-screen w-screen px-6 flex justify-center items-center
         bg-transparent  backdrop-blur-sm fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30"
        >
          <div onClick={(e) => e.stopPropagation()} className="max-h-[88vh] bg-[#111313] max-w-[80vh] rounded-2xl w-full">
            {/* Top Backdrop Image */}
            <div className="sm:h-64 h-56 relative">
              <img
                src={IMG_CDN_URL + movieDetails.backdrop_path} // Yahan backdrop image ka URL dena
                alt="Movie backdrop"
                className=" rounded-t-2xl h-full w-full object-cover"
              />

              {/* Close Button */}
              <button
                onClick={RemoveMovieDetails}
                className="absolute right-2 top-2 flex h-10 pb-1 w-10 items-center justify-center rounded-full bg-[#2d3234] text-xl text-white transition 1s hover:bg-black"
              >
                &times;
              </button>
            </div>

            {/* Movie Details Section */}
            <div className="relative px-5 pb-6 sm:px-8 md:px-10">
              {/* Poster + Movie Information */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                {/* Movie Poster */}
                <div className="-mt-20 w-28 sm:h-56 h-44 shrink-0  overflow-hidden rounded-lg border border-white/10 shadow-xl sm:-mt-20 sm:w-36 md:w-40">
                  <img
                    src={IMG_CDN_URL + movieDetails.poster_path}
                    alt="Movie poster"
                    className="h-full w-full "
                  />
                </div>

                {/* Title and Rating */}
                <div className="min-w-0 flex-1 sm:pt-4">
                  <h1 className="text-base font-extrabold tracking-tight sm:text-xl md:text-2xl">
                    {movieDetails.title}
                  </h1>

                  {/* Rating, Votes, Year, Language */}
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-white/90 sm:gap-x-4 ">
                    <span className="flex items-center gap-1.5">
                      <span className="text-base text-[#ff6b61]">★</span>
                      {movieDetails.vote_average} <span className="text-gray-700 text-sm">({movieDetails.vote_count})</span>
                    </span>

                    <span className="text-white/50">•</span>

                    <span>2026</span>

                    <span className="text-white/50">•</span>

                    <span className="uppercase">{movieDetails.original_language}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mt-4 sm:mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wide text-yellow-800 sm:text-base">
                  Overview
                </h2>

                <p className="mt-1 text-sm line-clamp-3 leading-6 text-white/90 sm:leading-5 md:text-sm">
                 {movieDetails.overview}
                </p>
              </div>

              {/* Movie Additional Information */}
              <div className="mt-6 flex  gap-x-6 gap-y-3 sm:mt-8  sm:gap-20">
                {/* Popularity */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
                    Popularity
                  </h3>
                  <p className="mt-1 uppercase text-sm font-bold">{movieDetails.popularity}</p>
                </div>

                {/* Language */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
                    Language
                  </h3>
                  <p className="mt-1 uppercase text-sm font-bold ">{movieDetails.original_language}</p>
                </div>

                {/* Release Date */}
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
                    Release
                  </h3>
                  <p className="mt-1 text-sm font-bold ">{movieDetails.release_date}</p>
                </div>
              </div>

              {/* Play Button */}
              <button className="mt-5 flex w-full items-center justify-center py-2 gap-2 rounded-md bg-[#ff5c52] px-5 text-base font-bold text-white shadow-md transition duration-200 hover:bg-[#ff453a] active:scale-[0.99] sm:mt-10 sm:py-2 sm:text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M6 4.75c0-.77.84-1.25 1.5-.87l12 7.25a1.02 1.02 0 0 1 0 1.74l-12 7.25A1 1 0 0 1 6 19.25V4.75Z" />
                </svg>
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovieDetail;
