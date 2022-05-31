import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import "./Btn.css"
const Btn = (props) => {
    return (
        <div className="d-grid gap-2">
            <Button id={props.id} className={props.className} style={{width:props.width, height:props.height}} variant={props.variant} size="lg" type={props.type} onClick={props.customEvent}>{props.name}</Button>
        </div>
    )
}

export default Btn
