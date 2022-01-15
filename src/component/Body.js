import { Route, Routes } from 'react-router-dom';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import ErrorPage from "./pages/ErrorPage";

function Body() {
    return (
        <div className="flex flex-grow-1 bg-light">
            <Routes>
                <Route path="/" element={<DefaultPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div >
    );
}

export default Body;