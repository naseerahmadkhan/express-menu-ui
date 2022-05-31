import React from 'react'
import ContactUsForm from "../../Components/ContactUs/ContactUs"
import {
    Row,
    Col,
    Container,
    
    
  } from "react-bootstrap";
  import Btn from '../../Components/Btn/Btn'
const ContactUs = () => {
    return (
        <Container className="mt-6">
        <Row>
        <ContactUsForm/>
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
            <Col md={{offset:2,span:4}} xs={12}><Btn className={"express-btn"}  name={"Visit the Merchant Hub"} variant={"warning"} /></Col>
            <Col md={{offset:0,span:4}} xs={12}><Btn className={"express-btn"}  name={"Visit our Help Centre"} variant={"warning"} /></Col>
            </Row>
        
        </Container>
        
    )
}

export default ContactUs
