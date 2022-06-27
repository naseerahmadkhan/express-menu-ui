import React,{useState,useContext,useEffect} from 'react'
import {useCart } from "react-use-cart";
import { Container,Row,Col,Form } from "react-bootstrap";
  import Table from 'react-bootstrap/Table'
  import {XLg} from "react-bootstrap-icons";
  import Counter from "../../Components/Counter/Counter.js"
  import Btn from '../../Components/Btn/Btn';

const CartPage = () => {
    const { items,emptyCart,removeItem,updateItemQuantity, cartTotal,metadata,isEmpty } = useCart();
    const [showProceedBtn,setShowProceedBtn]=useState(true);
    const [pmtMethod,setpmtMethod]=useState("");
    const [paymentOption,setPaymentOption]= useState("")

    const PayCash = () =>{
      return(
      <div>
        <p className="lead-2 bg-warning">Pay in cash ${cartTotal}</p>
      </div>)
    }

    const PayCashORBank =     <div className="mt-5">
        <h1 className="display-7">Select the receiving payment method</h1>
        <Container>
        <Row>
          <Col sm={{span:5}}>

          
  
    <div  className="mb-3 mt-5">
      <Form.Check type="radio" id={`payment`} >
        <Form.Check.Input type="radio" name="payment"  onChange={e=>{setPaymentOption("cash")}} />
        <Form.Check.Label className="p-3">{`Receive CASH at counter`}</Form.Check.Label>
      </Form.Check>
      <Form.Check type="radio" id={`payment1`}>
        <Form.Check.Input type="radio" name="payment"  onChange={e=>setPaymentOption("bank")}/>
        <Form.Check.Label className="p-3">{`Setup Bank to receive`}</Form.Check.Label>
      </Form.Check>
      {/* <button onClick={e=>{e.preventDefault();console.log("clicked on",paymentOption)}}>check</button> */}
    </div>


          
    <Btn className={"express-btn"} variant={"warning"} name={"Submit"} customEvent={e=>console.log("11")}/>
          {/* <Btn className={"express-btn"} variant={"warning"} name={"Create Connected Bank Account"} customEvent={e=>GenerateStripeLink()}/> */}
          {/* <button onClick={()=> window.open("someLink", "_blank")}>text</button> */}
          </Col>
      </Row>
        </Container>
    </div>
    
  

     
     
   
      
    

    const proceedPmt = () =>{
      console.log(metadata)
      setShowProceedBtn(false)
      if((metadata.restInfo.hasOwnProperty('bankStatus')) && (metadata.restInfo.bankStatus)){
          console.log("pay via bank")
      }else{
        console.log("pay via cash")
        setpmtMethod("cash")
       
      }
    }
    const cartItem = items.map((item,ind)=>{
      return(
        <tr key={ind}>
        <td>{ind+1}</td>
        <td>{item.dishName}</td>
        <td>{item.size}</td>
        <td>{item.price * item.quantity}</td>
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


    useEffect(()=>{
      console.log("empty cart",isEmpty)
    },[])
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
      <td className="lead-2 fw-bold" colSpan={0}>Total</td>
      <td className="lead-2 fw-bold">${cartTotal}</td>
     </tr>
        </tbody>
      </Table>


      <Row className="mb-5">
        <Col className="" md={{span:4,offset:4}}>
        {
          ((showProceedBtn) && (!isEmpty))  ?(
            <button className="btn-warning w-100 p-3" onClick={()=>proceedPmt()}>
            <span className="h3">Proceed to payment</span>
          </button>
          ):(
            !(pmtMethod === "cash")?((isEmpty)?(false):(<PayCash/>)):( PayCashORBank )
          )
        }
        
          
          
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