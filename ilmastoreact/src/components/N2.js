import {React} from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import V8 from "./V8";
import V9 from "./V9";

// Creates dropdown menu for co2 emission page and allows user to toggle between v8-v9 graphs

function App() {
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className="DropDownMenu" variant="success" id="dropdown-basic">
        Emissions
      </Dropdown.Toggle>

      <Dropdown.Menu>
        < Dropdown.Item >
        <Link className="nav-link" to="/N2">Emissions by country</Link>
        </Dropdown.Item>
        < Dropdown.Item >
        <Link className="nav-link" to="/N2/v9">Emissions by sectors</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <div>
      <div className="VisualDetails">
        <Routes>
      <Route path="/" element={<V8 />}></Route>
      <Route path="v9" element={<V9 />}></Route>
      </Routes>
      </div>

    </div>
    </>
  );
}

export default App;