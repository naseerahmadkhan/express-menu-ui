import React,{useState,useContext,useEffect}  from 'react'
import { AppContext } from '../../../App';
import axios from "axios";


const BankActivationStatus = () => {

    const storeData = useContext(AppContext);
    const token = storeData.token;
    let config = {
        headers: {
          Authorization: token,
        },
      };

      const addStatusinDB = (status)=>{
        let restInfObj = {...storeData.restaurantInfo, ...status};
        const token = storeData.token;
        const api = process.env.REACT_APP_CREATE_RESTAURANT_INFO_API;
        let config = {
          headers: {
            Authorization: token,
          },
        };
        
        axios
                .post(api, restInfObj, config)
                .then((response) => {
                  console.log("account no successfully added in db", response);
                })
                .catch((error) => {
                  console.error("Invalid", error);
                });
      }

      const getConnectedAccountStatus = ()=>{
        // let infObj = {...storeData.restaurantInfo, "bankAccountStatus":};
        let data={"accountNo":storeData.restaurantInfo.accountNo}
        const token = storeData.token;
        const api = process.env.REACT_APP_STRIPE_CONNECTED_ACC_STATUS_API;
        let config = {
          headers: {
            Authorization: token,
          },
        };
    
        axios
                .post(api, data, config)
                .then((response) => {
                  console.log("account status", response.data);
                  return response.data
                })
                .then((response)=>{
                  console.log("status",response)
                  let statusObj = {"bankStatus":response ,step:4}
                  console.log(storeData.restaurantInfo)
                  if(!(storeData.restaurantInfo.hasOwnProperty('bankStatus')))
                  addStatusinDB(statusObj)
                })
                .catch((error) => {
                  console.error("Invalid>>>>>>", error);
                });
      }

    const getRestaurantInfo = () =>{
        const api = process.env.REACT_APP_GET_RESTAURANT_INFO_API; 
        const data={}
        axios
      .post(api, data, config)
      .then((response) => {
        console.log("res>>>",response.data)
        storeData["restaurantInfo"] = response.data;
        // return response.data
      })
      .then((response)=>{
      //  console.log("again",response)
       getConnectedAccountStatus()
      //  console.log(">>>",storeData.restaurantInfo)
      })
      .catch((error) => {
        console.error("Invalid Token", error);
        // notify("Token is expired! Please Re-login");
        // navigate("/login");
      })

    }

    
    useEffect(()=>{
       
    // const api = process.env.REACT_APP_STRIPE_CONNECTED_ACC_STATUS_API;
    
    console.log(storeData)
    

    // const data = {accountNo:"acct_1L2VqUQXikHy9pgK"};
    getRestaurantInfo();


    

    },[])
  return (
    <div>
        <h1 className="mt-6 display-6">Bank Activation Status</h1>
    </div>
  )
}

export default BankActivationStatus