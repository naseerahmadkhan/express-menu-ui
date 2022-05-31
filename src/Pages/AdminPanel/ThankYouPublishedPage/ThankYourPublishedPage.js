import React from 'react';
import {
    Row,
    Col,
    Container,
    
    
  } from "react-bootstrap";

  import Btn from "../../../Components/Btn/Btn"
  import { ClipboardCheck} from 'react-bootstrap-icons';


const ThankYourPublishedPage = () => {
  return <Container>
  <Row className="mt-6 mb-5">
      <Col md={12}>
          <h1 className="h1">Thank You</h1>
      </Col>

      <Col md={{offset:1}}>
          <h2 className="h2 mt-3">Your Menu has been successfully published.</h2>
      </Col>

        <Row className="d-flex mt-6">
      <Col className="d-flex justify-content-center align-items-center" md={{offset:2}}><ClipboardCheck size={256} className='text-warning'/></Col>
      <Col md={6}>
      <Row className='d-flex flex-column'>
        <Col md={{span:4}}><Btn className={"express-btn"} name="Review Changes" variant={"warning"} /></Col>
        <Col md={{span:4}}><Btn className={"express-btn"} name="Dashboard" variant={"warning"} /></Col>
        <Col md={{span:4}}><Btn className={"express-btn"} name="Main Menu" variant={"warning"} /></Col>
      </Row>
      </Col>
      </Row>

  </Row>


  </Container>
};

export default ThankYourPublishedPage;
