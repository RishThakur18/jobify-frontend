import { useState, useEffect } from 'react';

function Sidebar(props) {
    const [className, setClassName] = useState("");

    useEffect(() => {
        toggleSidebar();
    })

    function toggleSidebar() {
        if (props.isVisibleSidebar === true) {
            setClassName("flex bg-dark text-white");
        }
        else {
            setClassName("d-none");
        }

    }

    return (
        <div className={className}>
            <ul>
                <li>Profile</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

export default Sidebar;