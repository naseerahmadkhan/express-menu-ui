import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Plus, PencilFill, CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Code } from "./Code"
import ReactToPrint from 'react-to-print';
import QRCode from 'qrcode.react';

const QrCode = (props) => {
    
  const [url,setUrl] = useState(window.location.origin);
  const componentRef = useRef();
  
  const QrCodePage = (
    <Container>
    <Row className="d-flex">
      <Col md={{ span: 8 }}>
        <h1 className="mt-2 mb-3 display-6">QR Code</h1>
      </Col>
    </Row>

    <Row className="d-flex  justify-content-center bg-light-card pt-3 pb-5">
      <Col className="align-items-center" md={8}>
        <Row className="d-flex justify-content-center">
          <Row>
          <Col>
         
<Code ref={componentRef}/>
<ReactToPrint
        trigger={() => <button className="btn btn-warning">Print QR Code</button>}
        content={() => componentRef.current}
      />
          </Col>
         
          </Row>
         
         

        </Row>
      </Col>
    </Row>
  </Container>
  )

  

  return (
    <div className="mt-5">
      {
          QrCodePage
      }

    </div>
  );
};

export default QrCode;
