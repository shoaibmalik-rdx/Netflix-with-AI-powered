//import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
// ctrl + shift + L
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

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
          <h1 className="text-4xl font-bold">Enter your info to {isSignIn ? "Sign in" : "Sign Up"  }</h1>         
          
          <p className="mb-6 mt-2 text-xl text-start text-gray-300">
            Or get started with a new account.
          </p>
          <form className="flex flex-col">
            {!isSignIn && <input
              className="p-4 border-1 border-white rounded-md mb-6 w-[510px] bg-[#1c1213]"
              type="text"
              placeholder="Enter Full Name"
            />}

            <input
              className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213]"
              type="email"
              placeholder="Email or mobile number"
            />
            <input
              className="p-4 border-1 border-white rounded-md w-[510px] bg-[#1c1213] mt-6 "
              type="password"
              placeholder="Password"
            />
            <button className="active:scale-95 text-xl font-bold py-3 bg-[#e50914] mt-4 rounded-md">
              Continue
            </button>
          </form>

          <div className="flex gap-2 mt-4">
            <h3>New to Netflix?</h3>
            {/* <Link className="font-bold hover:underline" to="/signUp">Sign Up Now</Link> */}
            <a className="font-bold cursor-pointer hover:underline" onClick={toggleSignInForm}>
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
