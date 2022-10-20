import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

// import firebase
import '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Registration() {

  const email = useRef();
  const password = useRef();
  const auth = getAuth();
  const navigate = useNavigate();


  function signUpUser(){
    const emailRef = email.current.value;
    const passwordRef = password.current.value;

    createUserWithEmailAndPassword(auth, emailRef, passwordRef)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigate("/Dashboard")

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
    <div className='Register'>
    <div><input ref={email} type="text" />Enter Your Email</div>
    <div><input  type="text" />Enter Your Username</div>
    <div><input ref={password} type="text" />Enter Your Password</div>
    <button onClick={signUpUser}>Sign Up</button>
</div>
  )
}

export default Registration