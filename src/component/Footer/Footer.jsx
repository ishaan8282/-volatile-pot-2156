import React from 'react'
import './Footer.css'
import { BsFacebook,BsTwitter,BsInstagram,BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='container1'>
    <div className='subcont1'>
    <div className='gap'>
        <button>CONTURY/REGION:INDIA</button>
        <button>NEWSLATTER SIGNUP</button>
        <button>CUSTEMBER CARE</button>
        <button>LOCATION</button>
        <button>EDITORIAL ARCHIVE</button>
        <button>CAREER </button>
        <button>AFFILATED</button>
        <button>SITEMAP</button>
    </div>
    <div style={{display:"flex",gap:"10px",fontSize:"10px",marginTop:".5rem"}}>
    <BsFacebook/>
    <BsTwitter/>
    <BsInstagram/>
    <BsYoutube/>
    

    
    </div>
    </div>
    <div className='atbottom'>
        <button>@sssense.com</button>
        <button>Term&Condition</button>
        <button>Privacy Policy</button>
        <button>Cookies</button>
        <button>Assecdibility</button>
    </div>
   

    </div>
  )
}

export default Footer