import { React } from "react";
import { Link, Routes, Route } from "react-router-dom";
import V1 from "./V1V2";
import V3 from "./V3";
import V6 from "./V6";
import V5 from "./V5";
import V7 from "./V7";

function App() {
  return (
    <div className="Visual">
      <div className=" VisualList">
        
        <Link to="/N1">
          <button>Annual Data</button>
        </Link>
        <Link to="v3">
          <button>Mauna Loa</button>
        </Link>
        <Link to="v5">
          <button>Vostok Ice Core</button>
        </Link>
        <Link to="v6">
          <button>Ice Core</button>
        </Link>
        <Link to="v7">
          <button>200M year temp</button>
        </Link>
        
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