import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
//import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies);
  const movie = movies?.nowPlayingMovies
  const trailer = movies?.addTrailerVideo
  if (!movie) return;

  
  return (
        <div className="  bg-black-800 relative">
            <VideoBackground movie={movie} trailer={trailer} />
        </div>
  );
};

export default MainContainer;
