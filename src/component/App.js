import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import axios from 'axios';

function App() {

  axios.defaults.baseURL = 'http://localhost:6060/';

  const [toggle, setToggleValue] = useState(false);

  function setToggle() {
    setToggleValue(!toggle);
  }

  return (
    <Router>
      <div className="d-flex flex-column" style={{ "height": "100vh" }} >
        <Header sideBarState={setToggle} />
        <div className="d-flex flex-row h-100 bg-warning" >
          <Sidebar isVisibleSidebar={toggle} />
          <Body />
        </div>
      </div >
    </Router>
  );
}

export default App;
