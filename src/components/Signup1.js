import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignupPage from './SingnupPage.js'
import '../Form.css'; // Import CSS file for styling
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
      // {message.includes("exist") ?
      // <div style={{color:'red'}}>{message}</div> : 
      // <div style={{color:'green'}}>{message}</div> 
      // }
      //   <div className="auth-container">
      //  <h1 style={center1}>Academic Search Engine</h1>
       
        
      //     <input
      //       type="text"
      //       placeholder="Username"
      //       value={username}
      //       onChange={(e) => setUsername(e.target.value)}
      //     />
          
      //     <br/>
      //     <div className="input-group">
      //     <input
      //       type="password"
      //       placeholder="Password"
      //       value={password}
      //       onChange={(e) => setPassword(e.target.value)}
      //     />
      //     </div>
      //     <div>
      //     <button onClick={handleSubmit}>Register</button>
         
      //     </div>
      //     <br/>
      //     <br/>
      //     {message && <Link to="/" element={<SignupPage/>}>Go back to Login</Link>}
      //     </div>

     
     
      
      <div className="auth-container">
        
        <div style={center}>
          {message==''?
      <h2>Sign Up</h2>:""}
       {message.includes("exist") ?
      <div style={{color:'red'}}>{message}</div> : 
      <div style={{color:'green'}}>{message}</div> 
      }
  
        <div>
          
          <input type="text"  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
         
          <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn" onClick={handleSubmit}>Register</button>
  
      </div>
      {message && !message.includes('exist') &&<Link to="/" element={<SignupPage/>} style={center}>Go back to Login</Link>}
    </div>
    
         
    )   
}
export default Signup1;