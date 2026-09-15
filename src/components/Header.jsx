import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useSelector } from "react-redux" 

const Header = () => {
  const user = useSelector(store => store.user)
  //console.log(user);
  
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="relative z-10 border-b-[0.1px] flex justify-between w-full items-center border-[#4c2424]">
      <img
        className=" h-20 w-48 ml-40 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-08-21/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
