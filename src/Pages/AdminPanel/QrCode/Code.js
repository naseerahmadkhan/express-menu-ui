import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Plus, PencilFill, CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import QRCode from 'qrcode.react';
import { AppContext } from '../../../App';

export const Code = React.forwardRef((props, ref) => {


  const storeData = useContext(AppContext);
  const data = {}
  
  
    
  const [url,setUrl] = useState(``);


  const getRestID = () =>{
    const token = storeData.token;
    let config = {
      headers: {
        Authorization: token,
      },
    };
  
    const api =process.env.REACT_APP_GET_RESTAURANT_ID
    axios
    .post(api, data, config)
        .then((response) => {
          console.log("sucess in code:::", response.data);
          return response.data.restaurantID
        })
        .then((id)=>{
          setUrl(`${window.location.origin}/restaurant-id/${id}`);
        })
        .catch((error) => {
          console.error("Invalid", error);
        });
  }
  
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

  
  useEffect(()=>{
    getRestID();
   
  },[])

  return (
    <div className="mt-5" ref={ref} >
      {
          QrCodePage
      }

    </div>
  );
});


