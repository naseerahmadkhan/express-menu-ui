import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Plus, PencilFill, CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


import DishList from "../../../Components/DishList/DishList";
import AddDishesPage from "../AddDishesPage/AddDishesPage";

import { AppContext } from '../../../App';

const FoodMenuPage = (props) => {
  const storeData = useContext(AppContext);
    const [showAddDishesPage,setShowAddDishesPage] = useState(false)
    const [catindex,setCatIndex]=useState();
    // const stringData = sessionStorage.getItem("foodMenu")
    
    const jsonData = storeData.foodMenu

  const id = props.menuDetails.id;
  const data = props.data;
  // const menuName = props.menuDetails.menuName
  // const menuDesc = props.data[id].menuDesc

  const showAddDishesPageComp= (cid) => {
    console.log("clicked",cid);
    setCatIndex(cid)
    setShowAddDishesPage(!showAddDishesPage)
  };

  const foodMenuPage = (
    <Container>
    <Row className="d-flex">
      <Col md={{ span: 8 }}>
        <h1 className="mt-2 mb-3 display-6">Food Menu</h1>
      </Col>
    </Row>

    <Row className="d-flex  justify-content-center bg-light-card pt-3 pb-5">
      <Col className="align-items-center" md={8}>
        <Row className="d-flex justify-content-center">
          <Row>
            <h1 className="display-6">{jsonData[id].menuName}</h1>
            <p className="lead">{jsonData[id].menuDesc}</p>
          </Row>
          <Row className="mt-5">
            <Col>
              <DishList data={data} id={id}  doChange={showAddDishesPageComp} />
            </Col>
          </Row>

        </Row>
      </Col>
    </Row>
  </Container>
  )

  useEffect(()=>{
  },[catindex])

  return (
    <div className="mt-5">
      {
          showAddDishesPage?(<AddDishesPage targetMenu={{id,catindex}} hideDishComp={showAddDishesPageComp}/>):
          (foodMenuPage)
      }

    </div>
  );
};

export default FoodMenuPage;
