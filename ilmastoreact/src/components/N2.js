import {React} from "react";
import { Link, Routes, Route } from "react-router-dom";
import V8 from "./V8";
import V9 from "./V9";



function App() {
  return (
    <div className="Visual">
      <div className=" VisualList">
        <Link to="/N2">
        <button>Emissions by country</button>
        </Link>
        <Link to="v9">
        <button>Emissions by sectors</button>
        </Link>
      </div>
      <div className="VisualDetails">
        <Routes>
      <Route path="/" element={<V8 />}></Route>
      <Route path="v9" element={<V9 />}></Route>
      </Routes>
      </div>

    </div>
  );
}

export default App;