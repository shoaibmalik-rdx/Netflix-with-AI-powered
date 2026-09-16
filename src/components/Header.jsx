import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux" 
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constants"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  //console.log(user);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
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

  return (
    <div className="absolute top-0 bg-gradient-to-b from-black/90 z-20 flex justify-between w-full items-center">
      <img
        className=" h-20 w-48 ml-12 "
        src={ LOGO }
        alt="logo"
      />

      {user && <div className="flex mr-10 items-center gap-2">
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
