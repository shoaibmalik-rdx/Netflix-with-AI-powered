import { useState } from "react";
import star from "../assets/star.png";
import { IMG_CDN_URL } from "../utils/constants";
import ShowMovieDetail from "./ShowMovieDetail";

const MovieCard = ({ movieDetails }) => {
const [showMovieScreen, setShowMovieScreen] = useState(false)
  const clickMovieShow = () => {
    
    setShowMovieScreen(true)
  }


  return (
    <div>
      {movieDetails.poster_path && (
        <div className="shrink-0 md:w-48 w-32 overflow-hidden rounded-md relative">
          <div className="overflow-hidden rounded-md">
            <img onClick={clickMovieShow}
              className="md:h-72 h-48 w-full rounded-md hover:scale-110 duration-200 ease-linear shrink-0"
              src={IMG_CDN_URL + movieDetails.poster_path}
              alt="movie-card"
            />
          </div>
          <div className="flex gap-1 items-center  absolute bottom-[42px] left-1 bg-black py-1 px-2 rounded-md text-[11px] font-semibold">
            <img className="h-2 w-2" src={star} alt="star" />
            {movieDetails.vote_average.toFixed(1)}
          </div>
          <p className="mt-3 truncate">{movieDetails.title}</p>
        </div>

        
      )}
      {showMovieScreen && <ShowMovieDetail movieDetails={movieDetails} showMovieScreen={setShowMovieScreen} />}
    </div>
  );
};

export default MovieCard;
