import React, { useEffect, useState,useContext } from "react";
import axios from 'axios'
import { Row, Col, Container } from "react-bootstrap";
import Btn from "../../../Components/Btn/Btn";
import { useNavigate, Link } from "react-router-dom";

import CreateNewMenuForm from "./CreateNewMenuForm";
import "./createmenu.css";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { AppContext } from '../../../App';


const CreateNewMenuPage = (props) => {

  const navigate = useNavigate();
  const storeData = useContext(AppContext);
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

    const markStep3CreateMenuInProgressBar = () =>{

      const token = storeData.token
      const api = process.env.REACT_APP_CREATE_RESTAURANT_INFO_API;
      const data = {
        ...storeData.restaurantInfo,
        step:3
      };;
      let config = {
        headers: {
          Authorization: token,
        },
      };
  
      axios
        .post(api, data, config)
        .then((response) => {
          console.log("step 3 updated in rest info>>",response)
          
        })
  
        .catch((error) => {
          console.log("ERR!!!", error);
        })


    }

    const loadMenuData = () =>{
      const token = storeData.token
      const api = process.env.REACT_APP_GET_FOOD_MENU_API;
      const data = {};
      let config = {
        headers: {
          Authorization: token,
        },
      };
  
      axios
        .post(api, data, config)
        .then((response) => {
          console.log("fetch data.....", response.data);
          // sessionStorage.setItem("foodMenu", JSON.stringify(response.data));
          storeData["foodMenu"]=response.data
          console.log("foodMenuContext",storeData)
  
          
        })
        
  
        .catch((error) => {
          console.log("ERR!!!", error);
        })
       
    }  
 
  const handleSubmit =(menuList) =>{
    const token = storeData.token
    const api = process.env.REACT_APP_MODIFY_FOOD_MENU_API;
    
let data = menuList;
let config = {
  headers: {
    'Authorization': token
  }
}
console.log("final form values",data)


    axios
  .post(api, data,config)
  .then((response) => {
    console.log(response);
    let step3progress = props.firstTime?(markStep3CreateMenuInProgressBar()):(false);
    loadMenuData()
    
    let result = props.hideMenu?
    ( props.hideMenu(false)):
    (props.firstTime?(false):(navigate("/dashboard/main-menu")))

    if((props.firstTime ===true)){
      props.increaseStepCounter()
    }
    
    notify("Menu is created Successfully!")
  })
  .catch((error) => {
    console.log(">>>",error);
    notify("Token is Expired. Please re-login",error)
  });

}


useEffect(()=>{
  props.firstTime?(console.log("yes first time")):(console.log("no"))
})


  
  return (
    // <>hello</>
    <Container>
      <CreateNewMenuForm submit={handleSubmit}  />
      <ToastContainer />
      </Container>
  );
};

export default CreateNewMenuPage;
