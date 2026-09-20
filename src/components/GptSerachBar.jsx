import { useSelector } from "react-redux";
import { NETFLIX_BG } from "../utils/constants";
import lang from "../utils/languageConstants";

const GptSerachBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className="pt-[10%]">
      <img
        className="absolute top-0 -z-10 h-screen w-full"
        src={NETFLIX_BG}
        alt="bg"
      />
      <form className=" bg-black w-1/2 flex mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-3 m-4 w-full border-2 border-white rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-3 w-1/4 m-4 text-2xl font-semibold bg-red-700 text-white rounded-md ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSerachBar;
