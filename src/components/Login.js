import React from 'react';
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
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Search from './Search';

const Login = ()=> {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [message,setMessage]= useState('');
    const [errorMessage,setErrorMessage]= useState('');
    const [profile,setProfile]=useState(null)

    const user = {username,password}

    const headers = {
        'Content-Type': 'application/json'
      }
  const handleLogin = () => {
    console.log('hello')
    console.log(user);
    // Your authentication logic goes here
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {

      axios.post("http://localhost:8080/user",user,{
        headers:headers
    }).then((response)=> {
          setMessage(response.data.message);
          setProfile(response.data);
    })
     if(message==="success"){
        setIsLoggedIn(true);   
           
    }else{
    setErrorMessage(message);
    }
  }}

  return (
    <div>
         {!isLoggedIn?
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='User Name' id='formControlLg' type='text' size="lg" onChange={(e) => setUsername(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' value={password} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>
              
              <br/>

              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleLogin}>
                Login
              </MDBBtn>

              <br/>
              <br/>

              <div>
                <p className="mb-0">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    
    :<Search isLoggedIn={isLoggedIn} profile={profile}/>
         }
    </div>
  );
}

export default Login;