import Browse from "./Browse"
import Login from "./Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./SignUp"

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/signUp",
            element: <SignUp />
        }
    ])

    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body