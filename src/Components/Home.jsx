import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from "./Home.module.css"
import {Link} from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import styles from "./Footer.module.css"
function Home() {
  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div>
         <div className={styles.row_1}>
           <div className={styles.row_1_left}> 
           
            <h1> Drive results with<br/>unforgettable email<br/>marketing.</h1>
            <p>Connecting with your audience has never been easier with Campaign <br/>
                Monitor’s straightforward email marketing and automation tools.</p>
            <div className={styles.row_1_btn}>
                 <button className={styles.btn_row1_1}>Sign up for free </button>
                 <button className={styles.btn_row1_2}>Learn more </button> 
            </div>
         </div>
        
         <div className={styles.row_1_right}>
            
                <img  src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/2021_cm_web_homepage_hero-stackofemails.png?ver=298"    alt="Row-1"/>
           </div>  
   
    
             </div>    
     {/* // Row 2 of landing page  */}

     <div className={styles.box_2}>
        <div className={styles.box_2_p}>
            <p>Loved by over 2 million marketers at 250,000 businesses around the world.</p>
        </div>

        <div className={styles.box_2_logo}>
       
        <div className={styles.logo}>
            <img src="https://i3.campaignmonitor.com/assets/images/logo-strip/ripcurl-2.png?ver=167291606125046757"  width="40%" alt="1"/>
     
        </div>
     
        <div className={styles.logo}>
            <img src="https://i3.campaignmonitor.com/assets/images/logo-strip/digiday-2.png?ver=167291606125046761" width="40%" alt="2"/>
     
        </div>
        
        <div className={styles.logo}>
            <img src="https://i3.campaignmonitor.com/assets/images/logo-strip/au_red_cross-2.png?ver=167291606125046763" width="40%" alt="3"/>
     
        </div>
     
        <div className={styles.logo}>
            <img src="https://i3.campaignmonitor.com/assets/images/logo-strip/girlboss-2.png?ver=167291606125046764" width="40%" alt="4"/>
     
        </div>
         
        <div className={styles.logo}>
            <img src="https://i3.campaignmonitor.com/assets/images/logo-strip/eno-2.png?ver=167291606125046766"width="40%" alt="5"/>
     
        </div>
     </div>

     {/* Row 3 Landing Page  */}
       
     <div className={styles.box_3_heading}>
        <h3>Drag and drop your way to a beautiful email.</h3>
     </div>
    
        <div className={styles.box_3}>
    
            {/* <div className={styles.content}>
                <h3>EASE OF USE</h3>
                <p>Customize any template or design to showcase your brand using the</p>
                <p>simply powerful
                     drag-and-drop email builder
                      —no coding required.</p>       
                <h3>COMPLETE CUSTOMIZATION</h3>
                <p>Display your brand at its best with precise adjustments to every</p>
                <p>aspect of your campaign in the email builder.</p>                  
                <h3>TEMPLATE MANAGEMENT FOR TEAMS</h3>
                <p>Allow your email designer to lock sections of the template so that</p>
                <p>your team only updates what you want them to — ensuring your</p>                
                <p> brand style and business critical information all stay intact.</p>
            </div>
            
                   <div className={styles.right_img_1}>
                        <img src="https://i3.campaignmonitor.com/assets/images/features/new/design/editor_sidebar.png?ver=16729" width="250px" height="465px" alt="taskbar"/>                        
                      <div className="right_img_2">                     
                         <img src="https://i3.campaignmonitor.com/assets/images/features/new/design/editor_email.png?ver=16729" width="550px" alt="Gusto img"/>
                    
                      </div>
                    </div>                   */}
     </div> 
        
      </div>    
     {/* <div className={styles.bottom_part}>
       <div>
       <p>Eager to see it in action? Take a look.</p>
      </div>
      <button className={styles.btn_free}><Link to="https://www.campaignmonitor.com/signup/?sv=home" >Get started for free</Link></button>
     </div>  */}

     {/* Templates  */}
     <div className={styles.row_4}>

        <div className={styles.tempalate_img}>
            <div>
                <img src="https://i3.campaignmonitor.com/assets/images/home/templates/template-1_comp.jpg?ver=16729" alt="template1"/>
            </div>

            <div>
                <img src="https://i3.campaignmonitor.com/assets/images/home/templates/template-2_comp.jpg?ver=16729" alt="template 2"/>
            </div>

            <div>
                <img src="https://i3.campaignmonitor.com/assets/images/home/templates/template-3_comp.jpg?ver=16729" alt="template 3"/>
            </div>

        </div>

        <div className={styles.row4_col2}>
            <div className={styles.row4_font}><p>Get started with one of <br/>our free templates.</p></div>

            <div className={styles.row4_para}><p>Start your email with one of our professionally-<br/>designed 
                templates to launch targeted campaigns <br/>like marketing offers,
                product announcements,<br/> newsletters, or Event promotions.</p></div>
            <button className={styles.btn_row4}>Build an email</button>

        </div>
        
         </div>


       {/* //  Sucess  */}

      <div className={styles.row_5}>
        <div className={styles.row5_outer}>
            <div className={styles.row5_para}>"Campaign Monitor helped us easily create beautiful emails that turned our <br/>
                Bombshell wetsuit into a global phenomenon.”</div>
            <div className={styles.row5_name}>James Taylor, Global Creative Director</div>
            <button className={styles.btn_support}>See Rip Curl's success</button>
        </div>
      </div>

       {/* // Automate */}
      <div className={styles.automate}>
        <div className={styles.auto_right}>
            <h3>Automate email journeys <br/>for perfectly timed sends.</h3>
            <p>Most marketers think automation is intimidating. 
                But <br/>creating customer journeys has never been more <br/>approachable than with the visual journey designer.</p>
            <button className={styles.btn_auto}>Explore Automation</button> 
        </div>
        <div className={styles.auto_img}>
            <img src="https://i3.campaignmonitor.com/assets/images/home/automation-graphic.png?ver=16729" alt="automation"/>
        </div>
        
       </div>

        {/* // Sucess 2-Part  */}
      <div className={styles.row_6}>
        <div className={styles.row6_outer}>
            <div className={styles.row6_para}>"“We've been using Campaign Monitor for a variety of email needs, beyond just<br/>
                 traditional email marketing and newsletters, like using automation to nudge people<br/>
                  who haven't completed their profiles in the Girlboss professional network. Overall,<br/>
                   we've found all of the features easy for a small, nimble team to use.”</div>
            <div className={styles.row6_name}>Lauren Black, Digital Marketing Manager</div>
            <button className={styles.btn_support}>See Girlboss's success</button>
        </div>
       </div>

       {/* // Campagin landing page Row 6  */}
      <div className={styles.row_7}>
        <div className={styles.row_7_outer}>
        <h1>Get started with Campaign Monitor today</h1>
        <p>With our powerful yet easy-to-use tools, it's never been easier<br/>
             to make an impact with email marketing.</p>
        <button className={styles.btn_supportlast}>Sign up for free</button>
        </div>
      </div>
        </div>
      
        <Footer/>

    </div>
  )
}

export default Home