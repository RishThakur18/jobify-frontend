import { HashRouter, Route, Routes } from "react-router-dom";
import { ROUTES_LIST } from './RouteList';
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
                            <Route path={ROUTES_LIST.Default.path} element={ROUTES_LIST.Default.element} />
                            <Route path={ROUTES_LIST.SignUp.path} element={ROUTES_LIST.SignUp.element} />
                            <Route path={ROUTES_LIST.SignIn.path} element={ROUTES_LIST.SignIn.element} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </HashRouter >
    );
}

export default App;