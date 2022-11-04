import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import { Button } from 'react-bootstrap';

//import firebase
import '../firebase';
import { Db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

function Income() {

  const [incomeList, setIncomeList] = useState([]);

  //pull income data
  useEffect(()=>{
    const incomeData = getDocs(collection(Db, "income"));
    incomeData.then((querySnapshot)=>{
      let incomeItem = [];
      querySnapshot.forEach((doc)=>{
        incomeItem.push({id: doc.id, ...doc.data()});
        setIncomeList([...incomeItem]);
      })
    })
  })

  // navigate to add income component
  const navigate = useNavigate();

  function goToAddIncome(){

    navigate("/Addincome")
  }
  return (
    <div className='dashboard'>

    <LeftNavbar/>
    <div className='workspace'>
      <Navbar/>
      <div className='content'>
        <h1>Income</h1>
        <Button onClick={goToAddIncome}>Add income</Button>
      </div>
      <div>
      {incomeList.map((myincome) => (
        <div key={Math.random()}>
          <p>Amount: {myincome.amount}</p>
          <p>Income Account: {myincome.incomeAccount}</p>
          <p>Date: {myincome.incomeDate}</p>
          <p>Received By: {myincome.receivedBy}</p>
          <hr/>
        </div>
       ))}
      </div>


    </div>

  </div>
    
  )
}

export default Income