import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import { useRef } from "react";
  import SearchData from "./SearchData";
import { Link } from "react-router-dom";
import List2 from "./List2";
import Login from './Login'
// import DropdownModal from './DropdownModal'

const Search = ({isLoggedIn,profile}) => {
    const [data,setData]=useState([]);
    const inputElement = useRef();
    const [showButton,setShowButton]=useState(true);
    const [type,setType]=useState('A')
    const [value, setValue] = React.useState('');
    const input1= useState('2024');

    const [input,setInput]=useState('');

    const [position,setPosition]=useState('');

    const headers = {
        'Content-Type': 'application/json'
      }
      const searchRequest={
        name:inputElement.current?.value,
        date:''
   }
   const handleChange = (event) => {

    setValue(event.target.value);
 
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
        date1:value,
        type:type
     })
    });
    const data = await rawResponse.json();
  
    setData(data);
    setShowButton(false)
  };
  const getData3=   async () => {
    console.log("getData3")
    const rawResponse = await fetch('http://localhost:8080/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:inputElement.current?.value,
        date1:value,
        type:type
     })
    });
    const data = await rawResponse.json();
  
    setData(data);
    setShowButton(false)
  };
    return (
        <>
        <div  style={{float:"right",marginTop:"-680px",position: "absollute"}}>
            {/* <DropdownModal/> */}
        {/* <Dropdownoptions profile={profile}/> 
         <ProfileModal test={'hello'} profile={profile}/>  */}
         <List2 profile={profile}/>
         {/* <Link to="/logout" element={<Login/>}>Logout</Link> */}
        
        </div>
         {data.length===0?
         <div style={{margin:"240px"}}>
        <input type="text" ref={inputElement} size="70"/>
        <button onClick={getData2}>Search</button><br/>
        <input type="radio" style={{color:"bule"}} value="B" name="type" onChange={(e)=>setType(e.target.value)} />     
       Book <input type="radio" style={{color:"bule"}} value="A" name="type" onChange={(e)=>setType(e.target.value)}/> All
       &nbsp;&nbsp;
       
       <select value={value} onChange={handleChange}>
       <option value=""> </option>
  <option value="2024">2024</option>

  <option value="2023">2023</option>

  <option value="2022">2022</option>

</select>
        <div>



</div><br/>
       <SearchData data={data} />
      </div>:
      <div>
        <div  style={{float:"right",marginTop:"-540px",marginRight:"-100px",
        position:"absollute"}}>
            <List2 profile={profile}/>
        {/* <Dropdownoptions/>  */}
            {/* <ProfileModal test={'hello'} profile={profile}/> */}
          
            </div>
       <div style={{margin:"100px"}}>
           
       <input type="text" ref={inputElement} size="70"/>
       <button onClick={getData2}>Search</button><br/>
       <input type="radio" style={{color:"bule"}} value="B" name="type" onChange={(e)=>setType(e.target.value)} />     
      Book <input type="radio" style={{color:"bule"}} value="A" name="type" onChange={(e)=>setType(e.target.value)}/> All
      &nbsp;&nbsp;
      <select value={value} onChange={handleChange}>
      <option value=""></option>
  <option value="2024">2024</option>

  <option value="2023">2023</option>

  <option value="2022">2022</option>

</select>
      <br/>
      <SearchData data={data} />
     </div>
     </div>
      }
    
        </>
    )
}

export default Search;