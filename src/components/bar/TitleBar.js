import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES_LIST } from '../../RouteList';

function TitleBar() {
    return (
        <Navbar>
            <Container fluid color="black">
                <Navbar.Brand href="#home">JobiFy</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        not logged in? <Link to={ROUTES_LIST.SignIn.path}> Login </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TitleBar;