import { BASE_URL } from "../StringConstants"

export const userService = {
    signInRequest,
    signOutRequest,
    // register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

async function signInRequest(username, password) {
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

    const response = await fetch(`${BASE_URL}/signIn`, requestOptions);
    const user = response
        .text()
        .then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function signOutRequest() {
    localStorage.removeItem('user');
    return null;
}

