import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useEffect } from "react";

const Body = () => {
  
const dispatch = useDispatch()

  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
    
      if (user) {
        // Whenever User signin/ signUp this part will executed
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
      } else {
        console.log('remove wala');
        // User is signed out this part will executed
        dispatch(removeUser())
        
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
