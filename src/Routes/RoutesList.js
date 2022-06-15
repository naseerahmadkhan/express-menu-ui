import React from 'react'
import Dev from "../Pages/Dev/Dev"
import HomePage from "../Pages/Home/Home"
import ContactUsPage from "../Pages/ContactUs/ContactUs"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RegPage from "../Pages/RegPage/RegPage"
import SignupCompleted from "../Pages/SignupCompletedPage/SingnupCompletedPage"
import Orders from "../Pages/OrderPage/Orders"
import RestaurantMenu from '../Pages/RestaurantMenu/RestaurantMenu'
import CartPage from '../Pages/Cart/CartPage'

import Dashboard from "../Pages/AdminPanel/Dashboard/Dashboard"
import CreateNewMenu from "../Pages/AdminPanel/CreateMenuPage/CreateNewMenuPage"
import AddDishes from '../Pages/AdminPanel/AddDishesPage/AddDishesPage'
import Menus from "../Pages/AdminPanel/MainMenuPage/MainMenuPage"
import OrdersList from "../Pages/AdminPanel/Orders/Orders"
import ThankYouPublished from "../Pages/AdminPanel/ThankYouPublishedPage/ThankYourPublishedPage"
import FoodMenu from "../Pages/AdminPanel/FoodMenuPage/FoodMenuPage"
import QrCode from "../Pages/AdminPanel/QrCode/QrCode"
import BankActivationStatus from '../Pages/AdminPanel/BankAccount/BankActivationStatus';



import ExpressNavbar from '../Components/NavBarExpressMenu/NavBarExpressMenu'
import SidebarNav from "../Components/SidebarNav/SidebarNav"
import Footer from '../Components/Footer/Footer'


import { BrowserRouter,Route, Routes,Navigate } from 'react-router-dom';
import {Row,Col} from "react-bootstrap";


import RequireAuth from './RequireAuth'






const RoutesList = () => {
    const Error404 = () => {
        return <h1 className="h1 mt-6 text-center mb-5 pb-5">404 Page not found</h1>;
      }

  return (
    <div>
        <BrowserRouter >
  {}
  
  
  {/* for testing only */}
  {/* <Route path='/dev' element={<div><ExpressNavbar/><Dev/><Footer/></div>} /> */}
    <Routes>
    <Route path='/dev' element={<div><ExpressNavbar/><Dev/><Footer/></div>} />
    <Route path='/' element={<div><ExpressNavbar/><HomePage/><Footer/></div>} />
    <Route path='/home' element={<div><ExpressNavbar/><HomePage/><Footer/></div>} />
    <Route path='/login' element={<div><ExpressNavbar/><LoginPage/><Footer/></div>} />
    <Route path='/order' element={<div><ExpressNavbar/><Orders/><Footer/></div>} />
    <Route path='/contact-us' element={<div><ExpressNavbar/><ContactUsPage/><Footer/></div>} />
    <Route path='/partner-with-us' element={<div><ExpressNavbar/><RegPage/><Footer/></div>} />
    <Route path='/singnup-completed' element={<div><ExpressNavbar/><SignupCompleted/><Footer/></div>} />
    <Route path='/restaurant-id/:id' element={<div><ExpressNavbar/><RestaurantMenu/><Footer/></div>} />
    <Route path='/cart' element={<div><ExpressNavbar/><CartPage/><Footer/></div>} />

    
    

    <Route
        path="/dashboard"
        element={
         
          <RequireAuth redirectTo="/login">
          <Col md={{span:2}}><SidebarNav/></Col> <Col md={{offset:3}}><Dashboard/></Col>
          </RequireAuth>
        }
      />

<Route
        path="/dashboard/create-menu"
        element={
         
          <RequireAuth redirectTo="/login">
          <Col md={{span:2}}><SidebarNav/></Col> <Col md={{offset:3}}><CreateNewMenu/></Col>
          </RequireAuth>
        }
      />


<Route
        path="/dashboard/add-dishes'"
        element={
         
          <RequireAuth redirectTo="/login">
         <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><AddDishes/></Col>
          </RequireAuth>
        }
      />

<Route
        path="/dashboard/main-menu"
        element={
         
          <RequireAuth redirectTo="/login">
         <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><Menus/></Col>
          </RequireAuth>
        }
      />     


<Route
        path="/dashboard/orders"
        element={
         
          <RequireAuth redirectTo="/login">
         <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><OrdersList/></Col>
          </RequireAuth>
        }
      />   


 <Route
        path="/dashboard/menu/published"
        element={
         
          <RequireAuth redirectTo="/login">
         <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><ThankYouPublished/></Col>
          </RequireAuth>
        }
      />          


<Route
        path="/dashboard/:id"
        element={
         
          <RequireAuth redirectTo="/login">
        <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><Error404/></Col>
          </RequireAuth>
        }
      /> 


 <Route
        path="/dashboard/bank-activation-status"
        element={
         
          <RequireAuth redirectTo="/login">
        <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><BankActivationStatus/></Col>
          </RequireAuth>
        }
      />        


<Route
        path="/dashboard/food-menu"
        element={
         
          <RequireAuth redirectTo="/login">
       <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><FoodMenu/></Col>
          </RequireAuth>
        }
      /> 
    

    <Route
        path="/dashboard/qr-code"
        element={
         
          <RequireAuth redirectTo="/login">
       <Col md={{span:2}}><SidebarNav/></Col><Col md={{offset:3}}><QrCode/></Col>
          </RequireAuth>
        }
      />    
    
    
   
    
  


    <Route
            path="*"
            element={<div><ExpressNavbar/><Error404/><Footer/></div>}/>
    
    
  
    </Routes>
    
  </BrowserRouter>
    </div>
  )
}

export default RoutesList