import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

// ctrl + shift + L
const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

  const formValidate = () => {
    const message = checkValidData(email.current.value, password.current.value, name.current?.value );
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
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // yaha dispatch is wajah se kara, body me displayName, photoURL ki value nhi aa rhi thi
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setShowErrorMessage(error.message);
            });
        })
        .catch(() => {
          setShowErrorMessage(
            "user already register"
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
        })
        .catch(() => {
          setShowErrorMessage("Email or password is invalid");
        });
    }
  };

  return (
    <div className="relative h-full w-full">
      <Header />
      <div className="relative">
        <img
          className="absolute inset-0 h-screen w-full object-cover z-0 "
          src={NETFLIX_BG}
          alt="bg"
        />

        <div className="absolute inset-0 h-screen opacity-70 w-full bg-black  z-10 "></div>
      </div>

      <div className="relative z-10  flex h-screen flex-col justify-center items-center sm:px-8 px-4 ">
        <div className="w-full max-w-lg bg-black/90 sm:px-10 px-6 sm:py-12 py-8 rounded-lg ">
          <h1 className="text-4xl  mb-10 font-bold">
            {isSignIn ? "Sign in" : "Sign Up"}
          </h1>

          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <input
                ref={name}
                className="sm:p-4 p-3 border-1 border-white rounded-md mb-5 w-full bg-gray-800"
                type="text"
                placeholder="Name"
              />
            )}

            <input
              ref={email}
              className="sm:p-4 p-3 border-1 border-white rounded-md w-full bg-gray-800"
              type="email"
              placeholder="Email or mobile number"
            />
            <input
              ref={password}
              className="sm:p-4 p-3 border-1 border-white rounded-md w-full bg-gray-800 mt-6"
              type="password"
              placeholder="Password"
            />

            {!isSignIn && (
              <h3 className="text-gray-600 mt-2 text-sm font-semibold">
                Password must contain at least 8 characters and 1 capital
                letter.
              </h3>
            )}

            <button
              className="active:scale-95 text-xl font-bold py-3 hover:opacity-90 bg-[#e50914] mt-5 rounded-md"
              onClick={formValidate}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <h3 className="font-bold my-4 p-0 text-red-700 ">
            {showErrorMessage}
          </h3>

          <div className=" space-x-2 mt-6 text-gray-400 sm:text-base text-sm">
              {isSignIn ? "New Person?  " : "Already have an account? "}
            <a
              className="font-semibold text-white cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "Sign Up Now" : "Sign In Now"}
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-[10px] text-black absolute -bottom-1 left-0 m-1">Disclaimer: This is a personal student portfolio project for educational purpose only</h1>

    </div>
  );
};

export default Login;
