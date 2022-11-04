import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//import firebase
import '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signup() {

  const Email = useRef();
  const Password = useRef();
  const auth = getAuth();
  const navigate = useNavigate();

  function signInUser(){

    const userEmail = Email.current.value;
    const userPassword = Password.current.value;

    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...

      navigate("/Dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      swal("Sign in error!", errorMessage, "warning");
    });


  }
  return (

  <div className='register'>

    <div className='rightside'></div>
    <div className='leftside'>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={Email}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={Password}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={signInUser}>
          Log In
        </Button>
        <br/> <br/>
        <p>Don't have an account? <Link to="/Registration">Register</Link></p>
      </Form>
    </div>

  </div>
   
  )
}

export default Signup