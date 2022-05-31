import React,{useState,useEffect} from "react";
import { Row, Col, Container,Image } from "react-bootstrap";

import UserPool from "../../Auth/UserPool"

import IntputField from "../../Components/InputField/InputField";
import Btn from "../../Components/Btn/Btn";
import LabelForm from "../../Components/LabelForm/LabelForm";
import "./RegPage.css";
import signuppic from "../../static/img/signup.png"

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RegPage = () => {
  const [email, setEmail] = useState("");
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [pwd, setPwd] = useState("");
  const [cPwd, setCPwd] = useState("");
  const [phone, setPhone] = useState("");

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

  const handleSubmit = ()=>{
    const attributeList = [
      {
        Name: "email",
        Value: email,
      },
     
      {
        Name: "custom:fname",
        Value: fname
      },
      
      {
        Name: "custom:lname",
        Value: lname
      },
    
        
        {
          Name: "custom:phoneNumber",
          Value: phone
        },
        
        {
          Name: "custom:role_id",
          Value: 'admin'
        },
    ];

    UserPool.signUp(email, pwd, attributeList, null, (err, data) => {
      if (err) {
        console.error(JSON.stringify(err.name));
        notify(err.name)
      } else {
        console.log(data);
        notify("User is registered Successfully!")
        
      }
    });

    setEmail("")
        setFname("")
        setLname("")
        setPwd("")
        setCPwd("")
        setPhone("")

  }

  
  
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-6 h1-1">Sign Up</h1>
          </Col>
          <Col sm={12} className="mt-5">
            <h5 className="h5">Please fill the form below to complete the sign up process</h5>
          </Col>
        </Row>

        <div className="d-flex  justify-content-center">
          <div className="align-items-center" md={{offset:4,span:8}}>
            <Row>
              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"First Name"} />
                <IntputField
                  type={"text"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"fname"}
                  placeholder={""}
                  req={true}
                  val={(v)=>setFname(v)}
                  value={fname}
                />
              </Col>

              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Last Name"} />
                <IntputField
                  type={"text"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"lname"}
                  placeholder={""}
                  req={true}
                  val={(v)=>setLname(v)}
                  value={lname}
                />
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Email Address"} />
                <IntputField
                  type={"email"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"email"}
                  placeholder={""}
                  req={true}
                  val={(v)=>setEmail(v)}
                  value={email}
                />
              </Col>

              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Phone Number"} />
                <IntputField
                  type={"text"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"phone"}
                  placeholder={""}
                  req={true}
                  val={(v)=>setPhone(v)}
                  value={phone}
                />
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Password"} />
                <IntputField
                  type={"password"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"pwd"}
                  placeholder={""}
                  req={true}
                  val={(v)=>setPwd(v)}
                  value={pwd}
                />
              </Col>

              <Col className="mt-5" md={6} sm={12}>
                <LabelForm text={"Confirm Password"} />
                <IntputField
                  type={"password"}
                  className={"input-field bg-style-main muli-regular-dove-gray-22px"}
                  name={"cpwd"}
                  placeholder={""}
                  req={true}
                  val={(v)=>setCPwd(v)}
                  value={cPwd}
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <Btn className={"express-btn"}  name={"Sign up"} customEvent={() => handleSubmit()} variant={"warning"}  />
              </Col>
            </Row>

            <Row className="mt-6">
            <Col>
            <Image src={signuppic} height={"100%"} width={"100%"} />
            </Col>
            </Row>

           

            

            
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};


export default RegPage;
