import {react,useRef,useState} from 'react'
import List from './List'
import SearchData from './SearchData';
import { Link } from 'react-router-dom';
import SignupPage from './SingnupPage'
import '../Form.css'; // Import CSS file for styling
import Home from './Home';
import logo from '../../src/Assests/logout-3.png'
//import searchLogo from '../Assests/icons8-search-64.png'
import axios from 'axios';
const SearchBar = ({isLoggedIn,username}) => {

    const [data,setData]=useState([]);
    const inputElement = useRef();
    const [showButton,setShowButton]=useState(true);

    const input1= useState('2024');
//  const handleSubmit= async () => {
//     alert("hello")
//   console.log(inputElement.current)
      
      
//    const res=   await  fetch('http://localhost:8080/searchByName?q=req');
//         const data=await res.json();
//         console.log(data);
//         setData(data);
//     };  

const center= {
    
  margin:"0px",
  width: "90%",
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

    // const getData = async () => {
    //   const req1={
    //        keyword:inputElement.current?.value,
    //        date1:''
    //   }
    //     console.log("hello" + inputElement.current?.value);
    //    // const res = await fetch(`http://localhost:8080/search/${inputElement.current?.value}/''`);

    //    const res = await axios.get('http://localhost:8080/search',{
    //    params: req1
    // })
    //   const data = res.json();
    //     setData(data);
    //     setShowButton(false)
  
    //     // const data = await res.json();
    //     // setData(data);
    //     // setShowButton(false)
    //   };
    //   // const getData1 = async () => {
    //   //   console.log("hello1=====" + inputElement.current?.value);
    //   //   const res = await fetch(`http://localhost:8080/search/${inputElement.current?.value}/2024`);
    //   //   const data = await res.json();
    //   //   setData(data);
    //   //   setShowButton(false)
    //   // };
    const headers = {
      'Content-Type': 'application/json'
    }
    const searchRequest={
      name:inputElement.current?.value,
      date:''
 }

 const req1={
  name:inputElement.current?.value,
  date:''
}
      const getData =  async () => {

        console.log(req1);
        
    const response =  await fetch("http://localhost:8080/search",{
            name:'react',
            date1:''
         },{
         headers:headers
         }
         );
      const data=response.json();

  
    // Handle successful response
    setData(data);
    setShowButton(false)
 
      };




   const getData2=   async () => {
        const rawResponse = await fetch('http://localhost:8080/search', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:inputElement.current?.value,
            date1:''
         })
        });
        const data = await rawResponse.json();
      
        setData(data);
        setShowButton(false)
      };
      const getData3=   async (p) => {
        console.log("getData3")
        const rawResponse = await fetch('http://localhost:8080/search', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:inputElement.current?.value,
            date1:p
         })
        });
        const data = await rawResponse.json();
      
        setData(data);
        setShowButton(false)
      };


     

      const getData1 = async () => {
        const req1={
             keyword:inputElement.current?.value,
             date1:2024
        }
          console.log("hello1" + inputElement.current?.value);
         // const res = await fetch(`http://localhost:8080/search/${inputElement.current?.value}/''`);
  
         const res = await fetch('http://localhost:8080/search/',{
         params: req1
      }).then(function(response){
        const data = response.json();
          setData(data);
          setShowButton(false)
      })
          // const data = await res.json();
          // setData(data);
          // setShowButton(false)
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

     <div style={{position:"absolute", left:"10px",top:"100px",color:"blue"}}>
      {data!='' &&
        <div>
        <p onClick={()=>getData3(2024)} value={'2024'}>since 2024</p>
        <p onClick={()=>getData3(2023)} value={'2023'}>since 2023</p>
        <p onClick={()=>getData3(2022)} value={'2022'}>since 2022</p>
        </div>}
    </div> 
   
          <div style={{position:"absolute", right:"100px",top:"100px"}}>
            <p style={{color:'blue',fontWeight: 'bold'}}>{username}</p>
         <Link to="/" element={<Home/>}><img src={logo} alt={logo} width="50" height="50"></img></Link>
         </div>
     {showButton? 
     <div style={center}> 
      <input  type="text" ref={inputElement} size="50"/>
      {/* <img src={searchLogo} alt={searchLogo} width="50" height="50" onClick={getData2}></img> */}
      <button onClick={getData2}>Search</button>
      </div>

    :
      <div>
        <input  type="text" ref={inputElement} size="50"/>
        {/* <img src={searchLogo} alt={searchLogo} width="50" height="50" onClick={getData2}></img> */}
        <button onClick={getData2}>Search</button>
      <SearchData data={data} />
      </div>
}
        </div>)
}
export default SearchBar;
