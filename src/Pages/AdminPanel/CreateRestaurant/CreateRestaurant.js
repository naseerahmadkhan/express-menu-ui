import React,{useState} from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Btn from '../../../Components/Btn/Btn';
const CreateRestaurant = (props) => {
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")


    const handleSubmit = () =>{
        const infObj={
            businessEmail:email,
            restaurantAddress:address,
            restaurantPhoneNo:phone

        }

        props.data(infObj)

    }

  return (
    <Container>
        <Row>
            <Col>
                <h1 className="display-7 mt-5 mb-5">Create Restaurant</h1>
            </Col>
        </Row>
        <Row className="mb-5">
            <Col xs={{span:12}} md={{span:6}}>
                <label>Business Email</label>
                <input type="email" className="input-field bg-style-admin muli-regular-dove-gray-22px" value={email} onChange={e=>setEmail(e.target.value)}/>
            </Col>
        </Row>

        <Row className="mb-5">
            <Col xs={{span:12}} md={{span:6}}>
                <label>Business Address</label>
                <input type="text" className="input-field bg-style-admin muli-regular-dove-gray-22px" value={address} onChange={e=>setAddress(e.target.value)}/>
            </Col>
        </Row>

        <Row className="mb-5">
            <Col xs={{span:12}} md={{span:6}}>
                <label>Business Contact No.</label>
                <input type="text" className="input-field bg-style-admin muli-regular-dove-gray-22px" value={phone} onChange={e=>setPhone(e.target.value)}/>
            </Col>
        </Row>

        <Row className="mb-5">
            <Col xs={{span:12}} md={{span:6}}>
            <Btn className={"express-btn"} name={"Save"} variant={"warning"}  customEvent={()=>handleSubmit()} />
            </Col>
        </Row>


    </Container>
  )
}

export default CreateRestaurant