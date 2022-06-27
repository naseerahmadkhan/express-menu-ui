import React,{useState,useEffect,useContext} from 'react'
import axios from "axios"
import {
  Row,
  Col,
  Container,
  Card,
  Table,
  Form
  } from "react-bootstrap";
  import Image from "react-bootstrap/Image";
  import RestImg from "../../static/img/order/03.png";
  import DishImg from "../../static/img/order/04.png";
  import RadioBtn from "../../Components/RadioBtn/RadioBtn"
  import { Check, Check2, XLg} from "react-bootstrap-icons";
  import { useCart } from "react-use-cart";
  import { v4 as uuidv4 } from "uuid";
  import { AppContext } from '../../App';

const RestaurantMenu = (props) => {

    const [foodMenu,setFoodMenu] = useState([])
    const [menuList,setMenuList] = useState([])
    const [catList,setCatList] = useState([])
    const [selectedDishes,setSelectedDishes]=useState([])
    const [selectedMenu,setSelectedMenu]=useState({})
    const [restaurantName,setRestaurantName]= useState("")

    const [showDishesList,setShowDishesList] = useState(true)
    const [viewDish,setViewDish] = useState([{}])

    const [price,setPrice]=useState(0);
    const [serving,setServing]=useState({"size":"","price":""});

    const storeData = useContext(AppContext);

    // const products = [
    //   {
    //     id: 1,
    //     name: "Malm",
    //     price: 9900,
    //     quantity: 1
    //   }
    // ];
    const { addItem,setCartMetadata } = useCart();
    

    const urlPath = window.location.pathname
    // console.log("props...",urlPath)
    const restIdFromUrl = urlPath.substring(urlPath.lastIndexOf('/restaurant-id/') + 15);
    // console.log("id...",restIdFromUrl)



    const showDishesAccordingtoMenu = (data) =>{
      let mid=0
      let cid=0
      setSelectedMenu({mid,cid})
      // console.log("dishes",foodMenu[mid].categories[cid].dishes)
      setSelectedDishes(data[mid].categories[0].dishes)
      console.log("dishes",selectedDishes)
      document.getElementById("dishes").scrollIntoView();
    }


  const getRestaurantID = () =>{
    const api = `${process.env.REACT_APP_GET_RESTAURANT_MENU_API}${restIdFromUrl}`
   

      axios
        .get(api)
        .then((response) => {
          console.log("response>>>",response)
          console.log("rest name",response.data.data.restaurantInfo.businessName)
          setCartMetadata({restInfo:response.data.data.restaurantInfo,restId:restIdFromUrl});
          setRestaurantName(response.data.data.restaurantInfo.businessName)

          
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
          console.log("loded",data[0].categories[0].dishes)
          showDishesAccordingtoMenu(data)
          
        })
        .then((()=>{
        }))
        .catch((error) => {
          console.error("Invalid", error);
        });
  }

    useEffect(()=>{
      getRestaurantID()
      
         
    },[])

   

    const menuItem = menuList.map((item,index)=>{
      return(
        <Col key={index} className="d-flex justify-content-center" md={"auto"} sm={12}>
        <button id={index} className="lead-2 mt-3" onClick={(e)=>showDishesAccordingtoMenu(index)}>{item}</button>
      </Col>
      )
    })

   const handleAddToCart = (dish) =>{
    setShowDishesList(true)

    const finalProduct = {
      id:uuidv4(),
      dishName:dish[0].dishName,
      ...serving
      
    }
    console.log("serving",serving)
    console.log("final products",finalProduct)
    addItem(finalProduct,1) //1 is qty

   } 

    const openAddToCart = (index) =>{
      setSelectedMenu({ ...selectedMenu,dish:index})
      setShowDishesList(false)
      console.log(">>>",selectedMenu)
      let mid = selectedMenu.mid
      let cid = selectedMenu.cid
      let currentDish =foodMenu[mid].categories[cid].dishes[index] 

      setViewDish([foodMenu[mid].categories[cid].dishes[index]])
      

      if((currentDish.stdDishPrice) !== undefined){
        setServing({size:"std",price:currentDish.stdDishPrice})
      }
      
    }

    const showDishesAccordingtoCategory = (id) =>{
      console.log("cat btn",id)
      let mid = catList[id].mid
      let cid = catList[id].cid
      setSelectedMenu({mid,cid})
      // console.log("dishes",foodMenu[mid].categories[cid].dishes)
      setSelectedDishes(foodMenu[mid].categories[cid].dishes)
      console.log("dishes",selectedDishes)
      document.getElementById("dishes").scrollIntoView();
    }

    const catItem = catList.map((item,index)=>{
      return(
        <Col key={index} className="d-flex justify-content-center" md={"auto"} sm={12}>
        <button id={index} className="lead-2 mt-3" onClick={(e)=>showDishesAccordingtoCategory(e.target.id)}>{item.catName}</button>
      </Col>
      )
    })

    const dishItem = selectedDishes.map((item,index)=>{
     return <Col md={6} lg={6} key={index} >
            <Container className="mt-5" >
              <Row className="g-0">
                <Col md={6} lg={6} className="bg-buttery-white" >
                  <Row className=" d-flex flex-column h-100">
                    <Col className="d-flex flex-column align-items-start h-75 ">
                      <p className="fw-bold h3 mb-2">{item.dishName}</p>
                      <p className="lead-2">{item.dishDesc}</p>
                    </Col>

                    <Col className="d-flex align-self-end ">
                      <p className="fw-bold h3">{item.stdDishPrice}</p>
                    </Col>

                    <Col className="text-center">
                      <button className="btn btn-warning" onClick={()=>openAddToCart(index)}>View</button>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} lg={6} className="d-flex flex-column">
                  <Image className="w-100 h-100 img-thumbnail" src={item.imgUrl} />
                </Col>
              </Row>
            </Container>
          </Col>

    })

    var servingSizelist
    
    if(viewDish[0].servingSizefieldsList && viewDish[0].servingSizefieldsList.length > 0){
      servingSizelist = viewDish[0].servingSizefieldsList.map((item,ind)=>{

        return <div key={ind} className="px-5">

        <Form.Check type="radio" id={`servingsize ${ind}`} >
        <Form.Check.Input type="radio" name="servingsize" value={item.price}  onChange={e=>setServing({size:item.size, price:item.price})} />
        <Form.Check.Label className="p-3">{`${item.size} @ $ ${item.price}`}</Form.Check.Label>
      </Form.Check>

        </div>
      })

    }
    

    const addToCart = <Container fluid>
    <Row>
      <Col md={6} lg={6} sm={12}>
        <Container className="mt-5">
          <Row className="g-0">
            <Col md={{offset:7,span:12}} xs={12} >
             <Card className="shadow-lg p-3 mb-5 bg-white rounded border border-secondary">
             <div>
                 <h3 className="h3 fw-bold d-flex stify-content-center">{viewDish[0].dishName}</h3>
             </div>

             <div>
                 <h3 className="h3 fw-bold d-flex stify-content-center">{viewDish[0].dishDesc}</h3>
             </div>

             <Image className="w-100 img-responsive" src={viewDish[0].imgUrl} />
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
                            <td>{viewDish[0].stdDishPrice }</td>
                        </tr>
                    </tbody>
                </Table>
             </div>

             <Container>
                 <Row>
                     <Col md={12}>
                     <p className="lead">Gluten free {viewDish[0].isGlutenFree?(<Check size={48}/>):(<XLg size={24}/>)}</p>
                     <p className="lead">Vegetarian {viewDish[0].isVegetarian?(<Check size={48}/>):(<XLg size={24}/>)}</p>
                     <p className="lead">Vegan {viewDish[0].isVegan?(<Check size={48}/>):(<XLg size={24}/>)}</p>
                     {
                      servingSizelist
                     }

                     
                     </Col>
                 </Row>
             </Container>

             <Container className="mt-3">
                 <Row className="mb-5">
                 <Col className="text-center">
                    <button className="btn-success w-100 p-3" onClick={()=>handleAddToCart(viewDish)}><span className="h3">Add to Cart</span></button>
                  </Col>

                  
                 </Row>
                 <Row>
                 <Col className="text-center">
                    <button className="btn-warning w-100 p-3" onClick={()=>setShowDishesList(true)}><span className="h3">Back</span></button>
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

  return (
    <Container fluid className="mt-6">
      <Row className="bg-light-card pb-5 pt-5">
        <Col
          md={{ offset: 1, span: 5 }}
          sm={{ offset: 1, span: 10 }}
          className="d-flex flex-column  justify-content-center align-items-left"
        >
          <h1 className="display-2 ">{restaurantName}</h1>
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

      <Container className="mt-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center" md={"auto"} sm={12}>
            <p className="lead-2 mt-3">Picked for you</p>
          </Col>
          {menuItem}
          {catItem}

        </Row>
      </Container>


      <Container className="mt-5 mb-5" id="dishes">
        <Row>
        {/* Loop dish here */}
          {showDishesList?(dishItem):(false)}
        {/* End dish loop here */}
          

          
          </Row>
          </Container>
        {!showDishesList?( addToCart):(false)}

       

      </Container>
  )
}

export default RestaurantMenu