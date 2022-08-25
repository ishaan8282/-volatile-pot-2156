import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
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
        <legend className="heading">Log In</legend>
  
        <div className="form-box">
             
           
         
                  <div><label for="user_email">Email</label></div>
                  <Input type="text" className="user_email" />
                
                  <div><label for="pass">Password</label></div>
                  <Input type="password" className="pass" />
                
              
                  <div><label className="check">classNameentity check</label> </div>
                  {/* <div className="check_box">  */}
                   
                      <div className="captcha" ><img src="https://www.cmnty.com/support/wp-content/uploads/2017/07/nocaptcha.gif" wclassNameth="500x"></img></div>
                {/* //</div>  */}
               
               
                 <button className="log"><p>Log In</p></button>
               
               <div>
                 <Link className="forgot" to="/p/reset"> <p>Can't remember your password?</p> </Link>
               </div>
        </div>
          <div className="gap"></div>
               <div className="bottom-box">
                {/* <a to="https://www.campaignmonitor.com/signup/?sv=login&amp;__utma=38149500.435826323.1606104324.1606284463.1606286459.8&amp;__utmb=38149500.4.10.1606286459&amp;__utmc=38149500&amp;__utmx=-&amp;__utmz=38149500.1606286459.8.8.utmcsr=campaignmonitor.com|utmccn=(referral)|utmcmd=referral|utmcct=/&amp;__utmv=38149500.|1=user-type=user=1&amp;__utmk=15572788"> */}
                  <h2 class="free account">Create a free account</h2>  
                  <p>Sign up for a free account, and start sending campaigns for as little as $9/month.</p>
            
               </div>
         
        </Container>
      </Stack>
    </div>
  );
};

export default Login;