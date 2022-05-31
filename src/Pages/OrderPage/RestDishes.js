import React from "react";
import {
  Row,
  Col,
  Container,
  CardGroup,
  Card,
  ListGroup,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import RestImg from "../../static/img/order/03.png";
import DishImg from "../../static/img/order/04.png";

import Btn from "../../Components/Btn/Btn"
const RestDishes = (props) => {
  
  
  return (
    <Container fluid className="mt-6">
      <Row className="bg-light-card pb-5 pt-5">
        <Col
          md={{ offset: 1, span: 5 }}
          sm={{ offset: 1, span: 10 }}
          className="d-flex flex-column  justify-content-center align-items-left"
        >
          <h1 className="display-2 ">Smile Thai Cuisine (Resturant Name)</h1>
          <div className="d-flex  justify-content-center align-items-center mb-5 ">
            <Col>
              <p className="lead-2 mt-5">Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </Col>
          </div>
        </Col>
        <Col
          md={{ span: 5 }}
          className="d-flex  justify-content-center align-items-center"
        >
          <Image src={RestImg} width={"70%"} />
        </Col>
      </Row>

      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Picked for you</p>
          </Col>
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Entree</p>
          </Col>
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Salad</p>
          </Col>
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Fried Rice</p>
          </Col>
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Curry</p>
          </Col>
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Noodles</p>
          </Col>
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Stir Fry</p>
          </Col>
        </Row>
      </Container>

    {/* Dishes List Starts */}
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <Container className="mt-5">
              <Row className="g-0">
                <Col md={6} lg={6} className="bg-buttery-white" >
                  <Row className=" d-flex flex-column h-100">
                    <Col className="d-flex flex-column align-items-start h-75 ">
                      <p className="fw-bold h3 mb-2">Green Curry</p>
                      <p className="lead-2">a quick brown fox mjmps over</p>
                    </Col>

                    <Col className="d-flex align-self-end ">
                      <p className="fw-bold h3">$25</p>
                    </Col>

                    <Col className="text-center">
                      <button className="btn btn-warning" onClick={()=>props.clickHandle(true)}>add to cart</button>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} lg={6} className="d-flex flex-column">
                  <Image className="w-100 h-100" src={DishImg} />
                </Col>
              </Row>
            </Container>
          </Col>

          <Col md={6}>
            <Container className="mt-5">
              <Row className="g-0">
                <Col md={6} className="bg-buttery-white">
                  <Row className=" d-flex flex-column h-100">
                    <Col className="d-flex flex-column align-items-start h-75 ">
                      <p className="fw-bold h3 mb-2">Green Curry</p>
                      <p className="lead-2">a quick brown fox mjmps over</p>
                    </Col>

                    <Col className="d-flex align-self-end ">
                      <p className="fw-bold h3">$25</p>
                    </Col>

                    <Col className="text-center">
                      <button className="btn btn-warning" onClick={()=>props.clickHandle(true)}>add to cart</button>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="d-flex flex-column">
                <Image className="w-100 h-100" src={DishImg} />
                </Col>
              </Row>
            </Container>
          </Col>

          <Col md={6}>
            <Container className="mt-5">
              <Row className="g-0">
                <Col md={6} className="bg-buttery-white">
                  <Row className=" d-flex flex-column h-100">
                    <Col className="d-flex flex-column align-items-start h-75 ">
                      <p className="fw-bold h3 mb-2">Green Curry</p>
                      <p className="lead-2">a quick brown fox mjmps over</p>
                    </Col>

                    <Col className="d-flex align-self-end ">
                      <p className="fw-bold h3">$25</p>
                    </Col>

                    <Col className="text-center">
                      <button className="btn btn-warning" onClick={()=>props.clickHandle(true)}>add to cart</button>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="d-flex flex-column">
                <Image className="w-100 h-100" src={DishImg} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* Dishes list ends */}

      <Container className="mt-6">
      <Row className="mb-5">
        <Col md={{offset:4,span:4}} className="">
          <p className="lead-2">Resturant was designed with the history in mind we have created a soft industrial dining room, combined with an open kitchen, coffee take out bar and alovely aws</p>
        </Col>
      </Row>
        <Row>
        <Col md={{offset:5,span:2}}>
        <Btn name="View Cart" className="bg-success fw-bold"/>
        </Col>
         
        </Row>
      </Container>

      <Container className="mt-6">
      <Row className="mb-5">
        <Col  className="">
          <h3 className="display-5">What people say about us!</h3>
        </Col>
      </Row>

      <Container>
        <Row className="g-3">
          <Col md={3} className="py-md-4"><p class="lead-2"> I just want to say a massive thank you to the staff on Tuesday.</p></Col>
          <Col md={3} className="py-md-4"><p class="lead-2"> I just want to say a massive thank you to the staff on Tuesday.</p></Col>
          <Col md={3} className="py-md-4"><p class="lead-2"> I just want to say a massive thank you to the staff on Tuesday.</p></Col>
          <Col md={3} className="py-md-4"><p class="lead-2"> I just want to say a massive thank you to the staff on Tuesday.</p></Col>
          <Col md={3} className="py-md-4"><p class="lead-2"> I just want to say a massive thank you to the staff on Tuesday.</p></Col>
        </Row>
      </Container>
        
      </Container>


    </Container>
  );
};

export default RestDishes;
