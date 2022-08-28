import React from 'react'
import Footer from './Footer'
import styles from "./Gallery.css"
// import styles from "./Footer.module.css"
import Navbar from './Navbar'
function Gallery() {
  return (
    <div>
<Navbar/>
    <br />
    <br />
    <br />
    
    

   
   <div className="box_1">
        <div className="inner">
        
            <h1>Introducing the 97 top email<br/> marketing campaign<br/> examples and designs.</h1>
            <p>We’ve curated a selection of the most inspiring and effective email marketing campaigns sent.</p>
            <button className="btn_box1"><a href="sign_up.html">Get Started For free</a></button>
        
        </div>
    </div>
    <div className="box_2">
            
        <div className="container">
            <div className="img_1">
                <div className="overlay">
                    <div className="text">Hello World</div>
                </div>
            </div>
        </div>

            
        <div>

            <div className="container">
                <div className="img_2">
                    <div className="overlay">
                        <div className="text">Rip Curl</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="container">
                <div className="img_3">
                    <div className="overlay">
                        <div className="text">SXSW</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="img_4">
                    <div className="overlay">
                        <div className="text">On</div>
                    </div>
                </div>
            </div>
        </div>
         {/* Row 2 of grid  */}
        <div className="container">
            <div className="img_5">
                <div className="overlay">
                    <div className="text">Flume</div>
                </div>
            </div>
        </div>

            
        <div>

            <div className="container">
                <div className="img_6">
                    <div className="overlay">
                        <div className="text">Monica Vinader</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="container">
                <div className="img_7">
                    <div className="overlay">
                        <div className="text">Drakes Hotel</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="img_8">
                    <div className="overlay">
                        <div className="text">Chatbooks</div>
                    </div>
                </div>
            </div>
        </div>
     Cloning similar row 1 and row 2 

            <div className="container">
            <div className="img_1">
                <div className="overlay">
                    <div className="text">Hello World</div>
                </div>
            </div>
        </div>

            
        <div>

            <div className="container">
                <div className="img_2">
                    <div className="overlay">
                        <div className="text">Rip Curl</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="container">
                <div className="img_3">
                    <div className="overlay">
                        <div className="text">SXSW</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="img_4">
                    <div className="overlay">
                        <div className="text">On</div>
                    </div>
                </div>
            </div>
        </div>
         Row 2 of grid 
        <div className="container">
            <div className="img_5">
                <div className="overlay">
                    <div className="text">Flume</div>
                </div>
            </div>
        </div>

            
        <div>

            <div className="container">
                <div className="img_6">
                    <div className="overlay">
                        <div className="text">Monica Vinader</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="container">
                <div className="img_7">
                    <div className="overlay">
                        <div className="text">Drakes Hotel</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="img_8">
                    <div className="overlay">
                        <div className="text">Chatbooks</div>
                    </div>
                </div>
            </div>
        </div>
                

    </div>
     Campagin landing page Row 6 
     <div className="row_7">
        <div className="row_7_outer">
        <h1>Get started with Campaign Monitor today</h1>
        <p>With our powerful yet easy-to-use tools, it's never been easier<br/>
             to make an impact with email marketing.</p>
        <button className="btn_support">Sign up for free</button>
         <button className="btn_box2"><a href="sign_up.html">Sign up for free</a></button> 
        </div>
    </div> 


    <Footer/>
    </div>
  )
}

export default Gallery