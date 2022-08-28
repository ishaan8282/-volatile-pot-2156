// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./login.css";

// function Login() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "naki@gmail.com",
//       password: "123456"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   // Sign In

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>email address </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit"/>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title"><p>LOGIN OR CREATE ACCOUNT</p></div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default Login;



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
      <div >
      
      </div>
      <Stack>
        <Container >
         <p style={{fontSize:"12px"}}>LOGIN OR CREATE ACCOUNT</p>
    
            <span style={{fontSize:"12px"}}>Email address</span>
            <br />
            <Input
              type="text"
              value={email}
              placeholder="Email or Username"
              w="60%"
              position="static"
              variant={"outline"}
              borderColor="grey"
              borderWidth="3px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          
            <span style={{fontSize:"12px"}}>Passward</span>
            <br />
            <Input
              type="text"
              value={passward}
              placeholder="Email or Username"
              w="60%"
              position="static"
              variant={"outline"}
              borderColor="grey"
              borderWidth="3px"
              onChange={(e) => setPassward(e.target.value)}
            />
        
          <br />
          <br />
            <Button
              _hover={{ bgColor: "#515151", color: "white" }}
              bgColor="black"
              color="white"
              w="350px"
            
              onClick={handleLogin}
            >
              Continue
            </Button>
         
        </Container>
      </Stack>
    </div>
  );
};

export default Login;