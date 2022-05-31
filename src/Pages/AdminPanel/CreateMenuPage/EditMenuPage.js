import React, { useEffect, useState,useContext } from "react";
import axios from 'axios'
import { Row, Col, Container } from "react-bootstrap";
import Btn from "../../../Components/Btn/Btn";

import DishList from "../../../Components/DishList/DishList";

import EditMenuForm from "./EditMenuForm";
import AddDishesPage from "../AddDishesPage/AddDishesPage";
import "./createmenu.css";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { AppContext } from '../../../App';


const EditMenuPage = (props) => {
  const [showDishes,setShowDishes] = useState(false);
  const [showAddDishes,setShowAddDishes] = useState(false);
  // const [formValues,setFormValues] = useState();
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

    // const loadMenuData = () =>{
    //   const token = storeData.token
    //   const api = process.env.REACT_APP_GET_FOOD_MENU_API;
    //   const data = {};
    //   let config = {
    //     headers: {
    //       Authorization: token,
    //     },
    //   };
  
    //   axios
    //     .post(api, data, config)
    //     .then((response) => {
    //       console.log("fetch data.....", response.data);
    //       // sessionStorage.setItem("foodMenu", JSON.stringify(response.data));
    //       storeData["foodMenu"]=response.data
    //       console.log("foodMenuContext",storeData)
  
          
    //     })
        
  
    //     .catch((error) => {
    //       console.log("ERR!!!", error);
    //     })
       
    // }

  

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
  .then(async(response) => {
    console.log(response);
    // notify("Menu is successfully Modified!")
    // loadMenuData()
    props.showEditMenu(false)

    
    
    
  })
  
  .catch((error) => {
    console.log(error);
  });

  

}



  
  return (
    <div>

    {!showAddDishes?(
    <div>
    <Container>
      <EditMenuForm submit={handleSubmit} mid={props.id} showCategory={props.showCategory} hideme={(v)=>props.showEditMenu(v)} />
      </Container>

      {showDishes?
        <Container>
      <Container className="mt-6 ">
        <Row className="d-flex  justify-content-center bg-light-card pt-5 pb-5">
          <Col className="align-items-center"  md={8}>
          
            <Row>
              <DishList doChange={(text)=>setShowAddDishes(text)} current={showAddDishes} />
            </Row>

            
            
          </Col>
        </Row>
      </Container>
      </Container>
    :false}

      
      <div className="mb-5"></div>
      
    </div>
    ):

    (<div>
    <AddDishesPage doChange={(text)=>setShowAddDishes(text)} current={showAddDishes}/>

    <div className="mb-5"></div>
    </div>)
  }
  <ToastContainer />
    </div>
  );
};

export default EditMenuPage;
