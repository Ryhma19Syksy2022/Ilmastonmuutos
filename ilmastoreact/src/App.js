import './App.css';
import { Routes , Route} from 'react-router-dom';
import V1Annual from './components/V1Annual';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/v1' element={<V1Annual/>}></Route>
        <Route path='/v2' element={<V1Annual/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
