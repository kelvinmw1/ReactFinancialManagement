import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

// import firebase
import '../firebase'
import { Db } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

function Profile() {

  const auth = getAuth();
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
      // ...
    }
  });




  return (
    <div>
      <div><h1>Profile</h1></div>
      <div className='prof'></div>
      <div><h1>{userName}</h1></div>
      <div><h3>{userEmail}</h3></div>
     
    </div>
    
  )
}

export default Profile