import { Form } from "react-bootstrap";

function InputType({ type, label, supportedText, placeHolder, onChange }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                type={type} 
                placeholder={placeHolder}
                onChange={onChange}
            />
            <Form.Text className="text-muted">
                {supportedText}
            </Form.Text>
        </Form.Group>
    );
}
export default InputType;