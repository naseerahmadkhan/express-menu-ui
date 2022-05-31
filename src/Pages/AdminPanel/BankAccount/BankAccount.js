import React,{useState,useContext,useEffect} from 'react'
import { Container,Row,Col,Form } from "react-bootstrap";
import Btn from '../../../Components/Btn/Btn';
import axios from "axios";
import { AppContext } from '../../../App';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BankAccount = (props) => {

  const storeData = useContext(AppContext);
  const [accountNo, setAccountNo] = useState(null)
  // const [accountLink,setAccountLink]=useState(null)
  const [paymentOption,setPaymentOption]= useState("")

  const token = storeData.token;

  let config = {
    headers: {
      Authorization: token,
    },
  };

  const notify = (msg) =>
    toast.warn(msg, {
      icon: "ℹ️",
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  

  

  const updateResturantInfoData = () =>{
    const api2 = process.env.REACT_APP_GET_RESTAURANT_INFO_API;
    
    

    const data = {};


    axios
      .post(api2, data, config)
      .then((response) => {
        storeData["restaurantInfo"] = response.data;
        
      })
      .then(()=>{
       
      })
      .catch((error) => {
        console.error("Invalid Token", error);
        // notify("Token is expired! Please Re-login");
        // navigate("/login");
      })
      

  }

  const addStripeAccountinDB = (acNo)=>{
    let infObj = {...storeData.restaurantInfo, "accountNo":acNo};
    const token = storeData.token;
    const api = process.env.REACT_APP_CREATE_RESTAURANT_INFO_API;
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios
            .post(api, infObj, config)
            .then((response) => {
              console.log("account no successfully added in db", response);
            })
            .catch((error) => {
              console.error("Invalid", error);
            });
  }

  const GenerateStripeLink = async()=>{
    console.log("stripe link called")
    const token = storeData.token;
    const api = process.env.REACT_APP_CREATE_STRIPE_LINK_API;
    let config = {
      headers: {
        Authorization: token,
      },
    };

    
    let data = (storeData.restaurantInfo.accountNo || accountNo )?({accountNo:storeData.restaurantInfo.accountNo || accountNo}):({});


    await axios
          .post(api, data, config)
          .then((response) => {
            console.log("sucess:::", response);
            // setAccountLink(response.data.accountLink.url)
            
            console.log("after execution stripe link")
            if(!(storeData.restaurantInfo.accountNo))
            addStripeAccountinDB(response.data.accountNo)
            
            setAccountNo(response.data.accountNo)
            
            window.open(response.data.accountLink.url, "_blank")
            
          })
          .then(()=>{
            console.log("account no is set",accountNo)
            if(!(storeData.restaurantInfo.accountNo))
            updateResturantInfoData()
            console.log("rest info data updated after first time entry in db",storeData.restaurantInfo)
          })
          .catch((error) => {
            console.error("Invalid", error);
          });


  }

  const updateCashPaymentMethod = () =>{
   
    let infObj = {...storeData.restaurantInfo, step:4};

    
    
    const api= process.env.REACT_APP_CREATE_RESTAURANT_INFO_API;
    

    axios
      .post(api, infObj, config)
      .then((response) => {
        console.log("sucess:::", response);
      })
      .then(()=>{
        updateResturantInfoData()
      })
      .then(()=>{
        props.increaseStepCounter()
      })
      .catch((error) => {
        console.error("Invalid", error);
      });
  }

  const handleSubmit = () =>{
    switch(paymentOption){
      case "":
      console.log("not slected")
      notify("Select appropriate option");
      break;

      case "cash":
      console.log("cash slected")
      updateCashPaymentMethod()
      break;

      case "bank":
      console.log("bank slected")
      GenerateStripeLink()
      break;

      default:
        console.log("unexpected option")
    }
  }
  
  return (
    <div className="mt-5">
        <h1 className="display-7">Select the receiving payment method</h1>
        <Container>
        <Row>
          <Col sm={{span:5}}>

          
  
    <div  className="mb-3 mt-5">
      <Form.Check type="radio" id={`payment`} >
        <Form.Check.Input type="radio" name="payment"  onChange={e=>{setPaymentOption("cash")}} />
        <Form.Check.Label className="p-3">{`Receive CASH at counter`}</Form.Check.Label>
      </Form.Check>
      <Form.Check type="radio" id={`payment1`}>
        <Form.Check.Input type="radio" name="payment"  onChange={e=>setPaymentOption("bank")}/>
        <Form.Check.Label className="p-3">{`Setup Bank to receive`}</Form.Check.Label>
      </Form.Check>
      {/* <button onClick={e=>{e.preventDefault();console.log("clicked on",paymentOption)}}>check</button> */}
    </div>


          
    <Btn className={"express-btn"} variant={"warning"} name={"Submit"} customEvent={e=>handleSubmit()}/>
          {/* <Btn className={"express-btn"} variant={"warning"} name={"Create Connected Bank Account"} customEvent={e=>GenerateStripeLink()}/> */}
          {/* <button onClick={()=> window.open("someLink", "_blank")}>text</button> */}
          </Col>
      </Row>
        </Container>
    </div>
  )
}

export default BankAccount