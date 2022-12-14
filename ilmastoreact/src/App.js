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
import CustomVisuals from './components/CustomVisuals';

import V1V2 from './components/V1V2';
import Editor from './components/Editor';
import { UserAuthContext } from './components/Contexts';

const storedAuthKey = window.localStorage.getItem('authKey');

function App() {

  const initialAuthKey ={
    key: storedAuthKey,
    login: (newAuthValue) => {
      const newAuthKey = {...userAuthKey,
        key: newAuthValue
      };
    window.localStorage.setItem('authKey', newAuthValue);
    setuserAuthKey(newAuthKey);
    },
    logout: () => {
      window.localStorage.removeItem('authKey');
      setuserAuthKey({...initialAuthKey});
    }
  };

  const [userAuthKey, setuserAuthKey] = useState({...initialAuthKey});

  let authRoutes = <>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    </>

  if(userAuthKey.key) {
    authRoutes = <>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/Editor' element={<Editor/>}></Route>
      </>
  } 
  



  return (
    <UserAuthContext.Provider value={userAuthKey}>
    
      <UserAuthContext.Consumer>
        {value => (<div>Auth Status: {value.key != null ? "Logged in":"Not logged in"}</div>)}
      </UserAuthContext.Consumer>

      <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
      
          <Route path="/N1" element={<N1 />}>
            <Route path=":vId" ></Route>
          </Route>
          
          <Route path="/N2" element={<N2 />}>
            <Route path=":vId" ></Route>
          </Route>

      <Route path="/CustomVisuals/*" element={<CustomVisuals/>}>
        <Route path=":vId" element={ < CustomVisuals/>}></Route>
      </Route>

          {authRoutes}
        
        </Routes>
      </div>

    </UserAuthContext.Provider>
    
  );
}

export default App;
