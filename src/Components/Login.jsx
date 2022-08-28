import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css"
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
// import styles from "../Login/login.module.css";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [passward,setPassward]=useState("")
  const navigate = useNavigate();
  const handleLogin = async () => {
    let res = await axios
      .post("https://reqres.in/api/login", {
        username: email,
        email: email,
        password: passward,
      })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setToken(null);
      });
  };
  if (token && passward) {
    navigate("/");
  }
  return (
    <div>
      <Stack>
        <Container >
          <Navbar/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={styles.logindiv}>
        <legend className={styles.heading}>Log In</legend>
  
        <div className="form-box">
             
           
         
                  <div><label for="user_email">Email</label></div>
                  <Input type="email" placeholder="Enter Email" className={styles.user_email}  onChange={(e) => setEmail(e.target.value)} />
                
                  <div><label for="pass">Password</label></div>
                  <Input type="password" placeholder="Enter Password" className={styles.pass}  onChange={(e) => setPassward(e.target.value)} />
                
              
                  <div><label className="check">Entity check</label> </div>
                  {/* <div className="check_box">  */}
                   
                      <div className="captcha" ><img src="https://www.cmnty.com/support/wp-content/uploads/2017/07/nocaptcha.gif" wclassNameth="500x"></img></div>
                {/* //</div>  */}
               
               
                 <button className={styles.Login}  onClick={handleLogin}>Log In</button>
               
               <div>
                 <Link className="forgot" to="/p/reset"> <p>Can't remember your password?</p> </Link>
               </div>
        </div>
         
               </div>
               <div className="gap"></div>
               <div className="bottom-box">
                {/* <a to="https://www.campaignmonitor.com/signup/?sv=login&amp;__utma=38149500.435826323.1606104324.1606284463.1606286459.8&amp;__utmb=38149500.4.10.1606286459&amp;__utmc=38149500&amp;__utmx=-&amp;__utmz=38149500.1606286459.8.8.utmcsr=campaignmonitor.com|utmccn=(referral)|utmcmd=referral|utmcct=/&amp;__utmv=38149500.|1=user-type=user=1&amp;__utmk=15572788"> */}
                  <h2 className="free account">Create a free account</h2>  
                  <h4>Sign up for a free account, and start sending campaigns for as little as $9/month.</h4>
            
               </div>
         <Footer/>
        </Container>
      </Stack>
    </div>
  );
};

export default Login;