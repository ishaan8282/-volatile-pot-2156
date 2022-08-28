import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div>
         <div className={styles.NavContainer}>

       


        <div className={styles.logo}>
          <Link  style={{ display:"flex",  height:"100px",
         width:"200px",justifyContent:"center", alignItems:"center"}}to="/"><img src="https://i3.campaignmonitor.com/assets/images/global/footer/cmg-cm.svg?ver=16735"  alt="Campaign Monitor" title="Campaign Monitor - Part of the CM Group family of brands"/></Link>
        </div>



    <div ClassName={styles.Middlediv}>


       <Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/features"><p>Features</p></Link> 



        <Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} 
        to="/pricing"> <p>Pricing</p> </Link>




        <Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/resources"><p>Resources</p></Link> 



    <Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/customers"><p>Customers</p></Link> 


<Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/gallery"><p>Gallery</p></Link> 



<Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/agencies"><p>Agencies</p></Link> 

      </div>



<div ClassName={styles.Enddiv}>

<Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/contact"><p>Contact Us</p></Link> 


<Link style={{textDecoration:"none",
        color:  "white",
        fontSize: "16px",
         
        letterSpacing: ".14em",
        lineHeight: "24px"
      }} to="/Login"><p>Log in</p> </Link>

        <button className={styles.TryitFree}>TRY IT FREE</button>
 </div>


        
        </div>
    </div>
   
  )
}

export default Navbar