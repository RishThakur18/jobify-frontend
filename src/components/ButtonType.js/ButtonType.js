import { Button } from "react-bootstrap";

function ButtonType({ type, variant, buttonText, onClick }) {
    return (
        <Button
            type={type}
            variant={variant} 
            onClick={onClick}
        >
            {buttonText}
        </Button>
    );

}
export default ButtonType;