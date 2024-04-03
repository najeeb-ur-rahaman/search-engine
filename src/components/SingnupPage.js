import React, { useState } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [message,setMessage]= useState('');
  const [errorMessage,setErrorMessage]= useState('');


  const handleSubmit= () => {
      console.log("hello")
  }
  const headers = {
    'Content-Type': 'application/json'
  }

const user = {username,password}
  const handleLogin = () => {
    console.log(username);
    // Your authentication logic goes here
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {

      axios.post("http://localhost:8080/user",user,{
        headers:headers
    }).then((response)=> {
          setMessage(response.data);
    })
     if(message==="success"){
      setIsLoggedIn(true);      
    }else{
    setErrorMessage(message);
    }
  }}

  const handleLogout = () => {
    // Your logout logic goes here
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const center= {
    
    margin:"100px 200px 0 500px",
    width: "50%",
    padding: "10px",
    top:"300px"
  }
  const center1= {
    
    margin:"0px 50px 0 200px",
    width: "70%",
    padding: "10px",
    top:"600px",
    backgroundColor:"blue"
  }

  return (

    <div>
      <h1 style={center1}>Academic Search Engine</h1>  
    <div style={center}>
      
      <div>
      {/* <button id='logout' onClick={handleLogout}>Logout</button> */}
      
      </div>
       {!isLoggedIn ?
        <div>
           <h2 style={{color:"red"}}>{errorMessage}</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <div>
          <button onClick={handleLogin}>Login</button>
          <br/>
          <br/>
          <Link to="/singup1" message={message} handleSubmit={handleSubmit}>Sign Up</Link>
          </div>
        </div>

     :
        <div>
          <div style={center}>
         <Link to="/" element={<Home/>}>Logout</Link>
        </div> 
          <SearchBar isLoggedIn={isLoggedIn}/>
        </div>
}
    </div>
    </div>
  )
    
       
  

      }
export default App;
