import React,{useState,useEffect,useContext} from 'react';
import IntputField from "../../../Components/InputField/InputField";
import Btn from "../../../Components/Btn/Btn";
import LabelForm from "../../../Components/LabelForm/LabelForm";
import TextArea from "../../../Components/TextArea/TextArea";

import SwitchBtn1 from "../../../Components/SwitchBtn2/SwitchBtn";
import TimePicker from "../../../Components/TimePicker/TimePicker";

import CreateCategory from "../CreateCategoryPage/CreateCategory";

import { Row, Col, Container } from "react-bootstrap";
import date from 'date-and-time';
import { AppContext } from '../../../App';

const CreateNewMenuForm = (props) => {
  const storeData = useContext(AppContext);
  // const exitingFoodMenu = JSON.parse(sessionStorage.getItem("foodMenu"))[props.mid] || false

  const [menuName,setMenuName] = useState("")
  const [menuDesc,setMenuDesc] = useState("")
  const [isAllDayMenu,setIsAllDayMenu] = useState( false)
  const [startTime,setStartTime] = useState(3600)
  const [endTime,setEndTime] = useState(3600)
  const [isActive,setIsActive] = useState( false)
  const [catName,setCatName] = useState("")
  const [catDesc,setCatDesc] = useState("")
  const [catformValues,setCatFormValues] = useState({"categoryName":catName,"categoryDesc":catDesc,isAllDayMenu,isActive:true,sortOrder:0,dishes:[]});
  const [showNewCategory, setNewShowCategory] = useState(props.showCategory||false );



  const handleCreate =()=>{
    const now = new Date();
let currentDate = date.format(now, 'DD/MMM/YYYY HH:mm:ss');

    let FoodMenuList = storeData.foodMenu?(storeData.foodMenu):([])
      const menuObj = {
        menuName,menuDesc,isAllDayMenu,startTime,endTime,isActive,lastEditedOn:currentDate,lastEditedBy:"Admin",sortOrder:FoodMenuList.length
      }
      let formObj = {...menuObj,categories:[{...catformValues,"categoryName":catName,"categoryDesc":catDesc}]}
      
      FoodMenuList.push(formObj)
      props.submit(FoodMenuList);

  }

 

  

  

  const CreateNewMenuForm = <Container>
  <Row className='d-flex'>
    <Col md={{span:8}}>
      <h1 className="mt-6 mb-3 display-6">Create New Menu</h1>
    </Col>
  </Row>

  <Row className="d-flex  justify-content-center bg-light-card pb-5">
    <Col className="align-items-center" md={8}>
      <Row>
        <Col md={8} xs={12}>
          <Row className="mt-5">
            <LabelForm text={"Menu Name"} />
            <IntputField
              className={
                "input-field bg-style-admin muli-regular-dove-gray-22px"
              }
              type={"text"}
              name={"menu_name"}
              placeholder={""}
              val={(v)=>setMenuName(v)}
              value={menuName}
              req={true}
              
            />
          </Row>

          <Row className="mt-5">
            <LabelForm text={"Menu Description"} />
            <TextArea className={"bg-style2 muli-regular-dove-gray-22px"} name={"menu_desc"}  val={(v)=>setMenuDesc(v)} value={menuDesc}/>
          </Row>
        </Col>

        <Col md={4} xs={12}>
          <Row className="d-flex flex-column mt-1">
            <div className="mt-5">
              <LabelForm text={"All Day Menu"} />
            </div>
            <div className="mt-4">
              <SwitchBtn1 isChecked={isAllDayMenu} val={(v)=>setIsAllDayMenu(v)} />
            </div>
          </Row>
          <Row className="mt-5">
            <div className="mt-4">
              <LabelForm text={"Start Time"} />
            </div>
            <TimePicker name={"start-time"} value={(v)=>setStartTime(v)} default={startTime}/>
          </Row>
          <Row className="mt-5">
            <LabelForm text={"End Time"} />
            <TimePicker name={"end-time"} value={(v)=>setEndTime(v)} default={endTime}/>
          </Row>

          <Row className="mt-5">
            <Btn className={"express-btn"} name={"Save"} variant={"warning"}  customEvent={()=>handleCreate()} />
          </Row>
        </Col>
      </Row>
    </Col>
    
  </Row>
  <Row className="mt-6"></Row>

  <Row className="d-flex  justify-content-center bg-light-card pb-5">
    <Col className="align-items-center" md={8}>
     
    </Col>
    </Row>

    
        <Row className="d-flex  justify-content-center bg-light-card pt-0 pb-5">
          <Col className="align-items-center" md={8}>
            <Row className="d-flex justify-content-center">
              {showNewCategory ? (
                false
              ) : (
                
                <Col md={5} className="pb-5">
                  <Btn
                    className={"express-btn"}
                    name={"Add New Category"}
                    customEvent={() => setNewShowCategory(!showNewCategory)}
                    variant={"warning"} 
                  />
                </Col>
                
                
              )}
              {showNewCategory ? 
              <Row className="mt-n6">
              <CreateCategory  setCatName={(v)=>setCatName(v)}  setCatDesc={(v)=>setCatDesc(v)} submit={handleCreate} hideCat={()=>setNewShowCategory(false)} />
              </Row>
              : false}
            </Row>
          </Col>
        </Row>
      
  
</Container>;






return CreateNewMenuForm
};

export default CreateNewMenuForm;
