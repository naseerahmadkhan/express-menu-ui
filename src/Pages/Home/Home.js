import React,{useEffect} from "react";
import { Row, Container, Image} from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Btn from "../../Components/Btn/Btn";

import headerImg from "../../static/img/home/1.svg";
import howItWorksImg from "../../static/img/home/3.svg";
import contactusImg from "../../static/img/home/6.svg";
import sentEmailImg from "../../static/img/home/7.svg";

import Contectlesstitle from "../../static/img/home/contectlesstitle.svg"
import EasyPayment from "../../static/img/home/easy-payment.svg";
import OrderFood from "../../static/img/home/Order-Food.svg";
import QRimg from "../../static/img/home/QR.svg";

import * as Icon from "react-bootstrap-icons";
import feature1 from "../../static/img/home/features/100sol.svg"
import feature2 from "../../static/img/home/features/contactless-sol.svg"
import feature3 from "../../static/img/home/features/smart-menu.svg"

import whyChooseusTitleImg from "../../static/img/home/whychooseus.svg"
import YCUs1 from "../../static/img/home/whychooseusimg/1exp-business.svg"
import YCUs2 from "../../static/img/home/whychooseusimg/2.svg"

import ContactUsForm from "../../Components/ContactUs/ContactUs";
import "./home.css";

const Home = () => {

  


  return (
    <Container className="mt-6">
      <Row className="d-flex">
        <Col md={6} sm={{order:2}} >
        <Image src={headerImg} height={"100%"} width={"100%"} />
        </Col>
        <Col md={6} sm={{order:1}}>
        <div>
            <h1 className="display-1 fw-bold">Smart solution for restaurant menu</h1>
            <h2 className="tag mt-3">
              Express Menu is a smart online ordering solution introducing
              latest technology for contactless ordering pickup and delivery.
            </h2>
            <Col md={4}>
              <Btn
                className={"express-btn"}
                name={"Learn more"}
                variant={"warning"}
              />
            </Col>
          </div>
        </Col>
      </Row>

      <Container>
      <Row className="d-flex justify-content-center">
      <Col md={8}>

      <Row className="mt-6 d-flex" id="contectless-bg">

      <Col md={4} className="pb-3"> <Image src={Contectlesstitle} height={"100%"} width={"100%"} /></Col>

      <Col md={{span:8,offset:0}} className="d-flex contectless-text-part" style={{height:"100%"}}>
        
        <Row className="d-flex align-items-center g-5">
          <Col lg={{offset:0,span:4}} md={{offset:0,span:4}} xs={{span:6,offset:4}} className="d-flex justify-content-center">
          <div className="d-flex justify-content-left py-sm-3" style={{width:"100%"}}>
          <div><Image src={QRimg} height={"100%"} width={"100%"} /></div>
          <div className="mt-1 ml-2"><div>Scan<br/> QR Code</div></div>
          </div>
          </Col>
          
          <Col lg={{offset:0,span:4}} md={{offset:0,span:4}} xs={{span:6,offset:4}}  className="d-flex justify-content-center">
          <div className="d-flex justify-content-left py-sm-3 " style={{width:"100%"}}>
          <div><Image src={OrderFood} height={"100%"} width={"100%"} /></div>
          <div className="mt-1 ml-2"><div>Order<br/> Food</div></div>
          </div>
          </Col>

          <Col lg={{offset:0,span:4}} md={{offset:0,span:4}} xs={{span:6,offset:4}}  className="d-flex justify-content-center">
          <div className="d-flex justify-content-left py-sm-3" style={{width:"100%"}}>
          <div><Image src={EasyPayment} height={"100%"} width={"100%"} /></div>
          <div className="mt-1 ml-2"><div>Easy<br/> Payment</div></div>
          </div>
          </Col>

        </Row>
      </Col>
      </Row>
      
      </Col>
      </Row>

      </Container>
      

      

      <Row className="mt-6">
        <Col md={6} xs={12} className="d-flex align-items-center">
          <div>
            <h2 className="h1 fw-bold">How does it work?</h2>
            <h2 className="tag mt-3">
              Customer will simply scan the QR Code from his mobile, order the
              desired food from the smart menu and make the secure payment.
            </h2>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <Image src={howItWorksImg} height={"100%"} width={"100%"} />
        </Col>
      </Row>

      <Row className="mt-6">
        <Col md={12}>
          <h2 className="h1 text-center fw-bold">Features</h2>
        </Col>
        <Col className="mt-5" md={12} xs={12}>
          <Row className="no-gutters">
            <Col md={4}><Image src={feature1} height={"100%"} width={"100%"} /></Col>
            <Col md={4}><Image src={feature2} height={"100%"} width={"100%"} /></Col>
            <Col md={4}><Image src={feature3} height={"100%"} width={"100%"} /></Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5 mb-5"  id="whychooseus-bg">
      <Col className="" md={4} xs={12}>
      <Container>
        <Row>
          <Col md={{span:10}}>
          <Image src={whyChooseusTitleImg} height={"100%"} width={"100%"} />
          </Col>
        </Row>
      </Container>
          
        </Col>

        <Col className="" md={8} xs={12}>
         <Container >
         <Row className="pt-3">
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
           <Col className="pt-3" md={4}><Image src={YCUs2} height={"100%"} width={"90%"} /></Col>
           <Col  className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
         </Row>
         <Row className="pt-lg-5 pb-lg-5">
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
         </Row>
         <Row className="pb-5">
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
           <Col className="pt-3" md={4}><Image src={YCUs1} height={"100%"} width={"100%"} /></Col>
         </Row>

         </Container>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6} xs={12} className="d-flex align-items-center">
          <div>
            <h2 className="h1 fw-bold">Learn more about us</h2>
            <h2 className="tag mt-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </h2>
            <Col md={4}>
              <Btn
                className={"express-btn"}
                name={"Partner with us"}
                variant={"warning"}
              />
            </Col>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <Image src={contactusImg} height={"100%"} width={"100%"} />
        </Col>
      </Row>

      <Row className="mt-5">
        <ContactUsForm />
      </Row>

      <Row className="mt-5">
        <Col className="" md={12} xs={12}>
          <Image src={sentEmailImg} height={"100%"} width={"100%"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
