import React from 'react'
import '../pages/Menspage.css'

const RightNav = () => {
  return (
    <div>
            <div className='rightbar'>
    <h4>Sort</h4>
    <p>Latest Arrival</p>
    <p>Tranding</p>
    <p>Price Low To High</p>
    <p>Price high To Low</p>
    <br />
    <h4 style={{fontWeight:"bold"}}>Color</h4>
   <select name="All color" id="">
   <option value="">All Color</option>
    <option value="">black</option>
    <option value="">Brown</option>
    <option value="">Blue</option>
    <option value="">Brown</option>
    <option value="">Burgandy</option>
    <option value="">Grey</option>
    <option value="">Green </option>
    <option value="">Navy</option>
    <option value="">Orange</option>
    <option value="">Pink</option>
    <option value="">Purpal</option>
    <option value="">Tan</option>
    <option value="">White</option>
    <option value="">Yellow</option>


   </select>
      

     
    </div>
    </div>
  )
}

export default RightNav