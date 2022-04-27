import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"


export const ROUTES_LIST = {
    Default: { path: "/", element: <SignIn /> },
    SignUp: { path: "/signUp", element: <SignUp /> },
    SignIn: { path: "/signIn", element: <SignIn /> }
}