import React,{useState,useContext} from 'react'
import { Row,Col,Form } from "react-bootstrap";
import Btn from '../../../Components/Btn/Btn';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { AppContext } from '../../../App';
const Terms = (props) => {

  const [isAccepted,sestIsAccepted] = useState(false)
    const storeData = useContext(AppContext);

    //Notify popup-------------------------
  const notify = (msg) =>
  toast.warn(msg, {
    icon: "ℹ️",
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
//-------------------------------------


    const handleSubmit = (e) =>{
      //calling parent func with two args
      // e.preventDefaults()
      isAccepted?(props.isTermAccepted("terms",isAccepted)):(notify(`Please accept the terms and conditions!`))
    }
   

  return (
    <div>
        <h1 className="display-6">Terms and Conditions</h1>
        <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget metus nulla. Donec quis fermentum ex. Nam vitae varius nibh. Aenean at iaculis nisi. Quisque pharetra aliquam euismod. Aliquam eget finibus quam, in semper odio. Aenean mollis scelerisque justo, fringilla viverra lorem facilisis quis. Nullam faucibus congue facilisis. Fusce finibus sed lectus ut aliquet. Ut blandit convallis aliquet. Aliquam erat volutpat. Ut vitae tempus dolor. Aenean at luctus justo, ut dapibus massa. In hac habitasse platea dictumst. Sed congue eleifend urna sit amet finibus. Sed varius ornare scelerisque. </p>

        
        <Form.Check 
        className="pt-5"
        type="checkbox"
        id={`Checkbox_accept_terms`}
        label={`I accept the above stated terms and conditions`}
        onChange={e=>sestIsAccepted(e.target.checked)}
      />

      <Row>
          <Col sm={{span:6,offset:3}}>
          <Btn className={"express-btn"} variant={"warning"} name={"I Agree"} customEvent={e=>handleSubmit(e)}/>
          </Col>
      </Row>
      



    </div>
  )
}

export default Terms