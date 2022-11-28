import "./App.css";
import { Routes, Route } from "react-router-dom";
import V1V2 from "./components/V1V2";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Login from "./components/LogIn";
import V3 from "./components/V3";
import V5 from './components/V5';
import V6 from "./components/V6";
import V7 from "./components/V7";
import V8 from "./components/V8";
import V9 from "./components/V9";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/v1" element={<V1V2 />}></Route>
          <Route path="/v3" element={<V3 />}></Route>
          <Route path='/v5' element={<V5/>}></Route>
          <Route path="/v6" element={<V6 />}></Route>
          <Route path="/v7" element={<V7 />}></Route>
          <Route path="/v8" element={<V8 />}></Route>
          <Route path="/v9" element={<V9 />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
