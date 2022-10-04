import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_LIST } from './RouteList';
import Sidebar from './components/bar/SideBar';
import MenuBar from './components/bar/MenuBar';
import TitleBar from './components/bar/TitleBar';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
    return (
        <BrowserRouter>
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
                            <Route path={ROUTES_LIST.LogIn.path} element={ROUTES_LIST.LogIn.element} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter >
    );
}

export default App;