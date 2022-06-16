import React,{useState} from 'react'
import {useCart } from "react-use-cart";
import {
  Row,
  Col,
  Container,
  Card,
  
  Form
  } from "react-bootstrap";
  import Table from 'react-bootstrap/Table'
  import {XLg} from "react-bootstrap-icons";
  import Counter from "../../Components/Counter/Counter.js"

const CartPage = () => {
    const { items,emptyCart,removeItem,updateItemQuantity  } = useCart();
    let sum = 0
    // emptyCart();
    const cartItem = items.map((item,ind)=>{
      sum = sum+Number(item.price)
      return(
        <tr key={ind}>
        <td>{ind+1}</td>
        <td>{item.dishName}</td>
        <td>{item.size}</td>
        <td>{item.price}</td>
        <td>
        <Counter 
        inc={()=>updateItemQuantity(item.id, item.quantity + 1)} 
        dec={()=>updateItemQuantity(item.id, item.quantity - 1)} 
        val={item.quantity}/>
        </td>
        <td><button className="btn-danger w-25" onClick={()=>removeItem(item.id)}><XLg/></button></td>
      </tr>

      )
    })
  return (
    <Container fluid className="mt-6">
      <h1 className="display-3 mb-5">Cart</h1>
      {/* <p>{JSON.stringify(items)}</p> */}
      <Table hover variant="light">
        <thead>
          <tr className="lead fw-bold">
            <th>#</th>
            <th>Name</th>
            <th>Size</th>
            <th>Prices $</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {cartItem}
        <tr>
        <td></td>
        <td></td>
      <td className="lead-2 fw-bold" colSpan={1}>Total</td>
      <td className="lead-2 fw-bold">{sum}</td>
     </tr>
        </tbody>
      </Table>


      <Row className="mb-5">
        <Col className="text-center" md={{span:4,offset:4}}>
          <button className="btn-warning w-100 p-3">
            <span className="h3">Proceed to payment</span>
          </button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" md={{span:4,offset:4}}>
          <button className="btn-success w-100 p-3" onClick={emptyCart}>
            <span className="h3">Clear Cart</span>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage