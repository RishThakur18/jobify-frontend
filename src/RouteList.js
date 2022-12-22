import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";

export const ROUTES_LIST = {
    Home: { path: "/", element: <Home /> },
    SignUp: { path: "/signup", element: <SignUp /> },
    LogIn: { path: "/login", element: <LogIn /> }
}