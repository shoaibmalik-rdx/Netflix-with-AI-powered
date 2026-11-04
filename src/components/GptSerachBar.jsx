import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import gemini from "../utils/gemini";
import { addGptMoviesResult } from "../utils/gptSlice";
import GptSuggestion from "./GptSuggestion";

const GptSerachBar = () => {
  const gptSearchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const [showSearchMovies, setShowSearchMovies] = useState(0);
  const [ apiError, setApiError ] = useState(false)

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results; // it will return not result, it will return promise
  };

  const handleGptSearchClick = async () => {
    dispatch(addGptMoviesResult({ movieNames: null, movieResults: null }));
    setShowSearchMovies(showSearchMovies + 1);

    // Make an api call to GPT api and get movies
    const gptQuery =
      `Act as a Movie Recommendations System and suggest some movies for the query : 
      ${gptSearchText.current.value} 
      . only give me 8 movies, comma seprated like the example result given ahead. Example Result: Wanted, Don, Golmal, Tiger, Bahubali `;
//gemini-3.8-flash",
    try {
      const gptResults = await gemini.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: gptQuery,
      });
      
      const gptMovies = gptResults.text.split(",");

      // for each movie I will search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      // 5 promise return searchMovieTMDB()
      const tmdbResults = await Promise.all(promiseArray); // promise.all() resolve all 7 promise and return the result in a array
      dispatch(
        addGptMoviesResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        }),
      );
    } catch {
      setApiError(true)
    }
  };

  return (
    <div>
      <div className="relative min-h-screen h-full overflow-hidden ">
        <img
          className="absolute top-0 h-screen w-full object-cover"
          src="https://occ-0-852-37.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
          alt="bg-search"
        />

        <div
          className="
      absolute inset-0 
      bg-[#030000]
      before:absolute
      before:left-1/2
      before:top-1/2
      before:h-[300px]
      before:w-[500px]
      before:-translate-x-1/2
      before:-translate-y-1/2
      before:rounded-full
      before:bg-[#430e12]
      before:blur-[100px]
    "
        ></div>

        <div className="relative flex min-h-screen bg-transparent items-center justify-center px-4">
          <div className="w-full max-w-4xl text-center">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-3xl lg:text-5xl">
              {lang[langKey].gptSearchHeading}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm  text-gray-400 sm:text-base md:text-lg">
              {lang[langKey].gptSearchPara}
            </p>

            {/* Search Bar */}
            <form
              className="
            mx-auto mt-8 flex w-full max-w-2xl
            items-center
            rounded-full
          bg-white/5
            backdrop-blur-md
            border border-gray-600/50
            p-1.5 sm:p-2
            shadow-2xl
            focus-within:border-red-600
            transition
          "
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Search Icon */}
              <span className="px-3 rotate-[-80deg] pt-2 text-gray-400 text-2xl">
                ⌕
              </span>

              {/* Input */}
              <input
                ref={gptSearchText}
                type="text"
                className="
              min-w-0 flex-1
              bg-transparent
              px-1 py-3
              text-sm text-white font-semibold
              outline-none
              sm:text-base
              placeholder:text-gray-500
            "
                placeholder={lang[langKey].gptSearchPlaceholder}
              />

              {/* Search Button */}
              <button
                onClick={handleGptSearchClick}
                className="
              shrink-0
              rounded-full
              bg-[#db000a]
              px-6 py-3
              text-sm font-semibold text-white
              transition
              hover:bg-red-700
              sm:px-7
              sm:text-base
              ml-2 flex gap-2 items-center
              active:scale-95
              
            "
              >
                <p className="sm:block hidden">{lang[langKey].search}</p>➜
              </button>
            </form>
          </div>
        </div>
      </div>

      {}
      {apiError ? <h1 className="sm:-mt-64 -mt-[260px] mx-4 text-[#af0008] relative z-20 sm:text-3xl text-xl font-bold text-center">Api is not working, Please try again</h1> : showSearchMovies ? <GptSuggestion /> : null}
    </div>
  );
};

export default GptSerachBar;
