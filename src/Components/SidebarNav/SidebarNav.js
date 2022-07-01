import React,{useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ProSidebar,SidebarHeader,SidebarContent,  Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SidebarNav.css"
import { PersonCircle,Gear,QrCode, CardList,BagFill, PersonBoundingBox,Speedometer } from "react-bootstrap-icons";
import {
   Container,
   Navbar,
   Nav,
   Image
 } from "react-bootstrap";
 import logo from '../../static/img/logo.svg'
 import { AppContext } from '../../App';
 import axios from "axios";

const SidebarNav = () => {
    const [toggle,setToggle] = useState(false)
    const storeData = useContext(AppContext);
    const [info,setInfo]=useState(storeData.restaurantInfo)
    const [step,setStep]=useState(0)


   
    let i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {  
    setInfo(storeData.restaurantInfo) //  call a 3s setTimeout when the loop is called
    i++; 
       //  your code here
                       //  increment the counter
    if (i < 10 ) {           //  if the counter < 10, call the loop function
      myLoop();
      
      if(storeData.restaurantInfo !== undefined){
        i=9
        console.log('hello',i,info);           //  ..  again which will trigger another 
        setStep(storeData.restaurantInfo.step)
      }  
    }                       //  ..  setTimeout()
  }, 500)
}

const checkRestaurantInfo = () =>{
  const token = storeData.token;
    
    const data = {};
    let config = {
      headers: {
        Authorization: token,
      },
    };

    const api2 = process.env.REACT_APP_GET_RESTAURANT_INFO_API;
axios
  .post(api2, data, config)
  .then((response) => {
    if(response.data === "empty"){
      console.log("not data found")
    }else{
        storeData["restaurantInfo"] = response.data
        // return response.data
    }
    
  })
  .catch((err)=>{
    console.log("Err",err)
  })

}



    useEffect(()=>{
      checkRestaurantInfo();
      myLoop();       
      console.log(">>>>",storeData)
    },[])
    


    return (
       <div>


  <Navbar id="navbar2" className="justify-content-right" expand="lg" bg="light" variant="light" fixed="top">
    <Container className="d-flex">
    <div><Navbar.Toggle className="d-md-block" onClick={()=> setToggle(!toggle)} /></div>
      <div>
      <Nav className="d-flex flex-row">
      <Nav.Link href=""><Gear size={32}/></Nav.Link>
      <Nav.Link href=""><PersonCircle size={32}/></Nav.Link>
      
    </Nav>
      </div>
      
    </Container>
  </Navbar>

<ProSidebar 	breakPoint={"lg"} toggled={toggle} onClick={()=> setToggle(!toggle)}>
<SidebarHeader>
<div className="d-flex mt-1 ml-4">
<div className="d-flex flex-row">
          <Image className="logo" src={logo}/>
          <h1 className="brand-text">Express Menu</h1>
          </div>
          </div>
    {/**
     *  You can add a header for the sidebar ex: logo
     */}
  </SidebarHeader>

  <SidebarContent className="mt-5">
  <Menu iconShape="square">
    <MenuItem icon={<Speedometer size={36}/>}><div className="h4 mt-2">Dashboard</div>  <Link to="/dashboard" /> </MenuItem>
    
    {step>2 ?(<>
      <MenuItem icon={<BagFill size={36}/>}><div className="h4 mt-2">Orders</div> <Link to="/dashboard/orders" /></MenuItem>
    <MenuItem icon={<CardList size={36}/>}><div className="h4 mt-2">Menus</div> <Link to="/dashboard/main-menu" /> </MenuItem>
    <MenuItem icon={<PersonBoundingBox size={36}/>}><div className="h4 mt-2">Customers</div></MenuItem>
    </>
    ):(false)}
    
    <MenuItem icon={<QrCode size={36}/>}><div className="h4 mt-2">QR Code</div>  <Link to="/dashboard/qr-code" />  </MenuItem>
  </Menu>
  </SidebarContent>

</ProSidebar>
</div>
    )
}

export default SidebarNav
