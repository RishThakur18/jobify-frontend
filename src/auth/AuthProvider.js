import { BASE_URL } from "../StringConstants"

export const userService = {
    loginRequest,
    logoutRequest,
    signupRequest
    // register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

async function loginRequest(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    };

    let status= false;
    let message = null;
    let data = null;
    
    return await fetch(`${BASE_URL}/login`, requestOptions)
        .then(response => {
            console.log(response);
            if(!response.ok)
                throw Error("api hit failed");
            return response.json();
        })
        .then(json => {
            localStorage.setItem('user', JSON.stringify(json));
            status = true;
            message = "Login successful";
            data = json;
            return JSON.stringify({ status, message, data});
        })
        .catch(error => {
            console.error(error.message);
            status = false;
            message = "Login unsuccessful : ".concat(error.message);
            return JSON.stringify({ status, message, data});
        });
}

async function logoutRequest() {
    localStorage.removeItem('user');
    return null;
}

async function signupRequest(firstname, lastname, email, password, otp) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname, 
            lastname, 
            email, 
            password, 
            otp
        })
    };

    let status= false;
    let message = null;
    
    return await fetch(`${BASE_URL}/signin`, requestOptions)
        .then(response => {
            console.log(response);
            if(!response.ok)
                throw Error("api hit failed");
            return response.json();
        })
        .then(json => {
            status = true;
            message = "Login successful";
            return JSON.stringify({ status, message });
        })
        .catch(error => {
            console.error(error.message);
            status = false;
            message = "Login unsuccessful : ".concat(error.message);
            return JSON.stringify({ status, message });
        });
}