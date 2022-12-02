import { React } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import V1 from "./V1V2";
import V3 from "./V3";
import V6 from "./V6";
import V5 from "./V5";
import V7 from "./V7";

function App() {



  return (
    <div className="Visual">
      <div className=" VisualList">
        
      <Dropdown>
      <Dropdown.Toggle className="DropDownMenu" variant="success" id="dropdown-basic">
        Temperature and C0<sub>2</sub>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      < Dropdown.Item >
        <Link className="nav-link" to="/N1">Global Temperature</Link>
        </Dropdown.Item>
      < Dropdown.Item >
        <Link className="nav-link" to="/N1/v3">Mauna Loa</Link>
        </Dropdown.Item>
      < Dropdown.Item >
        <Link className="nav-link" to="/N1/v5">Vostok Ice Core</Link>
        </Dropdown.Item>
      < Dropdown.Item >
        <Link className="nav-link" to="/N1/v6">Ice Core</Link>
        </Dropdown.Item>
      < Dropdown.Item >
        <Link className="nav-link" to="/N1/v7">200M Year Temperature</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
      </div>

      <div className="VisualDetails">
        <Routes>
          <Route path="/" element={<V1 />}></Route>
          <Route path="v3" element={<V3 />}></Route>
          <Route path="v5" element={<V5 />}></Route>
          <Route path="v6" element={<V6 />}></Route>
          <Route path="v7" element={<V7 />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
