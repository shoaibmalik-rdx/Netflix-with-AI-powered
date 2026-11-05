import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LogOut, Search, House } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector(store => store.config.lang)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate(error, "Error: 404");
      });
  };

  useEffect(() => {
    // when the onAuthStateChanged run? jab user signin/ signup/ signout tab run hota h
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Whenever User signin/ signUp this part will executed
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out this part will executed
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };



  return (
    <div className="absolute sm:pt-3 pt-1 top-0 bg-gradient-to-b from-black/90 z-50 flex justify-between w-full items-center">
      <img
        className=" sm:h-20 h-12 sm:w-48 w-30 sm:ml-2 ml-0 "
        src={LOGO}
        alt="logo"
      />
  
     {/* <h1 className="sm:text-4xl text-3xl font-bold text-red-600 sm:ml-12 ml-2 mb-2">Netsflix</h1> */}

      {user && (
        <div className="flex sm:mr-6 mr-2 items-center sm:gap-x-4 gap-x-2">
            <select
              onChange={handleLanguageChange}
              className="sm:relative absolute bg-black border-[1px] border-gray-600 outline-none sm:p-[9px] px-2 py-1 sm:top-0 sm:right-0 top-13 right-2 text-white rounded-md"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.name} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleGptSearchClick}
              className="flex gap-2 hover:bg-red-700 bg-red-500 py-2 items-center active:scale-95  px-3 rounded-md cursor-pointer text-white font-semibold"
            >
              {showGptSearch ? <House className=" sm:h-5 h-3 sm:w-5 w-4" /> : <Search className=" sm:h-5 h-3 sm:w-5 w-4" /> }
              
              
              <a className="sm:block hidden">
                {showGptSearch ? `${lang[langKey].homePageBtn}` : `Gpt ${lang[langKey].search} `}
              </a>
            </button>

            <div
              onClick={handleSignOut}
              className="cursor-pointer hover:bg-red-700 bg-red-500 rounded-md sm:px-4 flex items-center"
            >
              <LogOut className="sm:block hidden h-5 w-5" />
              <h2 className="sm:text-base text-sm  px-2 sm:py-2  py-[4px] font-semibold ">
                {lang[langKey].signOut}
              </h2>
            </div>
        </div>
      )}
    </div>
  );
};

export default Header;
