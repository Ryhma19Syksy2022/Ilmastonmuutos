import './App.css';
import { Routes , Route} from 'react-router-dom';
import { useState } from 'react';
import V1Annual from './components/V1Annual';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Login from './components/LogIn';
import V9Sectors from './components/V9Sectors';
import Register from './components/Register';

function App() {

  const [userJwt, setuserJwt] = useState(null);

  let authRoutes = <>
    <Route path='/Login' element={<Login login={ (newJwt) => {
      setuserJwt(newJwt);
    }}/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    </>

  if(userJwt != null) {
    authRoutes = <Route path='/profile' element={<Profile token={userJwt} logout={() => setuserJwt(null)}/>}></Route>
  } 

  return (
    <>
    <Navbar userLoggedIn={userJwt != null}/>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/v1' element={<V1Annual/>}></Route>
      <Route path='/v2' element={<V9Sectors/>}></Route>
        { authRoutes}
        
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
