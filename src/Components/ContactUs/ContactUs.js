import React,{useState,useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import LabelForm from "../LabelForm/LabelForm";
import InputField from "../InputField/InputField";
import Btn from "../Btn/Btn";
import { useNavigate } from "react-router-dom";
import TextArea from "../TextArea/TextArea";

const ContactUs = () => {
    return (
        <Container>
        <Row>
        <Col md={12}><h1 className="h1 fw-bold">Contact Us</h1></Col>
        </Row>
        <Row>
        <Col md={12}><p className="lead mt-3">We’ll get in touch within 1-2 business days</p></Col>
        </Row>
          <Container>
        <Row>
              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Name"} />
                <InputField
                  type={"text"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"fullname"}
                  placeholder={""}
                  req={true}
                />
              </Col>

              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Phone Number"} />
                <InputField
                  type={"text"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"phone"}
                  placeholder={""}
                  req={true}
                />
              </Col>
            </Row>

            <Row>
            <Col className="mt-5" md={6} sm={12}>
              <LabelForm text={"Email Address"} />
              <InputField
                type={"email"}
                className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                name={"email"}
                placeholder={""}
                req={true}
              />
            </Col>

            <Col className="mt-5" md={6} sm={12}>
              <LabelForm text={"Restaurant Name"} />
              <InputField
                type={"text"}
                className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                name={"rname"}
                placeholder={""}
                req={true}
              />
            </Col>
          </Row>

          <Row>
          <Col className="mt-5" md={12}>
          <LabelForm text={"Message"} />
                  <TextArea className={"bg-style1 muli-regular-dove-gray-22px"} name={"msg"} />
          </Col>
          </Row>

          <Row className="mt-5">
              <Col>
                <Btn className={"express-btn"}  name={"Submit"}  variant={"warning"}  />
              </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default ContactUs
