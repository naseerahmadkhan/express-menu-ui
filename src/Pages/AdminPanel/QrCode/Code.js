import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Plus, PencilFill, CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import QRCode from 'qrcode.react';

export const Code = React.forwardRef((props, ref) => {
    
  const [url,setUrl] = useState(`${window.location.origin}/restaurantName/menus`);
  
  const QrCodePage = (
    <Container>
    <Row className="d-flex">
      <Col md={{ span: 8 }}>
      <QRCode value={url} size={200}/>
      </Col>
    </Row>
    <Row>
            <Col>{url}</Col>
          </Row>
  </Container>
  )

  

  return (
    <div className="mt-5" ref={ref} >
      {
          QrCodePage
      }

    </div>
  );
});


