import React from "react";
import { Row, Col, Container, CardGroup, Card, Image } from "react-bootstrap";
import orderpic from "../../static/img/order/01.png"
import o2 from "../../static/img/order/02.jpg"

import { StarFill } from "react-bootstrap-icons";

import Searchbar from "../../Components/SearchBar/SearchBar";
import "./order.css"

import RestDishes from "./RestDishes";

const RestList = (props) => {
  return (
    <Container className="mt-6">
      <Row className="bg-light-card pb-5 pt-5">
        <Col>
          <h1 className="h1 ml-4">Search your favourite restaurants</h1>
        </Col>
        <div className="d-flex  justify-content-center align-items-center mb-5 ">
          <Col className="ml-4">
            <Searchbar />
          </Col>
        </div>
      </Row>

      <h3 className="h3 mt-5 mb-5">A little help for you to decide</h3>
      <Row className="">
        <CardGroup onClick={()=>props.clickHandle(true)} >
          <Col lg={4} md={6} >
            <Card className="card-2">
              <Card.Img variant="top" src={orderpic} height={"100%"} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                <span className="h1">
                  York Lane
                </span>
                <span>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                </span>
                </div>
                <div>
                    <p className="lead-2">Special Dish -Cusine Type- Recommended</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="card-2">
              <Card.Img variant="top" src={orderpic} height={"100%"} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                <span className="h1">
                  York Lane
                </span>
                <span>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                </span>
                </div>
                <div>
                    <p className="lead-2">Special Dish -Cusine Type- Recommended</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="card-2">
              <Card.Img variant="top" src={orderpic} height={"100%"} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                <span className="h1">
                  York Lane
                </span>
                <span>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                </span>
                </div>
                <div>
                    <p className="lead-2">Special Dish -Cusine Type- Recommended</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="card-2">
              <Card.Img variant="top" src={orderpic} height={"100%"} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                <span className="h1">
                  York Lane
                </span>
                <span>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                <StarFill className="text-warning" size={24}/>
                </span>
                </div>
                <div>
                    <p className="lead-2">Special Dish -Cusine Type- Recommended</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </CardGroup>
      </Row>

      <Row className="mt-6 g-0">
    <Col md={6} className="bg-nova-2 d-flex justify-content-center align-items-center">
      <div className="mt-5">
        <h1 className="display-3 text-center mb-5 mt-5">Special Offers for you</h1>
        <Col md={{offset:3, span:7}} className="mb-5">
        <p className="lead-2 p-3">orem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ante vel quam convallis malesuada.</p>
        </Col>
       
      </div>

    </Col>
    <Col md={6}><Image src={o2} height={"100%"} width={"100%"}/></Col>
      </Row>
    </Container>
  );
};

export default RestList;
