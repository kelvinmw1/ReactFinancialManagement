import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

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

        navigate("/Dashboard")

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
  <div className='Register'>
    <div><input ref={email} type="text" />Enter Your Email</div>
    <div><input ref={Name} type="text" />Enter Your Username</div>
    <div><input ref={password} type="text" />Enter Your Password</div>
    <button onClick={signUpUser}>Sign Up</button>
  </div>
  )
}

export default Registration