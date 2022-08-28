import React from 'react'
import Navbar from './Navbar'
import styles from "./Resources.css"
import Footer from "./Footer"
function Resources() {
  return (
    
    <div>
      <Navbar/>
    <br />
    <br />
    <br />
    
        
        <div className="box_1">
    <div className="inner">
    
        <h1>The Marketing Resources Hub</h1>
        <p>Everything you need for digital and email marketing that's on point.</p>
    
    </div>
</div>
{/* <!-- Subscribe --> */}

 <div className="box_2">
        <div className="inner_box2">
        <p className="subscribe__text">Get the latest marketing trends in our weekly newsletter.</p>
        {/* <button className="btn_subscribe">Subscribe</button> */}
        </div>
</div>

{/* <!-- grid --> */}

<div className="box_3">
    <div>
        <div className="img_1"></div> 
        <div className="text_1">
            <h4>Examples Of Pivoting Business During the Pandemic</h4>
            {/* <!-- <p>Pivot with the best of them during the pandemic.</p> --> */}
        </div>
    </div>
    <div>
        <div className="img_2"></div> 
            <div className="text_1">
                <h4>Ultimate Email Marketing Benchmarks for 2020: By Industry and Day</h4>
                {/* <!-- <p>We analyzed over 30 billion emails sent from 171 countries in 2019. Here are the...</p> --> */}
            </div>

        

    </div>

    <div>
        <div className="img_3"></div> 
            <div className="text_1">
                <h4>Email Marketing Benchmarks: COVID-19 Edition</h4>
                {/* <!-- <p>Take a look at how COVID-19 has changed email performance.</p> --> */}
            </div>
            

        
    </div>

    <div className="img_4">
        
        <div>   
         <h3>COVID-19 <br/>resources</h3>
        <p>Learn how to pivot and shift your marketing during the coronavirus </p>
        </div>
    </div> 

    <div className="img_5">
        <div>   
            <h3>What’s new in <br/>Campaign<br/> Monitor</h3>
            <p>See the latest features and updates </p>
       </div>

    </div>

    <div className="img_6">
        <div>
            <h3>Email benchmark reports</h3>
            <p>Browse through our email benchmarks reports, along with findings and takeaways to improve your strategy.</p>
        </div>
    </div>
    {/* <!-- cloning above row to fill the block --> */}
    <div>
        <div className="img_2"></div> 
        <div className="text_1">
            <h4>Examples Of Pivoting Business During the Pandemic</h4>
            {/* <!-- <p>Pivot with the best of them during the pandemic.</p> --> */}
        </div>
    </div>
    <div>
        <div className="img_3"></div> 
            <div className="text_1">
                <h4>Ultimate Email Marketing Benchmarks for 2020: By Industry and Day</h4>
                {/* <!-- <p>We analyzed over 30 billion emails sent from 171 countries in 2019. Here are the...</p> --> */}
            </div>

        

    </div>

    <div>
        <div className="img_1"></div> 
            <div className="text_1">
                <h4>Email Marketing Benchmarks: COVID-19 Edition</h4>
                {/* <!-- <p>Take a look at how COVID-19 has changed email performance.</p> --> */}
            </div>
            

        
    </div>

    <div className="img_6">
        
        <div>   
         <h3>COVID-19 <br/>resources</h3>
        <p>Learn how to pivot and shift your marketing during the coronavirus </p>
        </div>
    </div> 

    <div className="img_4">
        <div>   
            <h3>What’s new in <br/>Campaign<br/> Monitor</h3>
            <p>See the latest features and updates </p>
       </div>

    </div>

    <div className="img_5">
        <div>
            <h3>Email benchmark reports</h3>
            <p>Browse through our email benchmarks reports, along with findings and takeaways to improve your strategy.</p>
        </div>
    </div>
   

</div>
<Footer/>
</div>
  )
}

export default Resources