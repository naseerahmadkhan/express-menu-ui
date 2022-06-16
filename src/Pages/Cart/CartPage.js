import React from 'react'
import {useCart } from "react-use-cart";

const CartPage = () => {
    const { items,emptyCart  } = useCart();
    // emptyCart();
  return (
    <div className='mt-6'>
        <h1 className='display-3'>Carts</h1>
        <p>{JSON.stringify(items)}</p>
    </div>
  )
}

export default CartPage