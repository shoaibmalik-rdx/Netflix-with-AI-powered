
import { Play, CircleAlert } from "lucide-react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
    const langKey = useSelector(store => store.config.lang)

  return (
    <div className="lg:h-screen md:h-[80vh]  h-[70vh]  md:pl-12 pl-3 w-full lg:pt-96 md:pt-80 pt-72 relative  z-10 bg-gradient-to-r from-black/80">
      <h1 className="md:text-6xl sm:text-3xl  text-2xl font-bold ">{title}</h1>
      <p
        className="my-6  line-clamp-2 text-xs sm:text-sm md:text-lg max-w-[500px]"
      >
        {overview}
      </p>
      <div className="flex gap-x-3">
        <button className="font-bold hover:opacity-70 flex gap-1 justify-center items-center bg-red-500 text-black sm:px-12 px-3 sm:py-3 py-2 sm:text-xl text-sm rounded-md ">
          <Play className="sm:h-5 h-4 sm:pt-[2px]" />
          <a>{lang[langKey].play}</a> 
        </button>
        <button className=" flex items-center justify-center gap-1 sm:px-10 px-2 sm:text-xl text-sm hover:opacity-80 bg-[#4a515c] text-white font-semibold  rounded-md sm:py-3 py-2">
          <CircleAlert className="sm:h-5 h-4 sm:pt-[2px]" />
          <a>{lang[langKey].moreInfo}</a>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
