import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from "./Pricing.module.css"
// import {
//     box,
//   } from "@chakra-ui/react";

function Pricing({box,left,right,bg,left2,link}) {
  return (
    <div>
         <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <br />
        
    
      <div className="pricing">
        {/* <!-- <top box> --> */}
            
      {/* <!-- Row 1 --> */}
        <div className="box-1">
           
                <h1>Simple, straightforward pricing.</h1>
                <p>Choose the plan that's right for your brand. Whether you're just getting started with email marketing or you're personalizing</p>
                <p> every campaign, there's a plan for you.</p>
                <div className="btn-box1">
                    <button  className="btn-left">
                    <a href="./sign_up.html" >Get started for free</a>
                </button>
                    <button className="btn-right">
                            <a href="#">High volume pricing</a>
                        </button>
                  </div>
            
        </div>

            {/* <!-- <!SlclassNameing section> --> */}
            <div className="slclassNameer">
               
                    <p>With your list of <input type="text"  value="500" className="input"/>
                        contacts, we've got the right plan for you.</p>
            </div>

           {/* <!-- <Pricing Part> --> */}
         <div className="box-2bg">

        <div className={styles.midSection}>
 
                
                
                
     </div>

 
      <div className="box-3">
      <hr/>
      <div className="box3-link">
       
        <p>Only sending emails occasionally? You can also pay per campaign.</p>
      </div>
        {/* <!-- <Frequent question part> --> */}
      <div>
        <h2 className="question"> Frequently Asked Questions</h2>
     </div> 

          </div>
      <div className="bottom-box">
     <div className="r1_c1">
        <span>What if I go over my plan’s limits?</span>
        <p>
            If you send above your limits or your subscriber list grows, we’ll notify you and you'll have an option to upgrade or pay for the additional emails.
        </p>

       </div>
      <div className="r1_c2">
        <span>Can I change my plan?</span>
        <p>
            Absolutely. You can switch between our monthly basic, monthly unlimited, or pay-as-you-go plans at any point without penalty.
        </p>

        

       </div>
       <div className="r1_c3">
        <span>Is there an annual plan?</span>
        <p>
            While most of our customers sign up for monthly plans, we do offer an annual plan. For more details, please 
            <a href="https://www.campaignmonitor.com/contact-sales/?sv=pricing-USD">contact our sales team</a>
        </p>

        

      </div>
      <div className="r2_c1">
        <span>Do you offer a free trial?</span>
        <p>It’s free to create an account and send a campaign to five subscribers. Send to more than five people when you choose a paclassName plan.</p>
        

       </div>
      <div className="r2_c2">
        <span>What’s the difference between basic and priority support?</span>
        <p>With priority support, your support requests go to the top of the queue so you’ll get help faster.</p>

       </div>
       <div className="r2_c3">
        <span>Can I integrate with other software platforms?</span>
        <p>We have 250+ integrations you can use to connect Campaign Monitor to your other software tools like Salesforce, Wordpress, or Google Analytics.
             <a href="https//www.campaignmonitor.com/appstore/">Browse all integrations here.</a></p>
        </div>
      <div className="r3_c1">
        <span>What payment types are accepted?</span>
        <p>We accept most credit cards and, for high-volume senders and larger organizations, we can support invoicing as well.</p>

       </div>
       <div className="r3_c2">
        <span>What currencies are accepted?</span>
        <p>The prices above are in USD. However, we can work with you to support additional currencies such as CAD, EUR, GBP, AUD, and NZD.</p>

        </div>
        <div className="r3_c3">
        <span>Is there a discount for nonprofits?</span>
     <p>Yes there is! If your company is a nonprofit, we offer a 15% discount. Please contact our sales team to find out more.</p>

        </div>
       </div>
        <div className="row_7">
         <div className="row_7_outer">
       <h1>Get up and running in minutes.</h1>
        <p>Our powerful, easy-to-use marketing tools can help your<br/> business take off.</p>
       <button className="btn_support">Try it for free</button>
        </div>
         </div>
         <Footer/>
    </div>
    </div>
    </div>

 
 
 
  )
}

export default Pricing