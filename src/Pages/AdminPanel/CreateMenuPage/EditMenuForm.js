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

const EditMenuForm = (props) => {
  const storeData = useContext(AppContext);
  // const exitingFoodMenu = JSON.parse(sessionStorage.getItem("foodMenu"))[props.mid] || false
  // const parsedData = JSON.parse(sessionStorage.getItem("foodMenu"))
  let exitingFoodMenu={}
  exitingFoodMenu = (storeData.foodMenu )?(storeData.foodMenu[props.mid] ):(false)
  console.log(">>>",exitingFoodMenu)

  const [menuName,setMenuName] = useState(exitingFoodMenu.menuName || "")
  const [menuDesc,setMenuDesc] = useState(exitingFoodMenu.menuDesc || "")
  const [isAllDayMenu,setIsAllDayMenu] = useState(exitingFoodMenu.isAllDayMenu ||  false)
  const [startTime,setStartTime] = useState(exitingFoodMenu.startTime || 3600)
  const [endTime,setEndTime] = useState(exitingFoodMenu.endTime || 3600)
  const [isActive,setIsActive] = useState(exitingFoodMenu.isActive || false)
  const [catformValues,setCatFormValues] = useState({"categoryName":"","categoryDesc":"",isAllDayMenu,isActive:true,sortOrder:0,dishes:[]});
  const [showNewCategory, setNewShowCategory] = useState(props.showCategory||false );



//   const handleCreate =(cat)=>{
//     // new Date(Date.now())
//     const now = new Date();
// let currentDate = date.format(now, 'DD/MMM/YYYY HH:mm:ss');

//     // let foodMenuArr = JSON.parse(sessionStorage.getItem("foodMenu"))
//     let foodMenuArr = storeData.foodMenu
//     let FoodMenuList = foodMenuArr?(foodMenuArr):([])
//       const menuObj = {
//         menuName,menuDesc,isAllDayMenu,startTime,endTime,isActive,lastEditedOn:currentDate,lastEditedBy:"Admin",sortOrder:FoodMenuList.length
//       }
//       let formObj 
      
//       cat?(formObj = {...menuObj,categories:[{...cat}]}):(formObj = {...menuObj,categories:[catformValues]})
//       // let newMenu = []
//       // newMenu = [...existingFoodMenuList]
//       // newMenu.push(formObj)
//       // console.log("before updating.......",FoodMenuList)
//       FoodMenuList.push(formObj)
//       // console.log("after updating.......",FoodMenuList)
//       props.submit(FoodMenuList);
//   }

  const handleUpdate =() =>{
    // let FoodMenuList = JSON.parse(sessionStorage.getItem("foodMenu"))
    let FoodMenuList = storeData.foodMenu
    const index = props.mid
   
    FoodMenuList[index]["menuName"] = menuName
    FoodMenuList[index]["menuDesc"] = menuDesc
    FoodMenuList[index]["isAllDayMenu"] = isAllDayMenu
    FoodMenuList[index]["startTime"] = startTime
    FoodMenuList[index]["endTime"] = endTime
    FoodMenuList[index]["isActive"] = isActive
    FoodMenuList[index]["lastEditedOn"] = Date.now()
    FoodMenuList[index]["sortOrder"] = FoodMenuList.length
    

    props.submit(FoodMenuList);
    console.log("update",props.mid)
    console.log("after update",FoodMenuList)
    
  }


  

  

//   const CreateMenuForm = <Container>
//   <Row className='d-flex'>
//     <Col md={{span:8}}>
//       <h1 className="mt-6 mb-3 display-1">Create New Menu</h1>
//     </Col>
//   </Row>

//   <Row className="d-flex  justify-content-center bg-light-card pb-5">
//     <Col className="align-items-center" md={8}>
//       <Row>
//         <Col md={8} xs={12}>
//           <Row className="mt-5">
//             <LabelForm text={"Menu Name"} />
//             <IntputField
//               className={
//                 "input-field bg-style-admin muli-regular-dove-gray-22px"
//               }
//               type={"text"}
//               name={"menu_name"}
//               placeholder={""}
//               val={(v)=>setMenuName(v)}
//               value={menuName}
//               req={true}
              
//             />
//           </Row>

//           <Row className="mt-5">
//             <LabelForm text={"Menu Description"} />
//             <TextArea className={"bg-style2 muli-regular-dove-gray-22px"} name={"menu_desc"}  val={(v)=>setMenuDesc(v)} value={menuDesc}/>
//           </Row>
//         </Col>

//         <Col md={4} xs={12}>
//           <Row className="d-flex flex-column mt-1">
//             <div className="mt-5">
//               <LabelForm text={"All Day Menu"} />
//             </div>
//             <div className="mt-4">
//               <SwitchBtn1 isChecked={isAllDayMenu} val={(v)=>setIsAllDayMenu(v)} />
//             </div>
//           </Row>
//           <Row className="mt-5">
//             <div className="mt-4">
//               <LabelForm text={"Start Time"} />
//             </div>
//             <TimePicker name={"start-time"} value={(v)=>setStartTime(v)} default={startTime}/>
//           </Row>
//           <Row className="mt-5">
//             <LabelForm text={"End Time"} />
//             <TimePicker name={"end-time"} value={(v)=>setEndTime(v)} default={endTime}/>
//           </Row>

//           <Row className="mt-5">
//             <Btn className={"express-btn"} name={"Save"} variant={"warning"}  customEvent={()=>handleCreate()} />
//           </Row>
//         </Col>
//       </Row>
//     </Col>
    
//   </Row>
//   <Row className="mt-6"></Row>

//   <Row className="d-flex  justify-content-center bg-light-card pb-5">
//     <Col className="align-items-center" md={8}>
     
//     </Col>
//     </Row>

    
//         <Row className="d-flex  justify-content-center bg-light-card pt-0 pb-5">
//           <Col className="align-items-center" md={8}>
//             <Row className="d-flex justify-content-center">
//               {showNewCategory ? (
//                 false
//               ) : (
                
//                 <Col md={5} className="pb-5">
//                   <Btn
//                     className={"express-btn"}
//                     name={"Add New Category"}
//                     customEvent={() => setNewShowCategory(!showNewCategory)}
//                     variant={"warning"} 
//                   />
//                 </Col>
                
                
//               )}
//               {showNewCategory && !exitingFoodMenu? 
//               <Row className="mt-n6">
//               <CreateCategory setNewCatForm={setCatFormValues} submit={handleCreate} hideCat={()=>setNewShowCategory(false)} />
//               </Row>
//               : false}
//             </Row>
//           </Col>
//         </Row>
      
  
// </Container>;



const UpdateMenuForm = <Container>
  <Row className='d-flex'>
    <Col md={{span:8}}>
      <h1 className="mt-6 mb-3 display-1">Update Menu</h1>
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

          <Col md={{span:6}}>
          <Row className="mt-3">
          <Btn className={"express-btn mt-5"} name={"Back"} variant={"warning"}  customEvent={()=>props.hideme(false)} />
          </Row>
          </Col>
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
            <Btn className={"express-btn"} name={"Save"} variant={"warning"}  customEvent={()=>handleUpdate()} />
          </Row>

          
        </Col>
        
      </Row>
    </Col>
    
  </Row>
  <Row className="mt-6"></Row>

  
 
    
  
</Container>;

let res = Number.isInteger(props.mid)?(UpdateMenuForm):(false)

return res

};

export default EditMenuForm;
