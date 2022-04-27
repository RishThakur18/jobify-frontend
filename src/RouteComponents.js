import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"


export const RouteComponents = {
    // routes
    SignUp: { path: "/signUp", element: <SignUp /> },
    SignIn: { path: "/signIn", element: <SignIn /> }
}