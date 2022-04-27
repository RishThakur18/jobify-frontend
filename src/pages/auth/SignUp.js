import FormLayout from "../../components/layout/FormLayout";
import InputType from "../../components/InputType/InputType";
import ButtonType from "../../components/ButtonType.js/ButtonType";
import { Row, Col } from "react-bootstrap";

function SignUp() {
    return (
        <FormLayout>
            <InputType
                type="email"
                label="Enter email"
                placaeholder="Enter email"
            />
            <Row>
                <Col>
                    <InputType
                        type="text"
                        label="Enter first name"
                        placaeholder="Enter first name"
                    />
                </Col>
                <Col>
                    <InputType
                        type="text"
                        label="Enter last name"
                        placaeholder="Enter last name"
                    />
                </Col>
            </Row>

            <ButtonType
                type="submit"
                variant="primary"
                buttonText="Send Verification Code"

            />
        </FormLayout >
    );
}
export default SignUp;