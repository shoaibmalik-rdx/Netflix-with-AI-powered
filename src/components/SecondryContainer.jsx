import MovieList from "./MovieList";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector(store => store.config.lang)

  return ( 
    movies.nowPlayingMovies && (
        <div className=" text-white pb-8 bg-black relative z-70">
            <MovieList title={lang[langKey].nowPlayingMovies} movies={movies.nowPlayingMovies} />
            <MovieList title={lang[langKey].trendingNowMovies} movies={movies.popularMovies} />
            <MovieList title={lang[langKey].topRatedMovies} movies={movies.topRatedMovies} />
            <MovieList title={lang[langKey].upcomingMovies} movies={movies.upcomingMovies} />
        </div>
    )
  );
};

export default SecondryContainer;
