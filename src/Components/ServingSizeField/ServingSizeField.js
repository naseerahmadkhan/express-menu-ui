import React,{useEffect, useState} from 'react'
import {Row,Col} from "react-bootstrap";
import Btn from "../Btn/Btn"
import "./ServingSizeField.css"
import {X, Save,Pencil, TrashFill,CheckLg} from 'react-bootstrap-icons';
const ServingSizeField = (props) => {
  const [size,setSize] = useState(props.values.size)
  const [price,setPrice]= useState(props.values.price)
  const [toggleSave,setToggleSave] = useState(false)


  const updateChanges = () =>{
    setToggleSave(false)
    props.update(props.id,{size,price})
  }

  useEffect(()=>{
  },[]);
    
    return (
      <div className="mt-5 d-flex justify-content-between"  id={props.id} >
        <Row className="input-field bg-style-2 muli-regular-dove-gray-22px" id={props.id}>
          <Col md={{span:6}} className="form-group">
            {/* <input  type="text" className="no-border pt-md-2" placeholder="Size" name={`size-${props.id}`} onChange={e=>props.valSize(e.target.value)}/> */}
            <input  type="text" className="no-border pt-md-2" placeholder="Size" value={size}  onChange={e=>setSize(e.target.value)} disabled={toggleSave?(false):(true)}/>
          </Col>
          <Col md={{span:3}}  className="form-group">
            {/* <input  type="text" className="no-border mt-md-2" placeholder="$0" name={`price-${props.id}`} onChange={e=>props.valPrice(e.target.value)}/> */}
            <input  type="text" className="no-border pt-md-2" placeholder="$0"  value={price} onChange={e=>setPrice(e.target.value)} disabled={toggleSave?(false):(true)} />
          </Col>
          <Col md={{span:1}} sm={{span:1,offset:1}} className="form-group">
          <button  onClick={e=>props.del(props.id)}><TrashFill/></button>
        </Col>

        <Col md={{span:1}} sm={{span:1}} className="form-group">
        {
          (toggleSave?(<button onClick={updateChanges}><CheckLg/></button>):(<button onClick={()=>setToggleSave(true)} ><Pencil/></button>))
        }
        </Col>
         
        </Row>
        </div>

        
    )
}

export default ServingSizeField
