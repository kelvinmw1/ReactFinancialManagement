import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";

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

      navigate("/Profile");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


  }
  return (
    <div className='Signup'>
        <div><input ref={Email} type="text" />Enter Your Email</div>
        <div><input ref={Password} type="text" />Enter Your Password</div>
        <button onClick={signInUser} >Sign In</button>
    </div>
  )
}

export default Signup