import {Routes, Route} from "react-router-dom"

import Login from "../Components/Login"
import Home from "../Components/Home"
import Contact from "../Components/Contact"
import Agencies from "../Components/Agencies"
import Customers from "../Components/Customers"
import Features from "../Components/Features"
import Gallery from "../Components/Gallery"
import Pricing from "../Components/Pricing"
import Resources from "../Components/Resources"

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/Login" element={<Login/>}/>
            <Route path="/agencies" element={<Agencies/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/features" element={<Features/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/resources" element={<Resources/>}/>


        </Routes>
    )
}