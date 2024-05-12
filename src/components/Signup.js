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

function Signup() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [institute,setInstitute]=useState('');
    const [message,setMessage]= useState('');
    const [errorMessage,setErrorMessage]= useState('');

    const user = {username,password,email,institute}
    const headers = {
      'Content-Type': 'application/json'
    }
    const handleSubmit = () => {

      axios.post("http://localhost:8080/saveUser",user,{
          headers:headers
      }).then((response)=> {
            setMessage(response.data)
      })
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <div>
              {message==''?
            <div>
              <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
              <p className="text-white-50 mb-5">Create a free account</p>
            </div>:""}
            </div>
            {message.includes("exist") ?
      <div style={{color:'red'}}>{message}</div> : 
      <div style={{color:'green'}}>{message}</div> 
      }

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='User Name' id='formControlLg' type='text' size="lg" onChange={(e) => setUsername(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Institute' id='formControlLg' type='text' size="lg" onChange={(e) => setInstitute(e.target.value)}/>

             <br/>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleSubmit}>
                Register
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;