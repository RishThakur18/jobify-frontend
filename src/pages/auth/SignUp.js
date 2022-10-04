import React from "react";
import { EMAIL_REGEX } from "../../StringConstants";
import { compose } from "redux";
import { connect } from "react-redux";
import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";
import { userService } from "../../auth/AuthProvider";
import { Row, Col } from "react-bootstrap";

function SignUp(props) {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [password, setPassword] = React.useState("");
    //const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [otp, setOtp] = React.useState("");
    
    function handleChange(event, name) {
        switch (name) {
            case "firstname": 
                setFirstName(event.target.value);
                console.log("firstname");
                break;
            case "lastname": 
                setLastName(event.target.value);
                console.log("firstname");
                break;
            case "password":
                setPassword(event.target.value);
                console.log("password");                
                break;
            case "email":
                setEmail(event.target.value);
                console.log("email");                
                break;
            case "otp":
                setOtp(event.target.value)
                console.log(otp);
            default:
        }
    }

    async function handleClick(event, name) {
        let isSignUpSuccessful;
        switch (name) {
            case "signup":
                props.signUpRequest();
                    console.log("valid data, sending auth request");
                    isSignUpSuccessful = JSON.parse(await userService.signupRequest(firstName, lastName, email, password, otp));
                    console.log(isSignUpSuccessful);
                    
                    if(isSignUpSuccessful.status === true)
                        props.signupSuccess(isSignUpSuccessful.data);
                    else{
                        console.log(isSignUpSuccessful.message);
                        props.signupFailed(isSignUpSuccessful.message);
                    }
                break;
            default: 
        }
    }

    return (
        <FormLayout>
             { props.error && <p> {props.error} </p> }
            <Row>
                <Col>
                    <InputType
                        type="text"
                        label="First Name"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(event) => handleChange(event, "firstname")}
                    />
                </Col>
                <Col>
                    <InputType
                        type="text"
                        label="Last Name"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(event) => handleChange(event, "lastname")}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputType
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => handleChange(event, "password")}
                    />
                </Col>
                <Col>
                    <InputType
                        type="password"
                        label="Confirm Password"
                        placeholder="Enter email"
                       // value={passwordConfirm}
                        onChange={(event) => handleChange(event, "passwordConfirm")}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                <InputType
                    type="email"
                    label="Email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => handleChange(event, "email")}
                />
                </Col>
                <Col>
                    <ButtonType
                        type="submit"
                        variant="warning"
                        buttonText="Send Otp"
                        onClick={(event) => handleClick(event, "sendOtp")}
                    />
                </Col>
            </Row>

            <Row>
                <InputType
                    type="text"
                    label="OTP"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(event) => handleChange(event, "otp")}
                />
            </Row>

            <ButtonType
                type="submit"
                variant="success"
                buttonText="Sign Up"
                onClick={(event) => handleClick(event, "signup")}
            />
        </FormLayout >
    );
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(SignUp);