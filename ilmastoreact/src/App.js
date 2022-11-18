import './App.css';
import { Routes , Route} from 'react-router-dom';
import V1Annual from './components/V1V2';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Login from './components/LogIn';
import V3 from './components/V3';
import V8 from './components/V8';
import V9 from './components/V9';


function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/v1' element={<V1Annual/>}></Route>
        <Route path='/v2' element={<V8/>}></Route>
        <Route path='/v3' element={<V9/>}></Route>
        <Route path='Profile' element={<Profile/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
