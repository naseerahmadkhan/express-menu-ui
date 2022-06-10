import React,{useState,useEffect} from 'react'
import axios from "axios"
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

const RestaurantMenu = (props) => {

    const [foodMenu,setFoodMenu] = useState([])
    const [menuList,setMenuList] = useState([])
    const [catList,setCatList] = useState([])

    const urlPath = window.location.pathname
    // console.log("props...",urlPath)
    const restIdFromUrl = urlPath.substring(urlPath.lastIndexOf('/restaurant-id/') + 15);
    // console.log("id...",restIdFromUrl)


  const getRestaurantID = () =>{
    const api = `${process.env.REACT_APP_GET_RESTAURANT_MENU_API}${restIdFromUrl}`
   

      axios
        .get(api)
        .then((response) => {
          
          return response.data.data.foodMenu
          
        })
        .then((data)=>{
          setFoodMenu(data)
          data.map((item,index)=>{
            setMenuList((prev)=>[...prev,item.menuName])
              console.log("menuList",menuList)

              item.categories.map((itm,ind)=>{
                console.log("itm",itm)
                let catObj = {mid:index,cid:ind, catName:itm.categoryName}
                setCatList((prev)=>[...prev,catObj])

              })
              
          })
        })
        .catch((error) => {
          console.error("Invalid", error);
        });
  }

    useEffect(()=>{
      getRestaurantID()
        
  
         
    },[1])
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
              <p className="lead-2 mt-5">Lorem ipsum Lorem ipsum Lorem ipsum{JSON.stringify(catList)}</p>
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


      <Container>
        <Row>
        {/* Loop dish here */}
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
        {/* End dish loop here */}
          

          
          </Row>
          </Container>


      </Container>
  )
}

export default RestaurantMenu