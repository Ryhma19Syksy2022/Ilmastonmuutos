import './App.css';
import { Routes , Route} from 'react-router-dom';
import { useState } from 'react';
import N1 from "./components/N1";
import N2 from "./components/N2";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/LogIn';
import Register from './components/Register';
import CustomLayout from './components/CustomLayout';
import CustomVisuals from './components/CustomVisuals';
import V1V2 from './components/V1V2';


function App() {

  const [userJwt, setuserJwt] = useState(null);

  let authRoutes = <>
    <Route path='/Login' element={<Login login={ (newJwt) => {
      setuserJwt(newJwt);
    }}/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    </>

  if(userJwt != null) {
    authRoutes = <Route path='/Profile' element={<Profile token={userJwt} logout={() => setuserJwt(null)}/>}></Route>
  } 
  



  return (
    <>
    <Navbar userLoggedIn={userJwt != null}/>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}></Route>
      
      <Route path="/N1" element={<N1 />}>
        <Route path=":vId" ></Route>
      </Route>
      <Route path="/N2" element={<N2 />}>
        <Route path=":vId" ></Route>
      </Route>

      <Route path="/CustomVisuals/*" element={<CustomVisuals visuals={V1V2}/>}>
        <Route path=":cId"></Route>
      </Route>

        { authRoutes}
        
      </Routes>
    </div>
    </>
  );
}

export default App;
