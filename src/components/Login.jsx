//import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"

// ctrl + shift + L
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

  const formValidate = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setShowErrorMessage(message);

    if (message) return;

    // Sign In / Sign Up Authentication Logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiJKMksPDVHkBTk5lSyUGhnzQeIR65FyMW3Z1j5EtJQ&s=10",
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              // yaha dispatch is wajah se kara, body me displayName, photoURL ki value nhi aa rhi thi
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              navigate("/browse");
            })
            .catch((error) => {
              setShowErrorMessage(error.message)
            });          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowErrorMessage(
            "user already register" /* errorCode + "-" + errorMessage */,
          );
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="absolute top-0 z-0 h-screen w-full"
          src="https://occ-0-5200-3996.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
          alt="bg"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center mt-10">
        <div>
          <h1 className="text-4xl font-bold">
            Enter your info to {isSignIn ? "Sign in" : "Sign Up"}
          </h1>

          <p className="mb-6 mt-2 text-xl text-start text-gray-300">
            Or get started with a new account.
          </p>

          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <input ref={name}
                className="p-4 border-1 border-white rounded-md mb-6 w-[510px] bg-[#1c1213]"
                type="text"
                placeholder="Enter Full Name"
                
              />
            )}

            <input
              ref={email}
              className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213]"
              type="email"
              placeholder="Email or mobile number"
            />
            <input
              ref={password}
              className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213] mt-6 "
              type="password"
              placeholder="Password"
            />
            <button
              className="active:scale-95 text-xl font-bold py-3 bg-[#e50914] mt-4 rounded-md"
              onClick={formValidate}
            >
              Continue
            </button>
          </form>

          <h3 className="font-bold my-4 text-red-700">{showErrorMessage}</h3>

          <div className="flex gap-2 mt-4">
            <h3>New to Netflix?</h3>
            <a
              className="font-bold cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "Sign Up Now" : "Sign In"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
