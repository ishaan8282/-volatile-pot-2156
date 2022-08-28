
import React from 'react'
import '../pages/Menspage.css'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const LeftNavbar = () => {
  return (
    <div>
    <div className='leftbar'>

<div style={{marginLeft:"-2rem"}}><Checkbox  backgrounColor='black' defaultChecked>Check</Checkbox></div>
<div style={{float:'left',marginTop:"1rem"}}>
<h2 style={{color:'red'}}>Topwear</h2>
<p>T-shirt</p>
<p>Casual-Shirt</p>
<p>Sweater</p>
<p>Jacket</p>
<p>Blazer</p>
<p>Suit</p>
<p>Rain jacket</p>
</div>

<div style={{float:'left',marginTop:"1rem"}}>
<h2 style={{color:'red'}}>Bottomwear</h2>
<p>Jeans</p>
<p>Casual Trouar</p>
<p>Formal Trouar</p>
<p>Shorts</p>
<p>Track Pants </p>

</div>
<div style={{float:'left',marginTop:"1rem"}}>
<h2 style={{color:'red'}}>Footwear</h2>
<p>Casual Shoes</p>
<p>Sport shoes</p>
<p>Formal shoes</p>
<p>Sneaker</p>


</div>



</div>

    </div>
  )
}

export default LeftNavbar