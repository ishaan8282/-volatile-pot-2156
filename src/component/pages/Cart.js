import React from 'react'
import './Cart.css'
import {Link} from "react-router-dom"

const Cart = () => {
  return (
    <div>
        <div className='container-cart'>
        <div className=' top-item'>
            <div>ITEM</div>
            <div>TOTAL</div>
        </div>
        <hr />

        <div className="img-div">
          <div style={{display:"flex"}}>
          <div>
                <img src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/222359M213001_1/the-row-ssense-exclusive-green-duke-t-shirt.jpg" alt="" />
            </div>
            <div>
                <p>THE ROW</p>
                <p>SSENSE Exclusive Green Duke T-Shirt</p>
                <select name="" id="">
                <option value="">Size</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">XXL</option>
                </select>
                <p style={{marginTop:"10rem"}}>move to wish</p>
            </div>
          </div>
            <div>
            <p>$ 390 ussd</p>
            <p style={{marginTop:"11rem"}}>Remove</p>
           

            </div>
        </div>
        </div>
    </div>
  )
}

export default Cart