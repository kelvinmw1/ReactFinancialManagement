import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Leftnav from '../Components/Leftnav.Js';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {useNavigate } from "react-router-dom";

// import firebase
import '../firebase';
import { Db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

function Addincome() {

  //instantiating objects
  const amount = useRef();
  const incomeDate = useRef();
  const incomeAccount = useRef();
  const receivedBy = useRef();
  const navigate = useNavigate();

  //add account function

  function submitIncome(){
    //get data from inputs 
    
    const amountInput = amount.current.value;
    const incomeDateInput = incomeDate.current.value;
    const incomeAccountInput = incomeAccount.current.value;
    const receivedByInput = receivedBy.current.value;


    const myDocId = Math.random();
    const myDocId2 = myDocId * 168577996976;
    const myDocId3 =  Math.trunc(myDocId2);

    const finalDocId = myDocId3.toString();

       // Add a new document in collection "cities"
       setDoc(doc(Db, "income", finalDocId), {
        docId:finalDocId,
        amount:amountInput,
        incomeDate: incomeDateInput,
        incomeAccount: incomeAccountInput,
        receivedBy: receivedByInput

    }).then(()=>{
        navigate("/income");
    })

}
  

  return (
    <div>     
     <Navbar/>
     <Leftnav/>

      <div className='area'>
        <div>
          <h1 className='pagename'>Add Income</h1>       
        </div> 
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" ref={amount} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Income Date</Form.Label>
          <Form.Control type="datetime-local"  ref={incomeDate}/>
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Income Account</Form.Label>
          <Form.Select ref={incomeAccount} >
          <option value="Cheque">Cheque</option>
          <option value="Cash">Cash</option>
          <option value="M-Pesa">M-Pesa</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Received By</Form.Label>
          <Form.Control type="text"  ref={receivedBy}/>
        </Form.Group>


        <Button variant="primary" type="submit" onClick={submitIncome}>
          Submit
        </Button>
      </div>
           
    </div>
    
  )
}

export default Addincome