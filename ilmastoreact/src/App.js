import "./App.css";
import { Routes, Route } from "react-router-dom";
import N1 from "./components/N1";
import N2 from "./components/N2";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/LogIn";


function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/N1" element={<N1 />}>
          <Route path=":vId" ></Route>
          </Route>
          <Route path="/N2" element={<N2 />}>
          <Route path=":vId" ></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
