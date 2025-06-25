import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Error from "../pages/error";
import Home from "../pages/home";
import CreatePost from "../pages/Post";
import Profile from "../pages/profile";
import MyPhotos from "../pages/myphotos";
import SignUp from "../pages/signup";
import ProtectedRoute from "@/components/ProtectedRoutes";


export const router = createBrowserRouter([
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            }, {
                path: "/post",
                element: <CreatePost />,
                errorElement: <Error />,
            },
            {
                path: "/myphotos",
                element: <MyPhotos />,
                errorElement: <Error />,
            },

            {
                path: "/profile",
                element: <Profile />,
                errorElement: <Error />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/signup",
        element: <SignUp />,
        errorElement: <Error />,
    },

])

export default router;