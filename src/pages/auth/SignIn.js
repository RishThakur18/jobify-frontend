import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";

function SignIn() {
    return (
        <FormLayout>
            <InputType
                type="email"
                label="Enter email"
                placaeholder="Enter email"
            />
            <InputType
                type="text"
                label="Enter password"
                placaeholder="Enter password"
            />
            <ButtonType
                type="submit"
                variant="primary"
                buttonText="Login"
            />
        </FormLayout >
    );
}
export default SignIn;