import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import { Plus, Pencil, Trash2Fill } from "react-bootstrap-icons";

const MenuItem = (props) => {
  return (
    <Row >
              <Col md={{ offset: 1, span: 10 }}>
                <div className="d-flex justify-content-around nova-card mt-3 ">
                  <button
                    className=""
                    onClick={() => props.handleMenuClick(props.index)}
                  >
                    {props.data}
                  </button>

                  {/* <button>
                    <Pencil
                      size={16}
                      id={index}
                      onClick={() => navigate(`/dashboard/modify-menu/${index}`)}
                    />
                  </button> */}


                  <button>
                    <Pencil
                      size={16}
                      id={props.index}
                      onClick={() => props.editMenuById(props.index)}
                    />
                  </button>


                  <button>
                    <Trash2Fill
                      size={16}
                      id={props.index}
                      onClick={() => props.delMenuById(props.index)}
                    />
                  </button>
                </div>
              </Col>
            </Row>
  )
}

export default MenuItem