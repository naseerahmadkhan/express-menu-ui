import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { ProSidebar,SidebarHeader,SidebarContent,  Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SidebarNav.css"
import { Gem,House,PersonCircle,Gear,QrCode } from "react-bootstrap-icons";
import {
   Container,
   Navbar,
   Nav,
   Col,
   Row,
   Image
 } from "react-bootstrap";
 import logo from '../../static/img/logo.svg'

const SidebarNav = () => {
    const [toggle,setToggle] = useState(false)

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
    <MenuItem icon={<House size={36}/>}><li className="h4 mt-2">Dashboard</li>  <Link to="/dashboard" /> </MenuItem>
    <MenuItem icon={<Gem size={36}/>}><li className="h4 mt-2">Orders</li> <Link to="/dashboard/orders" /></MenuItem>
    <MenuItem icon={<Gem size={36}/>}><li className="h4 mt-2">Menus</li> <Link to="/dashboard/main-menu" /> </MenuItem>
    <MenuItem icon={<Gem size={36}/>}><li className="h4 mt-2">Customers</li></MenuItem>
    <MenuItem icon={<QrCode size={36}/>}><li className="h4 mt-2">QR Code</li>  <Link to="/dashboard/qr-code" />  </MenuItem>
  </Menu>
  </SidebarContent>

</ProSidebar>
</div>
    )
}

export default SidebarNav
