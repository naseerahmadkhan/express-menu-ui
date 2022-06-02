import React,{useState,useContext,useEffect} from 'react'
import { BrowserRouter,Route, Routes,Navigate } from 'react-router-dom';
import { AccountContext } from '../Auth/Accounts'
import { AppContext } from '../App';
import { isJwtExpired } from 'jwt-check-expiration';



const RequireAuth = ({ children, redirectTo }) => {
    
    const storeData = useContext(AppContext);
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);
    const [isAuth, setIsAuth] = useState("");

    function getAuth(){
    //    if(isJwtExpired(storeData.token)){
    //      console.log("expired")
    // }else{
    //   console.log("active")
    //   // navigate("/login");
    // }
        return status
      }

      useEffect(()=>{
        // console.log("check route")

        getSession()
        .then(session => {
          console.log('Session:>>>', session.idToken.jwtToken);
          setStatus(true);
          storeData.token = session.idToken.jwtToken
          setIsAuth()
          if(!(isJwtExpired(session.idToken.jwtToken))){
            console.log("token is not expired")
            setIsAuth(true)
          }else{
            setIsAuth(false)
          }
          
        })
        .catch((e)=>{
          console.log("e",e)
          if(e ===undefined){
            console.log("found err")
            setIsAuth(false)
          }
        });

        return () => {
       };


        
     },[status])
    //  let isAuthenticated = getAuth();
    
    if(isAuth ===""){
      return <h1>Loading...</h1>
    }else if( isAuth === true){
      return children
    }else{
      return <Navigate to={redirectTo}/>
    }

  // return isAuth? (children) : (<Navigate to={redirectTo}/>) ;
  
}

export default RequireAuth