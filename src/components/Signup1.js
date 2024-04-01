import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignupPage from './SingnupPage.js'
const Signup1 = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] =useState('');
    const [message,setMessage] =useState('')

    const headers = {
        'Content-Type': 'application/json'
      }
      const centerDivStyle = {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '100vh'
      };
      
    const user= {username,password};
    const handleSubmit = () => {

        axios.post("http://localhost:8080/saveUser",user,{
            headers:headers
        }).then((response)=> {
              setMessage(response.data)
        })
    }
    return (
        <div className="App"    >
            <div>{message?message:"Please register to ASE"}</div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <div>
          <button onClick={handleSubmit}>Register</button>
         
          </div>
          <br/>
          <br/>
          {message && <Link to="/" element={<SignupPage/>}>Go back to Login</Link>}
          </div>
    )   
}
export default Signup1;