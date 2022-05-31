import React from 'react'
import sentEmailPic from "../../static/img/Signup_Completed.png"
import {
    Row,
    Col,
    Container,
    Image
    
    
  } from "react-bootstrap";

  
const SignupCompletedPage = () => {
    return (
        <div>
           <Container>
           <Row>
           <Col sm={12}>
           <h1 className="mt-6 display-1">Sign Up Completed</h1>
           </Col>
           <Col sm={12} className="mt-5">
           <h5 className="h5">Thank you for signing up, Please check your email. </h5>
           </Col>
           </Row>

           <div className="d-flex  justify-content-center">
           <div className="align-items-center" style={{width:"85vh"}}>
           <Row>
           
           <Col className="mt-6" >
           <Image src={sentEmailPic} height={"100%"} width={"100%"}/>
           
           </Col>
           </Row>

           
           
           

          

           

           


           
            

            
          

           </div>
           </div>
           </Container>
        </div>
    )
}

export default SignupCompletedPage
