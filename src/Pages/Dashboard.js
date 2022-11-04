import React from 'react'
import Navbar from '../Components/Navbar.js'
import Leftnav from '../Components/Leftnav.Js'
import LeftNavbar from '../Components/LeftNavbar.js'



function Dashboard() {
  return (
    <div className='dashboard'>

      <LeftNavbar/>
      <div className='workspace'>
        <Navbar/>
        <div className='content'>
          <h1>Dashboard</h1>

        </div>
      </div>

    </div>
   
  )
}

export default Dashboard