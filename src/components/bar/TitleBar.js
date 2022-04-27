import { Container, Navbar } from "react-bootstrap";

function TitleBar() {
    return (
        <Navbar>
            <Container fluid color="black">
                <Navbar.Brand href="#home">JobiFy</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">------</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TitleBar;