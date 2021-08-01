import React, { useState ,component} from "react";
import { Sidebar } from "./components/Sidebar";

import {renderCabinetContainer} from "./components/Cabinet/CabinetContainer";
//import "./styles.scss";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );
  return (
    <div className="App__personal-account-container">
<renderCabinet/>
    </div>
  );
};

export default App;
