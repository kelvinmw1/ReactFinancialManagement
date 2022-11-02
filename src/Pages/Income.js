import React from 'react'
import {useNavigate} from "react-router-dom";
import Navbar from '../Components/Navbar';
import { Button } from 'react-bootstrap';

function Income() {

  const navigate = useNavigate();

  function goToAddIncome(){

    navigate("/Addincome")
  }
  return (
    <div>
      <Navbar/>
      <div className='workarea' >
        <h1>Income</h1>
        <Button onClick={goToAddIncome}>Add income</Button>
      </div>
    </div>

  )
}

export default Income