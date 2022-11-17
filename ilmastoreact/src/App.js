import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import V1V2 from "./components/V1V2";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/v1" element={<V1V2 />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
