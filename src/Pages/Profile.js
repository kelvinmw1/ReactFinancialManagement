import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

// import firebase
import '../firebase'
import { Db } from '../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

function Profile() {

  const auth = getAuth();
  const navigate = useNavigate();
  const[userName, setuserName] = useState();
  const[userEmail, setuserEmail] = useState();
 
  //get the currently signed in user
  onAuthStateChanged(auth, (user) => {
    if (user) {
     //get the user id
      const uid = user.uid;


      // get information from firestore that corresponds to the user id signed in
      const q = query(collection(Db, "users"), where("userid", "==", uid));
      getDocs(q).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {

          const username = doc.data().UserName;
          const email = doc.data().email;

          setuserName(username);
          setuserEmail(email);
        });

      })
    } else {
      // User is signed out
      navigate("/")
    }
  });
    //signout the user

    // function logOut(){
    //   signOut(auth).then(() => {
    //     // Sign-out successful.
    //   }).catch((error) => {
    //     // An error happened.
    //     navigate("/")
    //   });
    // }




  return (
    <div className='dashboard'>

      <LeftNavbar/>
      <div className='workspace'>
        <Navbar/>
        <div className='contents'>
          <h1>Profile</h1>
          <hr/>
          <div className='profilecontent'>
          <h1>{userName}</h1>
          <h3>{userEmail}</h3>
          <Button>Log Out</Button> 
          </div>

        </div>
      </div>

    </div>
    
    
  )
}

export default Profile