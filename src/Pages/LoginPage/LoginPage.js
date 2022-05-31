import React,{useEffect, useState,useContext} from 'react'
import {
    Row,
    Col,
    Container,
    Form,
    Button
    
    
  } from "react-bootstrap";

  import UserPool from "../../Auth/UserPool"
  import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

  import InputField from '../../Components/InputField/InputField'
  import Btn from '../../Components/Btn/Btn'
  import LabelForm from '../../Components/LabelForm/LabelForm'
  import  "./LoginPage.css"
  import { useNavigate } from 'react-router-dom';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { AppContext } from '../../App';
  import { AccountContext } from '../../Auth/Accounts';


const LoginPage = () => {

    const storeData = useContext(AppContext);
    const { authenticate } = useContext(AccountContext);
    const navigate = useNavigate();
    const [emailAddress,setEmailAddress] = useState("test@test.com");
    const [pwd,setPwd] = useState("test@123")

    const notify = (msg) =>  toast.warn(msg, {
        icon: "ℹ️",
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    


    function handleSubmit() {

        authenticate(emailAddress, pwd)
      .then(data => {
        console.log('Logged in!', data);
        let token = data.getIdToken().getJwtToken()
        storeData["token"] = token
        sessionStorage.setItem("token",token)
        navigate("/dashboard")
      })
      .catch(err => {
        console.error('Failed to login!');
        notify("Incorrect Login or Password!")
      })

      
    }

   
    

    return (
        
           <Container>
           <Row>
           <Col xs={12}>
           <h1 className="mt-6 h1-1">Login or Signup</h1>
           </Col>
           <Col xs={{offset:1,span:11}} className="mt-5">
           <h5 className="h4 display-5">Sign in</h5>
           </Col>
           </Row>
           <Row className="d-flex  justify-content-center">
           <Col className="align-items-center" md={8}>

          

           {/* <Row>
           <Col xs={12} className="mt-5" >
           <LabelForm text={"Email Address"}/>
           <InputField type={"email"} className={"input-field bg-style-main muli-regular-dove-gray-22px"} name={"email"} val={(v)=>setEmailAddress(v)} placeholder={""} req={true}/>
           </Col>
           </Row> */}


           <Row>
           <Col xs={12} className="mt-5" >
           <LabelForm text={"Email Address"}/>
           <input type="email" className="input-field bg-style-main muli-regular-dove-gray-22px" value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)}/>
           </Col>
           </Row>

           <Row className="text-end">
           <Col className="p-5 pt-3 pb-3">
           <a href="#" className="text-warning" >Forget Password</a>
           </Col>
           </Row>
           
           {/* <Row>
           <Col className="mt-5" >
           <LabelForm text={"Password"}/>
           <InputField type={"password"} className={"input-field bg-style-main muli-regular-dove-gray-22px"} name={"pwd"} placeholder={""} req={true}
             val={(v)=>setPwd(v)}
           />
           </Col>
           </Row> */}

           <Row>
           <Col className="mt-5" >
           <LabelForm text={"Password"}/>
           <input type="password" className="input-field bg-style-main muli-regular-dove-gray-22px" value={pwd} required={true} onChange={(e)=>setPwd(e.target.value)} />
           </Col>
           </Row>

           <Row className="mt-5">
           <Col>
           <LabelForm text={"Keep me logged in"}/>
           </Col>
           </Row>

           <Row>
           <Col>
           
           <Btn className={"express-btn"} variant={"warning"} name={"Submit"} customEvent={() => handleSubmit()}/>
           {/* <Btn className={"express-btn"} variant={"warning"} name={"Submit"} customEvent={() => navigate('/dashboard')}/> */}
           
           </Col>
           
           </Row>
           
           <Row className="mt-5">
           <Col>
            <p>Don't have an account? <span style={{marginLeft:"2%"}}><a href="/partner-with-us" className="text-warning h5">Signup Now</a></span> </p> 
           </Col>
           </Row>


           
            <Row className="mt-6">
            <Col xs={12}>
            <h2 className="h1-1 text-center">Already an existing merchant?</h2>
            <p className="dove-gray-text text-center">We’re here to help you grow! Learn how to maximise 
            Hey You's potential in your restaurant – Visit the 
            Merchant Hub to get the ball rolling.</p>
            </Col>
            </Row>

            <Row className="mt-5">
            <Col md={6} xs={12}><Btn className={"express-btn"}  name={"Visit the Merchant Hub"} variant={"warning"} /></Col>
            <Col md={6} xs={12}><Btn className={"express-btn"}  name={"Visit our Help Centre"} variant={"warning"} /></Col>
            </Row>
          

           </Col>
           </Row>
           <ToastContainer />
           </Container>
       
    )
}

export default LoginPage
