import React, { useEffect, useState,useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Plus, Pencil, Trash2Fill } from "react-bootstrap-icons";
import "./MainMenuPage.css";
import { useNavigate, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import FoodMenu from "../../AdminPanel/FoodMenuPage/FoodMenuPage";
import EditMenuPage from "../CreateMenuPage/EditMenuPage";
import CreateNewMenuPage from "../CreateMenuPage/CreateNewMenuPage";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { AppContext } from '../../../App';

  import MenuItem from "./MenuItem";

const MainMenuPage = () => {
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

  const [menuList, setMenuList] = useState([]);

  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const [targetFoodMenu, setTargetFoodMenu] = useState({});
  const [data, setData] = useState();
  const [editMenuId, setEditMenuId] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);

  const [isLoadingCompleted, setIsLoadingComplete] = useState(false);
  const [isCreatingFirstTimeMenu, setIsCreatingFirstTimeMenu] = useState(false);

  // #--------------------------

  
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
        setData(response.data);


       
      })
      .then(() => {
        console.log("complete loading");
        setIsLoadingComplete(true);
        console.log("data",data)
      })

      .catch((error) => {
        console.log("ERR!!!", error);
      })
      .then(() => {
        console.log("after error");
        setIsCreatingFirstTimeMenu(true);
        console.log("isCreatingFirstTimeMenu", isCreatingFirstTimeMenu);
        setIsLoadingComplete(true);
      });
  }




  const Loading = () => {
    return <h1 className="display-2 mt-6">Loading...</h1>;
  };

  const LoadingDone = () => {
    return <h1 className="display-2 mt-6">Done...</h1>;
  };

  const handleMenuClick = (index, name) => {
    console.log("menu", index, name);
    setTargetFoodMenu({ id: index, menuName: name });
    setShowFoodMenu(true);
  };

  const delMenuById = (index) => {
    // const stringData = sessionStorage.getItem("foodMenu");
    // const jsonData = JSON.parse(stringData);
    const jsonData = storeData.foodMenu
    jsonData.splice(index, 1);

    const token = storeData.token;
    const api = process.env.REACT_APP_MODIFY_FOOD_MENU_API;

    let data = jsonData;
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .post(api, data, config)
      .then((response) => {
        console.log(response);
        notify("Menu is deleted Successfully!")
        // sessionStorage.setItem("foodMenu", JSON.stringify(data));
        storeData["foodMenu"] = jsonData
        loadMenuData()
        
      })
      .catch((error) => {
        console.log(error);
      });

      
  };

  const editMenuById = (index) => {
    setEditMenuId(index);
    setShowEditMenu(true);
  };

  const hideIsCreatingFirstTimeMenu = (val) =>{
      setIsCreatingFirstTimeMenu(val)
      loadMenuData()
  }


  

  useEffect(() => {
    loadMenuData();

    
    
  }, [showEditMenu]);

  const MenuPage = (
    <Container>
      <Row className="d-flex mt-6">
        <Col md={{ span: 4 }} className=" mb-5">
          <div className="d-flex justify-content-around nova-card">
            <div className="fw-bold">Food Menus</div>
            <div
              className="btn"
              onClick={() => navigate("/dashboard/create-menu")}
            >
              {" "}
              <Plus size={48} />
            </div>
          </div>
          <div className="bg-light-card">
            <Row className="mb-3"></Row>
            
            { 
              storeData.foodMenu?(storeData.foodMenu.map((item,index)=>{
                let newkey = uuidv4();
                return <Row key={newkey}>
              <Col md={{ offset: 1, span: 10 }}>
                <div className="d-flex justify-content-around nova-card mt-3 ">
                  <button
                    className=""
                    onClick={() => handleMenuClick(index, item.menuName)}
                  >
                    {item.menuName}
                  </button>


                  <button>
                    <Pencil
                      size={16}
                      id={index}
                      onClick={() => editMenuById(index)}
                    />
                  </button>


                  <button>
                    <Trash2Fill
                      size={16}
                      id={index}
                      onClick={() => delMenuById(index)}
                    />
                  </button>
                </div>
              </Col>
            </Row>
              })):(false)
              
              
            }

            {/* <Row className="">
              <Col md={{ offset: 1, span: 10 }}>
                <div className="d-flex justify-content-around nova-card mt-3">
                  <div>Dinner</div>
                  <div>
                    <Pencil size={16} />
                  </div>
                </div>
              </Col>
            </Row> */}
            <Row className="mb-5" style={{ height: "32px" }}></Row>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className=" mb-5">
          <div className="d-flex justify-content-around nova-card">
            <div className="fw-bold">Drink Menus</div>
            <div className="btn">
              <Plus size={48} />
            </div>
          </div>

          <div className="bg-light-card">
            <Row className="mb-3"></Row>
            <Row>
              <Col md={{ offset: 1, span: 10 }}>
                <div className="d-flex justify-content-around nova-card mt-3">
                  <div className="">Soft Drinks</div>
                  <div>
                    <Pencil size={16} />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="">
              <Col md={{ offset: 1, span: 10 }}>
                <div className="d-flex justify-content-around nova-card mt-3">
                  <div>Bevarages</div>
                  <div>
                    <Pencil size={16} />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="">
              <Col md={{ offset: 1, span: 10 }}>
                <div className="d-flex justify-content-around nova-card mt-3">
                  <div>Halal Drinks</div>
                  <div>
                    <Pencil size={16} />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="" style={{ height: "32px" }}></Row>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );

  // Render Component ------------------------
  // if (isLoadingCompleted) {
  //   if (data) {
  //     if(showEditMenu){
  //       return <CreateMenuPage id={editMenuId} showCategory={true} showEditMenu={(v)=>setShowEditMenu(v)} />
  //     }else if(showFoodMenu){
  //       return <FoodMenu menuDetails={targetFoodMenu} data={data}/>
  //     }else
  //     return menuPage;
  //   } else if(isCreatingFirstTimeMenu) {
  //     return <CreateNewMenuPage  />;
  //   }
  // } else {
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   );
  // }

  // -----------------------------------------

  const showEditMenuPage = (v) =>{
    setShowEditMenu(v)
    // navigate("/dashboard/main-menu")
  }

  if(!isLoadingCompleted)
  return <Loading/>

  if((!data || data.length===0) && isCreatingFirstTimeMenu)
  return <CreateNewMenuPage hideMenu={(v)=>hideIsCreatingFirstTimeMenu(v)} />

  if(showEditMenu)
  return <EditMenuPage id={editMenuId} showCategory={true} showEditMenu={(v)=>showEditMenuPage(v)} />

  if(showFoodMenu)
  return <FoodMenu menuDetails={targetFoodMenu} data={data}/>
  return MenuPage





  
};

export default MainMenuPage;
