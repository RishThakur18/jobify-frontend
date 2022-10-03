import { Form } from "react-bootstrap";

function InputType({ type, label, supportedText, placeHolder }) {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeHolder} />
            <Form.Text className="text-muted">
                {supportedText}
            </Form.Text>
        </Form.Group>
    );
}
export default InputType;