import {react,useRef,useState} from 'react'
import List from './List'
import SearchData from './SearchData';
import { Link } from 'react-router-dom';
import SignupPage from './SingnupPage'
import '../Form.css'; // Import CSS file for styling
import Home from './Home';
const SearchBar = ({isLoggedIn}) => {

    const [data,setData]=useState([]);
    const inputElement = useRef();
    const [showButton,setShowButton]=useState(true);
//  const handleSubmit= async () => {
//     alert("hello")
//   console.log(inputElement.current)
      
      
//    const res=   await  fetch('http://localhost:8080/searchByName?q=req');
//         const data=await res.json();
//         console.log(data);
//         setData(data);
//     };  

const center= {
    
  margin:"00px 50px",
  width: "70%",
  padding: "10px",
  top:"200px",
  float:"left"
}
const center1= {
    
  margin:"0px 50px 0 200px",
  width: "70%",
  padding: "10px",
  top:"600px",
  backgroundColor:"blue"
}

    const getData = async () => {
        console.log("hello" + inputElement.current?.value);
        const res = await fetch(`http://localhost:8080/search/${inputElement.current?.value}`);
        const data = await res.json();
        setData(data);
        setShowButton(false)
      };
    return(
   <div className="auth-container1">

    {/* <div>
      {isLoggedIn && 
        <div style={center}>
         <Link to="/logout" element={<SignupPage/>}>Logout</Link>
        </div> 
      }
    </div> */}
   
          <div style={{position:"absolute", right:"100px",top:"100px"}}>
         <Link to="/" element={<Home/>}>Logout</Link>
         </div>
     {showButton? 
     <div style={center}> 
      <input  type="text" ref={inputElement} size="50"/>
        
      <button onClick={getData}>Button</button>
      </div>

    :
      <div>
        <input  type="text" ref={inputElement} size="50"/>
        <button onClick={getData}>Button</button>
      <SearchData data={data}/>
      </div>
}
        </div>)
}
export default SearchBar;