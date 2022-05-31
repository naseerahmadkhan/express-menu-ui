import React from 'react'
import {Row,Col} from "react-bootstrap";

import './inlineInputFieldWithLabel.css'
const inlineInputFieldWithLabel = (props) => {

   
    return (
        <Row className="form-row input-field bg-style-2 muli-regular-dove-gray-22px mt-5 d-flex justify-content-between">
          <Col className="form-group">
            <label className="mt-2">{props.title}</label>
          </Col>
          <Col className="form-group" md={{span:3}}>
            <input  type="text" className="no-border pt-1" placeholder={props.placeholder} value={props.value} onChange={e=>props.val(e.target.value)}/>
          </Col>
         
         
        </Row>
    )
}

export default inlineInputFieldWithLabel
