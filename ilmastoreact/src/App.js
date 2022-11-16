import './App.css';
import { Routes , Route} from 'react-router-dom';
import V1Annual from './components/V1Annual';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Login from './components/LogIn';
import V9Sectors from './components/V9Sectors';
import V3 from './components/V3';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/v1' element={<V1Annual/>}></Route>
        <Route path='/v2' element={<V9Sectors/>}></Route>
        <Route path='/v3' element={<V3/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
