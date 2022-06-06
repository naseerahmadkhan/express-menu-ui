import React,{useState} from "react";
import { Row, Col, Container} from "react-bootstrap";

import IntputField from "../../../Components/InputField/InputField";
import Btn from "../../../Components/Btn/Btn";
import LabelForm from "../../../Components/LabelForm/LabelForm";
import TextArea from "../../../Components/TextArea/TextArea";


const CreateCategory = (props) => {

  
    return (
        <div>
        <Container className="mt-5 ">
        <Row>
        <Col>
        <LabelForm text={"Category Name"} />
                  <IntputField
                    className={
                      "input-field bg-style-admin muli-regular-dove-gray-22px"
                    }
                    type={"text"}
                    name={"category_name"}
                    placeholder={""}
                    val={(v)=>props.setCatName(v)}
                    req={true}
                  />
        
        </Col>
        
        </Row>

        <Row className="mt-5">
                  <LabelForm text={"Category Description"} />
                  <TextArea className={"bg-style2 muli-regular-dove-gray-22px"} name={"category-desc"} val={(v)=>props.setCatDesc(v)}/>
                </Row>

                <Row className="mt-1 d-flex justify-content-between" >
            <Col md={4}><Btn className={"express-btn"} name="Cancel" customEvent={props.hideCat} variant={"warning"} /></Col>
            <Col md={4}><Btn className={"express-btn"} name="Save" customEvent={props.submit} variant={"warning"} /></Col>
            </Row>
        </Container>
        </div>
    )
}

export default CreateCategory
