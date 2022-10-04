import React from "react";
import { EMAIL_REGEX } from "../../StringConstants";
import { compose } from "redux";
import { connect } from "react-redux";
import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";
import { userService } from "../../auth/AuthProvider";
import { LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILED } from "../../redux/auth/AuthActions"; 

function SignIn(props) {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleChange = (event, name) => {
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

    const handleClick = (event, name) => {
        let user = null;
        switch (name) {
            case "signin":
                props.loginrequest();
                if (EMAIL_REGEX.test(username)) {
                   user = userService.signInRequest(username, password);
                   console.log("valid creds, sending auth request");
                   if(user!=null)
                        props.loginSuccess();
                    else
                        props.loginFailed("Invalid credentials");
                } 
                else {
                    console.log("invalid cred");
                    props.loginFailed("Invalid credentials format");
                }
                break;
            default: 
        }
    }

    return (
        <FormLayout>
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
        state: state.sideBar.state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginrequest : () => dispatch({ type : LOGIN_REQUEST }),
        loginSuccess : (payload) => dispatch({ type : LOGIN_REQUEST_SUCCESS, user : payload }),
        loginFailed : (payload) => dispatch({ type : LOGIN_REQUEST_FAILED, error : payload })
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(SignIn);