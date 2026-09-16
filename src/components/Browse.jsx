import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Secondrycontainer from "./SecondryContainer";

const Browse = () => {
  
  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <Secondrycontainer /> 

      {/*
        MainContainer:
          - VideoBackground
          - VideoTitle
        Secondrycontainer:
          - MoviesList * n
          - Card * n  

      */}
    </div>
  );
};

export default Browse;
