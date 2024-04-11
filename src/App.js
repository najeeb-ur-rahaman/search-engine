import logo from './logo.svg';
import './App.css';
import SingnupPage from './components/SingnupPage';
import { Route, Routes } from 'react-router-dom';
import Signup1 from './components/Signup1';
import Home from './components/Home';
function App() {
  return (
    <div>
    <h1 style={{textAlign:'center',color:'blue'}}>Academic Search Engine</h1> 
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<SingnupPage/>}></Route>
    <Route path='/logout' element={<SingnupPage/>}></Route>
    <Route path='singup1' element={<Signup1/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
