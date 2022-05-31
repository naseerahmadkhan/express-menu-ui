import React from 'react'
import { Row, Col, Container,Form } from "react-bootstrap";
import LabelForm from '../LabelForm/LabelForm';
import InputField from '../InputField/InputField';
import Btn from '../Btn/Btn';
import { Plus, ClockFill} from 'react-bootstrap-icons';

const AddonInput = (props) => {
  return (
      <>
      <Row className="mt-5">
                      <LabelForm text={"Addon Name"} />
                      <InputField
                        type={"text"}
                        className={
                          "input-field bg-style-main muli-regular-dove-gray-22px"
                        }
                        name={"dish-name"}
                        placeholder={"Addon Name..."}
                        req={true}
                        val={(v)=>props.setAddonName(v)}
                      />
                      </Row> 

                      <Row className="mt-4">
                      <LabelForm text={"Addon Description"} />
                        <InputField className={"input-field bg-style-main muli-regular-dove-gray-22px"} name={"addon-desc"} placeholder={"Addon Desc..."}
                          val={(v)=>props.setAddonDesc(v)}
                        />
                      </Row>

                      
                      <Row className="mt-5">
                      <LabelForm text={"Addon Price"} />
                      <InputField
                        type={"text"}
                        className={
                          "input-field bg-style-main muli-regular-dove-gray-22px"
                        }
                        name={"addon-price"}
                        placeholder={"$0"}
                        req={true}
                        val={(v)=>props.setAddonPrice(v)}
                      />
                      </Row>

                      <Row className="mt-5">
                      <Btn className={"white-btn"} name={<Plus size={40}/>} customEvent={()=>props.addons()}/>
                      </Row>

      </>
    
  )
}

export default AddonInput