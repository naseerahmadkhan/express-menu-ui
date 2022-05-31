import React, { useState,useEffect,useContext } from "react";
import { Card, Container,Row,Col,Image } from "react-bootstrap";
import "./DishList.css";
import { Plus, PencilFill, CheckCircleFill, Trash2Fill, TrashFill, } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import EditCategory from "../../Pages/AdminPanel/EditCategory/EditCategory";
import UpdateDishesPage from "../../Pages/AdminPanel/UpdateDishesPage/UpdateDishesPage";
import { AppContext } from '../../App';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const DishList = (props) => {
  const storeData = useContext(AppContext);
  const mid = props.id
  const cid = 0
  const [editCategory,setEditCategory] = useState(false);
  const [catIndex,setCatIndex]=useState();
  const [categoryName,setCatName] =useState("");
  const [categoryDesc,setCatDesc] =useState("");

  const [data,setData]=useState(storeData.foodMenu);
  const [dishesList2,setDishesList2]=useState(data[mid].categories[cid].dishes);

  const [showUpdateDishForm, setShowUpdateDishForm] = useState(false);
  const [dishDataToBeUpdated,setDishDataToBeUpdated] = useState({})


  useEffect(()=>{
    console.log("dishes list 2",dishesList2)
    // let ans = dishesList?(true):(false)
    // console.log("ans",ans,dishesList.length>0)
  },[data]);

  
  


  const navigate = useNavigate();
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
  
  // const data = props.data
  const noDishesFound = <p className="lead-2 text-center mt-5 mb-5">No Dishes Found</p>
  

  const dishesList = data[mid].categories[cid].dishes
  
  let priceComp=[];

  const deleteDish = (index,mid,cid) => {
    let updated = [...dishesList2];
    updated.splice(index, 1);
    console.log("after deleted", updated);
    // setDishesList(updated)
    // console.log("data",data)
    // setAddOnList(updated);
    // console.log(index,mid,cid)
    data[mid].categories[cid].dishes = updated
    // let newData = data

  //  setData(newData)
    // console.log("new Data",newData)
    // console.log("updated Data",data)
    
    console.log("data",data)

    // ------------------------
    const api = process.env.REACT_APP_MODIFY_FOOD_MENU_API;
        const token = storeData.token

    let config = {
      headers: {
        'Authorization': token
      }
    }

        axios
      .post(api, data,config)
      .then((response) => {
        console.log(response.data);
        setDishesList2(updated)
        // notify("Data uploaded successfully!")
      })
      .catch((error) => {
        console.log(error);
      });

    // -----------------------
  };


  const dishes = dishesList2.map((item,index)=>{
        return (
          <Container key={index}>
          <Row>
          <Col md={{offset:1,span:10}}>
          <Card className="mt-5 mb-5 ml-5" >
          <Row>
          <Col md={4}>
          <Image style={{}} src={item.imgUrl} thumbnail />
          </Col>

          <Col md={8}>
          <Card.Body>
          <Row>
          <Col md={6} xs={12}><h4 className="h4">{item.dishName}</h4></Col>
          {
            item.servingSizefieldsList.map((itm,index)=>{
              let res = <p >{itm.size} @ ${itm.price}</p>
              priceComp.push(res)

            })
          }
          <Col className="d-flex justify-content-around">
          <Col md={4} xs={4} className="text-center"><h6 className="h5">{(item.servingSizefieldsList.length>0)?(priceComp): (`$${item.stdDishPrice}`)}</h6></Col>
          <Col md={1} xs={4} className="text-center"><CheckCircleFill size={26}/></Col>
          <Col md={1} xs={4} className="text-center"><button onClick={()=>showUpdateDish(index,mid,cid)}><PencilFill/></button></Col>
          <Col md={1} xs={4} className="text-center"><button onClick={()=>deleteDish(index,mid,cid)}><TrashFill/></button></Col>
          </Col>
          
          </Row>

          <Row>
          <Col>
          <h5 className="h5">{item.dishDesc} </h5>
          </Col>
          </Row>

          
        </Card.Body>
          </Col>
          </Row>
          
           
          </Card>
          </Col>
          
          </Row>
          
          </Container>
        )
  })


  

  const catList = data[mid].categories

  const DishListComponent = catList.map((item,index)=>{
    return(
      <Container className="mb-5" key={index}>
  <Card className="dish-card">
    <Card.Body>
      <Card.Title className="d-flex justify-content-between">
        <div>
          <h3 className="dish-title h4">{item.categoryName}</h3>
        </div>
        <div>
          <h3 className="dish-title h4">
          <button onClick={()=>showEditCategory(index)}><PencilFill /></button>
            
          </h3>
        </div>
      </Card.Title>
      <Card.Text className="">{item.categoryDesc}</Card.Text>

      {/**Dish List-----starts */}
      {dishesList.length>0?(dishes):(noDishesFound)}
        {/**Dish List-----end */}

        <div className="d-flex align-items-center justify-content-center">
        <Card.Link
        className="dish-btn"
        name={"add"}
        // onClick={() => navigate("/dashboard/add-dishes")}
        onClick={()=>props.doChange(index)}
      >
        Add Dishes <Plus size={30} />
      </Card.Link>

        </div>
      
    </Card.Body>
  </Card>
</Container>

    )

  })


  const handleUpdate = (item) =>{
    let FoodMenuList = storeData.foodMenu
    FoodMenuList[mid].categories[catIndex].categoryName = item.categoryName
    FoodMenuList[mid].categories[catIndex].categoryDesc = item.categoryDesc
    
    console.log("after update",FoodMenuList)

    const token = storeData.token
    const api = process.env.REACT_APP_MODIFY_FOOD_MENU_API;
    
let data = FoodMenuList;
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
    
    
  })

  .then(()=>{
    setEditCategory(false)
  })
  .catch((error) => {
    console.log(error);
    notify("Session Token Expired. Please Re-Login")
  });


  }

  function showEditCategory(cid){
    let FoodMenuList = storeData.foodMenu
      setEditCategory(true)
      setCatIndex(cid)
      setCatName(FoodMenuList[mid].categories[cid].categoryName )
     setCatDesc(FoodMenuList[mid].categories[cid].categoryDesc )
  }


  function showUpdateDish(index,mid,cid){
    console.log("show update dish form")
    setDishDataToBeUpdated({index,mid,cid})
    setShowUpdateDishForm(true)
  }
  

  if(editCategory && !showUpdateDishForm)
  return<>
<EditCategory submit={handleUpdate} hideCat={()=>setEditCategory(false)} values={{categoryName,categoryDesc}}/>
<ToastContainer />
  </> 
  
  
  if(!editCategory && !showUpdateDishForm)
  return DishListComponent

  if(showUpdateDishForm)
  return <UpdateDishesPage values={dishDataToBeUpdated} hideDishComp={()=>setShowUpdateDishForm(false)}/>
  // return <h1 className="h1 mt-6">hello</h1>
  
  // return (
  //   <>
  //    {editCategory?(<EditCategory submit={handleUpdate} hideCat={()=>setEditCategory(false)} values={{categoryName,categoryDesc}}/>):( CategoryComponent)}
    

  //   </>
   
  // );
};

export default DishList;
