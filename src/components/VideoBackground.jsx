

import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movies.addTrailerVideo)

  useMovieTrailer(movieId)

  return (
    <div className="w-full h-screen absolute bg-yellow-400 overflow-hidden  top-0 left-0 z-0">
      <iframe
        className="w-full scale-150 aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
