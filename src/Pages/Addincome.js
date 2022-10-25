import React from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';

function Addincome() {
  return (
    <div>
     

      <Navbar/>
      <div className='pagename'>Add Income</div>
      <Button className='addbtn' variant="primary">Add income</Button>
      
      
    </div>
  )
}

export default Addincome