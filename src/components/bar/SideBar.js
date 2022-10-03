import { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { connect } from "react-redux";
import { compose } from "redux";
import { sideBarHide } from '../../redux/sidebar/SideBarActions';

function SideBar(props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        handleSideBar();
    });

    function handleSideBar() {
        console.log("useStateRunning" + props.sideBarVisible)
        if (props.sideBarVisible === true) setShow(true);
        if (props.sideBarVisible === false) setShow(false);
    };

    return (
        <Offcanvas show={show} onHide={props.sideBarHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    );
}

const mapStateToProps = (state) => ({
    sideBarVisible: state.sideBar.sideBarVisible,
});

const mapDispatchToProps = {
    sideBarHide
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(SideBar);