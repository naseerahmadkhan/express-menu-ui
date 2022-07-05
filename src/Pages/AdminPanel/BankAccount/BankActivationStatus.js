import React,{useState,useContext,useEffect}  from 'react'
import { AppContext } from '../../../App';
import axios from "axios";


const BankActivationStatus = () => {

    const storeData = useContext(AppContext);
    const [activated,setActivated] = useState(undefined);
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
                  console.log("account status successfully added in db", response);
                  setActivated(true)

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
                  if(response.bankStatus === false){
                   
                    console.log("No Bank Account found>>")
                    setActivated(false)

                  }else{
                    console.log("has bank status property",response)
                    if(storeData.restaurantInfo.hasOwnProperty("bankStatus") === false &&
                    response.card_payments === "active" && 
                    response.transfers === "active"){

                      addStatusinDB(statusObj)
                    }else if(response.card_payments === "active" && 
                    response.transfers === "active"){
                      setActivated(true)
                      console.log("res",response)
                    }else{
                      setActivated(false)
                    }
                     
                   
                    
                  }

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
        if(response.data === "empty"){
          console.log("not restaurant data found")
        }else{
            storeData["restaurantInfo"] = response.data
            getConnectedAccountStatus()
            
        }
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

    const  ActivatedText = () =>{
      return <p className="mt-5 lead-2 text-warning">Your account is activated</p>
    }

    const  NotActivatedText = () =>{
      return <p className="mt-5 lead-2 text-danger">Your account is Inactive!</p>
    }

    const  WaitText = () =>{
      return <p className="mt-5 lead-2 text-warning">Please Wait...</p>
    }


  return (
    <div>
        <h1 className="mt-6 display-6">Bank Activation Status</h1>
        {
          activated === undefined ?
          (<WaitText/>):
          (false)  
          
        }
        {
          activated === true ?
          (<ActivatedText/>):(false)
        }
        {
          activated === false ?
          (<NotActivatedText/>):(false)
        }
        
    </div>
  )
}

export default BankActivationStatus