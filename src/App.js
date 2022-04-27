import { HashRouter, Route, Routes } from "react-router-dom";
import { RouteComponents } from './RouteComponents';
import Sidebar from './components/bar/SideBar';
import MenuBar from './components/bar/MenuBar';
import TitleBar from './components/bar/TitleBar';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
    return (
        <HashRouter>
            <Container fluid>
                <Row>
                    <TitleBar />
                </Row>
                <Row>
                    <MenuBar />
                </Row>
                <Row>
                    <Col>
                        <Sidebar />
                    </Col>
                    <Col>
                        <Routes>
                            <Route path="/" element={RouteComponents.SignUp.element} />
                            <Route path={RouteComponents.SignUp.path} element={RouteComponents.SignUp.element} />
                            <Route path={RouteComponents.SignIn.path} element={RouteComponents.SignIn.element} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </HashRouter >
    );
}

export default App;