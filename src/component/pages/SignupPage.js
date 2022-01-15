import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("Please enter your email");
    const [msgClass, setMsgClass] = useState("form-text");
    const [error, setError] = useState();
    const [response, setResponse] = useState({
        "message": "",
        "exception": "",
        "reason": "",
        "token": "",
        "data": ""
    });

    const navigate = useNavigate();

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .get("auth/signup/" + email)
            .then(res => setResponse(res.data))
            .catch(err => {
                setResponse(err)
                console.log(response)
            });

    }

    useEffect(() => {
        if (error === true) {
            setMsg("failed to validate email");
            setMsgClass("form-text fw-bold text-danger");
        }
    }, [error])

    return (
        <form className="container m-auto p-5 w-50" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(e) => handleChange(e)} required />
                <div id="emailHelp" className={msgClass}> {msg} </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default SignupPage;