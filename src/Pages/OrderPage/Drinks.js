import React from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Table,
  Form
} from "react-bootstrap";
import Counter from "../../Components/Counter/Counter"
import Image from "react-bootstrap/Image";
import RestImg from "../../static/img/order/03.png";
import DishImg from "../../static/img/order/04.png";

import Btn from "../../Components/Btn/Btn"
import RadioBtn from "../../Components/RadioBtn/RadioBtn"

const Drinks = (props) => {
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
    <Container fluid>
      <Row>
        <Col md={6} lg={6} sm={12}>
          <Container className="mt-5">
            <Row className="g-0">
              <Col md={{offset:7,span:12}} xs={12} >
               <Card className="shadow-lg p-3 mb-5 bg-white rounded border border-secondary">
               <div>
                   <h3 className="h3 fw-bold d-flex stify-content-center">Soft Small Drinks 300 ml</h3>
               </div>
               <div>
                  <Table>
                      <thead >
                          <tr className="h4 d-flex justify-content-around border-0">
                              <th>Quantity</th>
                              <th>Price</th>
                          </tr>
                      </thead>
                      <tbody className="border-top-0">
                          <tr className="h4 d-flex justify-content-around">
                              <td><Counter/></td>
                              <td>$3.60</td>
                          </tr>
                      </tbody>
                  </Table>
               </div>

               <Container>
                   <Row>
                       <Col md={12}>
                       <RadioBtn label={"Lemonade"} val={"male"} name={"gender"}/>
                       <RadioBtn label={"Natural Mineral Water"} val={"male"} name={"gender"}/>
                       <RadioBtn label={"test"} val={"male"} name={"gender"}/>
                     
                       
                       </Col>
                   </Row>
               </Container>

               <Container>
                   <Row>
                   <Col className="text-center">
                      <button className="btn-success "><span className="h3">Add to Order</span></button>
                    </Col>
                   </Row>
               </Container>
               </Card>
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
      <Btn name="Book your table now" className="bg-success fw-bold"/>
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

export default Drinks