import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Pencil, TrashFill, CheckLg } from "react-bootstrap-icons";

const AddonList = (props) => {
  const [addonName, setAddonName] = useState(props.values.addonName);
  const [addonDesc, setAddonDesc] = useState(props.values.addonDesc);
  const [addonPrice, setAddonPrice] = useState(props.values.addonPrice);
  const [toggleSave, setToggleSave] = useState(false);

  const updateChanges = () => {
    setToggleSave(false);
    props.update(props.id, { addonName, addonDesc, addonPrice });
  };

  return (
    <div className="mt-5 " id={props.id}>
      <Row
        className="input-field bg-style-2 muli-regular-dove-gray-22px"
        id={props.id}
      >
        <Col className="form-group">
          {/* <input  type="text" className="no-border pt-md-2" placeholder="Size" name={`size-${props.id}`} onChange={e=>props.valSize(e.target.value)}/> */}
          <input
            type="text"
            className="no-border pt-md-2"
            placeholder="Addon Name.."
            value={addonName}
            onChange={(e) => setAddonName(e.target.value)}
            disabled={toggleSave ? false : true}
          />
        </Col>
      </Row>
      <Row className="input-field bg-style-2 muli-regular-dove-gray-22px">
        <Col className="form-group">
          {/* <input  type="text" className="no-border mt-md-2" placeholder="$0" name={`price-${props.id}`} onChange={e=>props.valPrice(e.target.value)}/> */}
          <input
            type="text"
            className="no-border pt-md-2"
            placeholder="Addon Desc..."
            value={addonDesc}
            onChange={(e) => setAddonDesc(e.target.value)}
            disabled={toggleSave ? false : true}
          />
        </Col>
      </Row>
      <Row className="input-field bg-style-2 muli-regular-dove-gray-22px">
        <Col className="form-group">
          {/* <input  type="text" className="no-border mt-md-2" placeholder="$0" name={`price-${props.id}`} onChange={e=>props.valPrice(e.target.value)}/> */}
          <input
            type="text"
            className="no-border pt-md-2"
            placeholder="Addon Price..."
            value={addonPrice}
            onChange={(e) => setAddonPrice(e.target.value)}
            disabled={toggleSave ? false : true}
          />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mt-4">
        <Col className=" d-flex justify-content-center">
          <button onClick={(e) => props.del(props.id)}>
            <TrashFill size={24}/>
          </button>
        </Col>

        <Col className="d-flex justify-content-center">
          {toggleSave ? (
            <button onClick={updateChanges}>
              <CheckLg size={24}/>
            </button>
          ) : (
            <button onClick={() => setToggleSave(true)}>
              <Pencil size={24}/>
            </button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AddonList;
