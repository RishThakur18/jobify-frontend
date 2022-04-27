import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";

function SignIn() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleChange = (event, name) => {
        switch (name) {
            case "username":
                setUsername(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            default:
        }
    }

    const handleClick = (event, name) => {
        switch (name) {
            case "signin":
                if (EMAIL_REGEX.test(username)) {
                    setEmailAlert(false);
                    signIn();
                } else {
                    console.log("here");
                    setEmailAlert(true);
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
                onClick={(e) => handleClick(e, "signin")}
                disabled={username === "" || password === ""}
            />
        </FormLayout >
    );
}
const mapStateToProps = (state) => ({
    // state: state.sideBar.state,
});

const mapDispatchToProps = {
    sideBarShow
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(SignIn);