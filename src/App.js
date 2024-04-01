import logo from './logo.svg';
import './App.css';
import SingnupPage from './components/SingnupPage';
import { Route, Routes } from 'react-router-dom';
import Signup1 from './components/Signup1';
function App() {
  return (

   <Routes>
    <Route path='/' element={<SingnupPage/>}></Route>
    <Route path='singup1' element={<Signup1/>}></Route>
      </Routes>
  );
}

export default App;
