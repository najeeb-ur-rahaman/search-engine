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
     
      const center= {
    
        margin:"100px 0 0 400px",
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
    
    const user= {username,password};
    const handleSubmit = () => {

        axios.post("http://localhost:8080/saveUser",user,{
            headers:headers
        }).then((response)=> {
              setMessage(response.data)
        })
    }
    return (

        <div>
       <h1 style={center1}>Academic Search Engine</h1>
       <div style={center}>
            <div>{message?message:"Please register to ASE"}</div>
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
         
          <div>
          <button onClick={handleSubmit}>Register</button>
         
          </div>
          <br/>
          <br/>
          {message && <Link to="/" element={<SignupPage/>}>Go back to Login</Link>}
          </div>
          </div>
    )   
}
export default Signup1;