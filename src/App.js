import logo from './logo.svg';
import './App.css';
import SingnupPage from './components/SingnupPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Signup1 from './components/Signup1';
import Home1 from './components/Home1';
import Navbar from './Navbar';
import About from './components/About';
import Pricing from './components/Pricing';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  
    <>
   
    
    <div>
      
    {/* <h1 style={{textAlign:'center',color:'blue'}}>Academic Search Engine</h1>  */}
    <Navbar/>
   <Routes>
   
    {/* <Route path='/' element={<Home1/>}></Route> */}
    {/* <Route path='/login' element={<SingnupPage/>}></Route> */}
    <Route path='/' element={<Login />}></Route>
    {/* <Route path='/logout' element={<SingnupPage/>}></Route> */}
    <Route path='/logout' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
   
      </Routes>
      </div>
      </>
    
  );
}

export default App;
