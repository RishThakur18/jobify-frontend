import React from "react";
import { EMAIL_REGEX } from "../../StringConstants";
import { compose } from "redux";
import { connect } from "react-redux";
import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";
import { userService } from "../../auth/AuthProvider";
import { Row, Col } from "react-bootstrap";

function SignUp() {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [password, setPassword] = React.useState("");
    //const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState(false);

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
                console.log("valid data, sending auth request");
                isSignUpSuccessful = JSON.parse(await userService.signupRequest(firstName, lastName, email, password, otp));
                console.log(isSignUpSuccessful);
                setStatus(isSignUpSuccessful.status);

                if(status === true) {
                    setMessage("Successfully signed up");
                }
                else{
                    console.log(isSignUpSuccessful.message);
                    setMessage(isSignUpSuccessful.message);
                }
                break;
            case "sendOtp":
                console.log("valid otp, sending send otp request");
                isSignUpSuccessful = JSON.parse(await userService.signupRequest(firstName, lastName, email, password, otp));
                console.log(isSignUpSuccessful);
                setStatus(isSignUpSuccessful.status);

                if(status === true) {
                    setMessage("Otp sent");
                }
                else{
                    console.log(isSignUpSuccessful.message);
                    setMessage(isSignUpSuccessful.message);
                }
                break;

            default: 
        }
    }

    return (
        <FormLayout>
            { message && <p> {message} </p> }
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