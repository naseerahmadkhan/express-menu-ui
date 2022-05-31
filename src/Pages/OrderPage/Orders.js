import React,{useEffect, useState} from 'react';
import RestList from "./RestList";
import RestDishes from './RestDishes';
import Drinks from "./Drinks"
const Orders = () => {

    const [showRestDishes, setShowRestDishes] = useState(false)
    const [showDrinks, setShowDrinks] = useState(false)

  return (
      <div>
      {
          showRestDishes?
          (
              showDrinks?
              (<Drinks/>):
              (<RestDishes clickHandle={(e)=>setShowDrinks(e)} />)
              ):
          (<RestList clickHandle={(e)=>setShowRestDishes(e)}/>)

      }
      </div>
  );
};

export default Orders;
