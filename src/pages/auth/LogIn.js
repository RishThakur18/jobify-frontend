import React from "react";
import { EMAIL_REGEX } from "../../StringConstants";
import { compose } from "redux";
import { connect } from "react-redux";
import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";
import { userService } from "../../auth/AuthProvider";
import { 
    LOGIN_REQUEST, 
    LOGIN_REQUEST_SUCCESS, 
    LOGIN_REQUEST_FAILED 
} from "../../redux/auth/AuthActions"; 

function LogIn(props) {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    function handleChange(event, name) {
        switch (name) {
            case "username": 
                setUsername(event.target.value);
                console.log("username");
                break;
            case "password":
                setPassword(event.target.value);
                console.log("password");                
                break;
            default:
        }
    }

    async function handleClick(event, name) {
        let isLoggedIn;
        switch (name) {
            case "signin":
                props.loginRequest();
                if (EMAIL_REGEX.test(username)) {
                    console.log("valid creds, sending auth request");
                    isLoggedIn = JSON.parse(await userService.loginRequest(username, password));
                    console.log(isLoggedIn);
                    
                    if(isLoggedIn.status === true)
                        props.loginSuccess(isLoggedIn.data);
                    else{
                        console.log(isLoggedIn.message);
                        props.loginFailed(isLoggedIn.message);
                    }
                } 
                else {
                    console.log("invalid cred format");
                    props.loginFailed("Invalid credentials format");
                }
                break;
            default: 
        }
    }

    return (
        <FormLayout>
            { props.error && <p> {props.error} </p> }
            <InputType
                type="email"
                label="Enter email"
                placaeholder="Enter email"
                value={username}
                onChange={(event) => handleChange(event, "username")}
            />
            <InputType
                type="text"
                label="Enter password"
                placaeholder="Enter password"
                value={password}
                onChange={(event) => handleChange(event, "password")}
            />
            <ButtonType
                type="submit"
                variant="primary"
                buttonText="Login"
                onClick={(event) => handleClick(event, "signin")}
                disabled={username === "" || password === ""}
            />
        </FormLayout >
    );
}

function mapStateToProps(state) {
    return {
        error : state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginRequest : () => dispatch({ type : LOGIN_REQUEST }),
        loginSuccess : (payload) => dispatch({ type : LOGIN_REQUEST_SUCCESS, user : payload }),
        loginFailed : (payload) => dispatch({ type : LOGIN_REQUEST_FAILED, error : payload })
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(LogIn);