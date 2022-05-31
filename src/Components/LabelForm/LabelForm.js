import React from 'react'
import {Form} from "react-bootstrap";
import "./LabelForm.css"
const LabelForm = (props) => {
    return (
        
        <Form.Label>{props.text}</Form.Label>
        
    )
}

export default LabelForm
