import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"
function Footer() {
  return (
    <div>


        <div className={styles.footer}>
            <div className={styles.top_footer}>
                <div className={styles.footer_logo}>
                <Link to="/"><img src="https://i3.campaignmonitor.com/assets/images/global/footer/cmg-cm.svg?ver=16735" className="cm" alt="Campaign Monitor" title="Campaign Monitor - Part of the CM Group family of brands"/></Link>

                </div>
                <div className={styles.top_right}>

                    <div className={styles.product}>
                        
                        <div className={styles.top_right_heading}>
                            <div>PRODUCT</div>
                        </div>

                        <div className={styles.para}>
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>App Store</div>
                            <div>API</div>
                            <div>Email Templates</div>
                        </div>
                       
                    
                    </div>
                    <div className={styles.email_marketing}>
                        <div className={styles.top_right_heading}>
                            <div>EMAIL MARKETING</div>
                        </div>

                        <div className={styles.para}>
                            <div>Agencies</div>
                            <div>Entertainment</div>
                            <div>Retail</div>
                            <div>Nonprofit</div>
                            <div>Publishing</div>
                        </div>

                    </div>

                    <div className="community">
                        <div className="top_right_heading">
                            <div>COMMUNITY</div>
                        </div>

                        <div className={styles.para}>
                            <div>Agencies</div>
                            <div>Entertainment</div>
                            <div>Retail</div>
                            <div>Nonprofit</div>
                            <div>Publishing</div>
                        </div>

                        
                    </div>
                    <div className={styles.company}>
                        <div className={styles.top_right_heading}>
                            <div>COMPANY</div>
                        </div>

                        <div className={styles.para}>
                            <div>Agencies</div>
                            <div>Entertainment</div>
                            <div>Retail</div>
                            <div>Nonprofit</div>
                            <div>Publishing</div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Footer