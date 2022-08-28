import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navstky'>
    <div className='Nparent1'>
    <div className='subp1'>
    <div><Link to='/'></Link></div>
        <div><Link to='/menswear'>MENSWEAR</Link></div>
        <div><Link to='/womenwear'>WOMENSWEAR</Link></div>
        <div><Link to='/everythimg'>EVERYTHIN ELSE</Link></div>
        <div><Link to='/sale'>SALES</Link></div>
        <div><Link to='/search'>SEARCH</Link></div>
    </div>

    <div style={{fontSize:"20px", color:"black"}}><Link to='/ #'>SSENSE</Link></div>

    <div className='subp2'>
        <div><Link to='/'>ENGLISH</Link></div>
        <div><Link to='/login'>LOGIN</Link></div>
        <div><Link to='/'>WISHLIST</Link></div>
        <div><Link to='/'>SHOPING BAG(0)</Link></div>
    </div>



    </div>
 
    
    </div>
  )
}

export default Navbar





// import React from 'react'
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div style={{display:"flex", gap:"2rem"}}>
    
//         <div><Link to="/">SALE</Link></div>
//         <div><Link to="/search">SEARCH</Link></div>
//         <div> <div><Link to="/women">WOMEN</Link></div></div>
//     </div>
//   )
// }

// export default Navbar
