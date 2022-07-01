import React, { useEffect, useContext, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { AppContext } from '../../../App';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate, Link } from "react-router-dom";
import Stepper from 'react-stepper-horizontal'

//Component to show upder step progress----
import Terms from "../Terms/Terms";
import CreateRestaurant from "../CreateRestaurant/CreateRestaurant";
import CreateNewMenuPage from "../CreateMenuPage/CreateNewMenuPage";
import BankAccount from "../BankAccount/BankAccount";

import { isJwtExpired } from 'jwt-check-expiration';

//--------------------------------------

const Dashboard = () => {
  const [isAccepted, sestIsAccepted] = useState(false);
  const [stepper, setStepper] = useState(-1);
  const storeData = useContext(AppContext);

  const data = {}
  const token = storeData.token;
  let config = {
    headers: {
      Authorization: token,
    },
  };

  // Create restaurant first time----------------

  const createRestaurantFirstTime = ()=>{
    //need to call first time when rest is created
    console.log("create rest called")
    const api = process.env.REACT_APP_CREATE_RESTAURANT_API;
    axios
      .post(api, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Invalid Token", error);
        notify("Token is expired! Please Re-login");
        navigate("/login");
      });
  }

  const getRestaurantInfo = () =>{
    const token = storeData.token;
    
    const data = {};
    let config = {
      headers: {
        Authorization: token,
      },
    };
      

    const api2 = process.env.REACT_APP_GET_RESTAURANT_INFO_API;
    axios
      .post(api2, data, config)
      .then((response) => {
        if(response.data === "empty"){
          console.log("not data found")
          createRestaurantFirstTime()
          setStepper(0)
        }else{
            storeData["restaurantInfo"] = response.data
            // return response.data
        }
        
        
        
        
      })
      
      .catch((error) => {
        console.error("Invalid Token", error);
        notify(`Error:> ${error}`);
        // navigate("/login");
      })
      .finally(() => {
        console.log('Experiment completed');
        try{
       

        storeData.restaurantInfo.step?
        setStepper(storeData.restaurantInfo.step):
        setStepper(0)

       

        
  
        }catch(e){
          console.log(e)
         
        }
        
      });
    
      

  }

  //---------------------------------------------

  //Login to handle step progress----------------
  const handleStep = (t, v) => {
    let infObj = { };
   
    const api = process.env.REACT_APP_CREATE_RESTAURANT_INFO_API;
    

    switch (t) {
      case "terms":
       
        infObj = {
          termsAccepted: true,
          step:1
        };

        
        
        // const api2 = "http://localhost:8000/set-restaurant-info"
        

        axios
          .post(api, infObj, config)
          .then((response) => {
            console.log("sucess:::", response);
            sestIsAccepted(v);
          setStepper(stepper + 1);
          })
          .catch((error) => {
            console.error("Invalid", error);
          });

          
        break;

        case "restData":
          // console.log(">>>",v);
          // console.log("before",storeData)
          // let tempObj = {...storeData.restaurantInfo,...v}
          storeData.restaurantInfo ={...storeData.restaurantInfo,...v}
           
          // console.log("after",storeData.restaurantInfo )
          infObj = {
            ...storeData.restaurantInfo,
            step:2
          };
  
          // const api2 = "http://localhost:8000/set-restaurant-info"
         
          // console.log(">>>>",infObj)
          axios
            .post(api, infObj, config)
            .then((response) => {
              console.log("sucess:::", response);
              setStepper(stepper + 1);
            })
            .catch((error) => {
              console.error("Invalid", error);
            });
  
          break;

      default:
    }
  };
  //----------------------------------------------------

 
  
  const navigate = useNavigate();

  //Notify popup-------------------------
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
  //-------------------------------------

  useEffect(() => {
    // console.log('isExpired is:', isJwtExpired(storeData.token));
    getRestaurantInfo()
    // if(isJwtExpired(storeData.token)){
    // }else{
    //   navigate("/login");
    // }
    
    
    
    
    // createRestaurantFirstTime()

      
  },[]);

  //Display progress step windows under progress step bar in return----------
  let progressStep ;
  switch(stepper){
    case 0:
      progressStep = <Terms isTermAccepted={(v) => handleStep("terms", v)} />
      break;

      case 1:
        progressStep = <CreateRestaurant data={(v)=>handleStep("restData",v)}/>
        break;  
      
        case 2:
        progressStep = <CreateNewMenuPage firstTime={true} increaseStepCounter={()=>setStepper(3)}/>
        break; 

        case 3:
        progressStep = <BankAccount increaseStepCounter={()=>setStepper(4)}/>
        break; 

        case 4:
          setStepper(5);
        progressStep = <h1 className="display-6">Completed</h1>
        break; 

      default:
        // progressStep = <Terms isTermAccepted={(v) => handleStep("terms", v)} />
        break;  
  }
  
// --------------------------------------------------------------------------
const loading = <h1>Loading...</h1>


const stepperProgress = <Stepper steps={ [{title: 'Accept Terms & Conditions'}, {title: 'Create Restaurant'}, {title: 'Create Menu'}, {title: 'Select Receiving Payment Method'}, {title: 'Done'}] } activeStep={ stepper } size={64} circleTop={32} 
activeTitleColor={"green"}
completeColor={"#ffc107"}
activeColor={"black"}
titleFontSize={18}
titleTop={16}
defaultBorderWidth={16}
completeBarColor={"#ffc107"}
barStyle={"solid"}
circleFontSize={24}

/>
  return (
    <Container>
      <h1 className="display-6 mt-6">Welcome to Admin Dashboard!</h1>
      <ToastContainer />

      <Row>
        <Col xs={12} className="mt-5">
          {/* <Stepper count={stepper} /> */}
          
          { stepper>=0?( stepperProgress ):(loading)}
          { stepper>=0?( progressStep ):(loading)}
          {/* {progressStep} */}
          
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
