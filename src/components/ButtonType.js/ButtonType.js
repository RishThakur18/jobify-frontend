import { Button } from "react-bootstrap";

function ButtonType({ type, variant, buttonText }) {
    return (
        <Button
            type={type}
            variant={variant} >
            {buttonText}
        </Button>
    );

}
export default ButtonType;