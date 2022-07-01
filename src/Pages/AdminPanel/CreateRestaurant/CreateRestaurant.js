import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Btn from "../../../Components/Btn/Btn";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CreateRestaurant = (props) => {
  const [restName, setRestName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [imgData, setImgData] = useState();
  const [imgUrl, setImgUrl] = useState();

  //Notify popup-------------------------
  const notify = (msg) =>
    toast.warn(msg, {
      icon: "ℹ️",
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //-------------------------------------

  const handleSubmit = () => {
    const infObj = {
      restaurantName: restName,
      businessEmail: email,
      restaurantAddress: address,
      restaurantPhoneNo: phone,
      restaurantImg: imgUrl,
    };

    props.data(infObj);
  };

  const changeImg = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setImgData(reader);
    console.log(reader);
    reader.onload = function () {
      console.log("reader result", reader.result);
      setImgData(reader.result);
    };
  };

  const uploadImg = async () => {
    const api = process.env.REACT_APP_IMG_UPLOAD_API;
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const file = { file: imgData };
    // console.log("file",file)

    await axios
      .post(api, file, config)
      .then((response) => {
        console.log(response.data);
        setImgUrl(response.data.Location);
        console.log("Final URL:::::", response.data.Location);
        notify("image is uploaded successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-7 mt-5 mb-5">Create Restaurant</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <label>Restaurant Name</label>
          <input
            type="email"
            className="input-field bg-style-admin muli-regular-dove-gray-22px"
            value={restName}
            onChange={(e) => setRestName(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <label>Restaurant Email</label>
          <input
            type="email"
            className="input-field bg-style-admin muli-regular-dove-gray-22px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <label>Restaurant Address</label>
          <input
            type="text"
            className="input-field bg-style-admin muli-regular-dove-gray-22px"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <label>Restaurant Contact No.</label>
          <input
            type="text"
            className="input-field bg-style-admin muli-regular-dove-gray-22px"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Col>
      </Row>

      <Row className={"mt-2"}>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          {/* <Btn className={"white-btn"} name={"Browse"} /> */}
          <Form.Group controlId="formFileLg" className="">
            <Form.Control
              type="file"
              size="lg"
              className="no-border bg-warning"
              onChange={(v) => changeImg(v)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <Btn
            className={"express-btn"}
            name="Upload Pic"
            variant={"warning"}
            customEvent={() => uploadImg()}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <Btn
            className={"express-btn"}
            name={"Save"}
            variant={"warning"}
            customEvent={() => handleSubmit()}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateRestaurant;
