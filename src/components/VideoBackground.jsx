//import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Shimmer from "./Shimmer";
import VideoTitle from "./VideoTitle";
import SecondryContainer from "./SecondryContainer";

const VideoBackground = ({ movie, trailer }) => {
  const mainMovie = movie[0];
  const { original_title, overview, id } = mainMovie;

  useMovieTrailer(id);

  return (
    <div>
      {!trailer ? (
        <Shimmer className="h-screen" />
      ) : (
        <>
        <div className="relative lg:h-screen md:h-[80vh]  h-[70vh]">

          <div className="w-full h-full absolute bg-black overflow-hidden  top-0 left-0 z-30">
            <iframe
              className="inset-0 object-center absolute top-1/2 left-1/2 w-[max(100vw, 177.78vh)] h-[max(56.25vw, 100vh )] min-w-full min-h-full md:scale-180 scale-350 -translate-x-1/2 -translate-y-1/2 "
              src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&controls=0&rel=0&loop=1&plalist=${trailer?.key}&playsinline=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <VideoTitle title={original_title} overview={overview} />
          </div>
        </div>

          <SecondryContainer />
        </>
      )}
    </div>
  );
};

export default VideoBackground;
