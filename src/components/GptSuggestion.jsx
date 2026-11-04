import { useSelector } from "react-redux";
import Shimmer from "./Shimmer"
import MovieCard from "./MovieCard";
const GptSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  //if (!movieNames) return null;
  return (
    <div className=" bg-black p-4 pb-10 -mt-56">

    {!movieNames ? <Shimmer className="h-[20vh] bg-transparent" /> : 
    <div className="relative sm:px-4 overflow-hidden max-w-[1600px] mx-auto">
      <h1 className="text-3xl font-bold my-6 2xl:ml-[2px] text-white">Search Results</h1>
      <div className="flex sm:gap-6 gap-3 2xl:justify-start justify-start overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {movieNames.map((movieName, index) => (
          <MovieCard 
            key={movieName}
            movieDetails={movieResults[index][0]}
          />
        ))}
      </div>
    </div>
    
    }

    </div>
  );
};

export default GptSuggestion;
