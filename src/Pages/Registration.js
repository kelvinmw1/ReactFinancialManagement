import React, { useRef } from 'react'
import {Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// import firebase
import '../firebase'
import { Db } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Registration() {

  const email = useRef();
  const password = useRef();
  const Name = useRef();
  const auth = getAuth();
  const navigate = useNavigate();


  function signUpUser(){
    const emailRef = email.current.value;
    const passwordRef = password.current.value;
    const UserName = Name.current.value;

    //create user with email and password
    createUserWithEmailAndPassword(auth, emailRef, passwordRef)
    .then((userCredential) => {

      // user is now created successfully 
      const user = userCredential.user;
      const userId = user.uid;
      
      // send data to firestore
      setDoc(doc(Db, "users", userId), {
        UserName: UserName,
        email: emailRef,
        userid:userId
      
      }).then(()=>{

        navigate("/Dashboard");

      })

      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // error message
      swal("Sign Up error!", errorMessage, "warning");

      
    });
  }

  return (

    <div className='register'>

      <div className='leftside'>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={email}/>
          </Form.Group>
          
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" ref={Name}/>

            <br />
        

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password}/>
          </Form.Group>
        
          <Button variant="primary" type="submit" onClick={signUpUser}>
            Register
          </Button>
          <br/> <br/>
          <p>Already have an account? <Link to="/">Sign In</Link></p>
        </Form>
      </div>
      <div className='rightside'></div>

    </div>

  )
}

export default Registration