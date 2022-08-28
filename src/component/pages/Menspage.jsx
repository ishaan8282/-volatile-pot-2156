import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import './Menspage.css';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import LeftNavbar from '../Navbar/LeftNavbar';
import RightNav from '../Navbar/RightNav';
import { Link } from 'react-router-dom';



   
  const menspage= [
  {
      "id":1,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M202001_1/the-row-ssense-exclusive-black-essoni-hoodie.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":2,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M192002_1/the-row-ssense-exclusive-navy-joseph-shirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive navy Essoni",
      "prod":"Shirt",
      "price":"$690"


  },
  {
      "id":3,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M190001_1/the-row-ssense-exclusive-black-ezan-sweater.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":4,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M190001_1/the-row-ssense-exclusive-black-ezan-sweater.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":5,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M213001_1/the-row-ssense-exclusive-green-duke-t-shirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":6,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M186000_1/the-row-ssense-exclusive-indigo-wyatt-jeans.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":7,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M190000_1/the-row-ssense-exclusive-black-edgar-lounge-pants.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":8,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M193004_1/the-row-ssense-exclusive-beige-gerhardt-shorts.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":9,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M186001_1/the-row-ssense-exclusive-blue-tunna-jeans.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":10,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M186000_1/the-row-ssense-exclusive-indigo-wyatt-jeans.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":11,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M140001_1/the-row-ssense-exclusive-black-issyh-bucket-hat.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":12,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M140000_1/the-row-ssense-exclusive-beige-issyh-bucket-hat.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  }, {
      "id":13,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M172000_1/the-row-ssense-exclusive-black-tote.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },

  {
      "id":14,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M170000_1/the-row-ssense-exclusive-navy-slouchy-banana-messenger-bag.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  }, {
      "id":16,
      "image":"",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":17,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M180004_1/gucci-blue-printed-jacket.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":18,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M180001_1/gucci-navy-gg-jacket.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":19,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M202001_1/the-row-ssense-exclusive-black-essoni-hoodie.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":20,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M202001_1/the-row-ssense-exclusive-black-essoni-hoodie.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":21,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M186002_1/gucci-blue-bleached-jeans.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":22,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M192011_1/gucci-blue-printed-shirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":23,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M192012_1/gucci-pink-printed-shirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":24,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M191008_1/gucci-brown-pleated-trousers.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  }, {
      "id":25,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M191010_1/gucci-gray-check-trousers.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":26,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M195004_1/gucci-beige-double-breasted-blazer.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":27,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M200003_1/gucci-pink-gg-cardigan.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":28,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M192015_1/gucci-blue-striped-shirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":29,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M202006_1/gucci-navy-gg-jacket.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":30,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M204005_1/gucci-orange-cotton-sweatshirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":26,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M195004_1/gucci-beige-double-breasted-blazer.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":27,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M200003_1/gucci-pink-gg-cardigan.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  },
  {
      "id":28,
      "image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451M192015_1/gucci-blue-striped-shirt.jpg",
      "title":"THE ROW",
      "para":"ssense exclusive black Essoni",
      "prod":"hoodie",
      "price":"$790"


  }

]













const Menspage = () => {
  const [mens,setMens]=useState([])
  useEffect(()=>{
    const fetchPage = async () =>{
      let res=await fetch("http://localhost:8080/menspage")
      let data=await res.json();
      console.log(data)
      setMens(data)

    }
    fetchPage();

  },[])

  const handleClick=()=>{
    alert("add to cart")
  }
  return (
    <>
    <div className='topcontainer'>
   <LeftNavbar/>


  
    <div className='middlepage'>
    {

     menspage.map((page,id)=>(
        <div className='container'>
        <div>
          <img className='imgheight' src={page.image} alt="" />
        </div>
       <div>
       <p>{page.title}</p>
        <p>{page.para}</p>
        <p>{page.prod}</p>
        <p style={{backgrounColor:"teal"}}>{page.price}</p>
        <div className='color-btn'>
        <Link to="/cart"><button onClick={handleClick} style={{color:"white"}}>Add to cart</button></Link>
        </div>
       </div>
        </div>
      ))
    }
    </div>
    <RightNav/>
  
    </div>
    <Footer/>


    
    </>
  )
}

export default Menspage