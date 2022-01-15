import { useNavigate } from "react-router-dom";

function DefaultPage() {
    let navigate = useNavigate();
    return (
        <div className="d-flex flex-row  align-items-center justify-content-center h-100">
            <button type="button" className="btn btn-primary h-10 w-60" onClick={() => navigate("signup")}>Signup</button>
            <button type="button" className="btn btn-success h-10 w-60" onClick={() => navigate("login")}>Login</button>
        </div>
    );
}
export default DefaultPage;