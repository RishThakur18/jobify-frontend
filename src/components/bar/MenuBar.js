import { Nav, Navbar, Container } from 'react-bootstrap';
import { sideBarShow } from '../../redux/sidebar/SideBarActions';
import { connect } from "react-redux";
import { compose } from "redux";
import { FiMenu } from 'react-icons/fi';

function MenuBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Nav className="me-auto">
                    <FiMenu onClick={props.sideBarShow}></FiMenu>
                    <Nav.Link href="#home"> Home </Nav.Link>
                    <Nav.Link href="#link"> Link </Nav.Link>
                    <Nav.Link href="#about"> About </Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    );
}

const mapStateToProps = (state) => ({
    // state: state.sideBar.state,
});

const mapDispatchToProps = {
    sideBarShow
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MenuBar);

