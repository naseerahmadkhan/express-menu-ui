import React,{useState} from 'react';
import {
    Row,
    Col,
    Container,
    
  } from "react-bootstrap";
  import { PlusCircleFill, DashCircleFill } from "react-bootstrap-icons";

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return <Container fluid className="">
    <Row>
        <Col>
        <button onClick={()=>setCounter(prev => prev-1)} 
        style={{background:"transparent",
border: "0px none"}}>
        <DashCircleFill color="#ffcb0c" size={42}  />
        </button>
        
        <span className="lead-2 m-4">{counter}</span>
        <button onClick={()=>setCounter(prev => prev+1)} 
        style={{background:"transparent",
border: "0px none"}}>
        <PlusCircleFill color="#00CD70"  size={42} />
        </button>
        </Col>
    </Row>
  </Container>;
};

export default Counter;
