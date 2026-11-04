import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
//import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 // const showGptSearch = gpt.showGptSearch;
  //const trailer = movies.addTrailerVideo;
  // const trailer = useSelector((store) => store.movies.addTrailerVideo);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      <Header />
      {showGptSearch ? <GptSearch /> : <MainContainer />}

      
    </div>
  );
};

export default Browse;


{/*
        MainContainer:
          - VideoBackground
          - VideoTitle
        Secondrycontainer:
          - MoviesList * n
          - Card * n  
  
      */}