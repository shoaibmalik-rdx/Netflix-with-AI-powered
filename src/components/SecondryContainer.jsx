import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return ( 
    movies.nowPlayingMovies && (
        <div className=" text-white bg-black -mt-48 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Trending now"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
    )
  );
};

export default SecondryContainer;
