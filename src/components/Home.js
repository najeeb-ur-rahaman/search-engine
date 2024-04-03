import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {

    const [islogin,setLogin] = useState(false)

    const center= {
    
        margin:"20px 50px 0 600px",
        width: "70%",
        padding: "10px",
        top:"300px"
      }
      const center1= {
    
        margin:"0px 50px 0 300px",
        width: "70%",
        padding: "10px",
        top:"600px",
        backgroundColor:"blue"
      }
    return (
       <>
       <div>

<h1 style={center1}>Academic Search Engine</h1>  
</div>
       {!islogin ?
        <div style={center}>
         <Link to="/login" >Login</Link>
        </div>
        :
        <div style={{position:"absollute",left:"700px",top:"20px",color: "#fff"}}>
         <Link to="/logout" >Logout</Link>
        </div>
}
        
        </>
    );
}

export default Home;