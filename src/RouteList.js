import LogIn from "./pages/auth/LogIn"
import SignUp from "./pages/auth/SignUp"

export const ROUTES_LIST = {
    Default: { path: "/", element: <LogIn /> },
    SignUp: { path: "/signup", element: <SignUp /> },
    LogIn: { path: "/login", element: <LogIn /> }
}