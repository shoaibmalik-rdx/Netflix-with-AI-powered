import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux" 
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSearch";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate(error,"Error: 404");
      });
  };


   useEffect(() => {
    // when the onAuthStateChanged run? jab user signin/ signup/ signout tab run hota h  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    
      if (user) {
        // Whenever User signin/ signUp this part will executed
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse")
      } else {
        console.log('remove wala');
        // User is signed out this part will executed
        dispatch(removeUser())
        navigate("/")
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe()
  }, []);


  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
    
  }
  
  return (
    <div className="absolute top-0 bg-gradient-to-b from-black/90 z-20 flex justify-between w-full items-center">
      <img
        className=" h-20 w-48 ml-12 "
        src={ LOGO }
        alt="logo"
      />

      {user && <div className="flex mr-10 items-center gap-2">


        { showGptSearch && <select onChange={handleLanguageChange} className="bg-gray-900 p-2 m-2 text-white rounded-md">
          
        {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
          
        </select> }

        <button onClick={handleGptSearchClick} className="bg-cyan-900 active:scale-95 py-2 px-4 rounded-md mx-6 text-white font-bold"> {showGptSearch ? "Home Page" : "Gpt Search"}</button>

        <img className="h-12 w-12 rounded-[50%]" src={user.photoURL} alt="profile-photo" />
        <h2  className="text-2xl font-bold ">
          SignOut
        </h2>
        <LogOut onClick={handleSignOut} className="cursor-pointer" />
      </div>}
    </div>
  );
};

export default Header;
