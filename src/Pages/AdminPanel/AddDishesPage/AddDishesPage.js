import React, { useState, useEffect,useContext } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import LabelForm from "../../../Components/LabelForm/LabelForm";
import InputField from "../../../Components/InputField/InputField";
import Btn from "../../../Components/Btn/Btn";
import { useNavigate } from "react-router-dom";
import TextArea from "../../../Components/TextArea/TextArea";
import SwitchBtn1 from "../../../Components/SwitchBtn2/SwitchBtn";
import ServingSizeField from "../../../Components/ServingSizeField/ServingSizeField";
import InlineSingleField from "../../../Components/inlineInputFieldWithLabel/inlineInputFieldWithLabel";
import { Plus, ClockFill } from "react-bootstrap-icons";
import { v4 as uuidv4 } from "uuid";
import "./AddDishesPage.css";
import AddonInput from "../../../Components/Addons/AddonInput";
import AddonList from "../../../Components/Addons/AddonList";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { AppContext } from '../../../App';


const AddDishesPage = (props) => {
  const navigate = useNavigate();
  const storeData = useContext(AppContext);
  const [showServingSizefields, setShowServingSizeFields] = useState(false);
  const [servingSizefieldsList, setServingSizefieldsList] = useState([]);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isPopular, setIsPopular] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [addOn, setAddOn] = useState(false);

  const [dishName, setDishName] = useState("");
  const [dishDesc, setDishDesc] = useState("");
  const [cookingTime,setCookingTime]=useState("")

  const [addonName, setAddonName] = useState("");
  const [addonDesc, setAddonDesc] = useState("");
  const [addonPrice, setAddonPrice] = useState(0);
  const [addOnList, setAddOnList] = useState([]);

  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const [stdDishPrice, setStdDishPrice] = useState();
  const [imgData,setImgData] = useState()
  const [imgUrl,setImgUrl] = useState()

  const mid = props.targetMenu.id;
  const cid = props.targetMenu.catindex;
  const foodMenuData = storeData.foodMenu

  const dishObj = showServingSizefields
    ? {
        dishName,
        dishDesc,
        cookingTime,
        addOn,
        isAvailable,
        isVegetarian,
        isVegan,
        isPopular,
        isGlutenFree,
        servingSizefieldsList,
        addOnList,
        imgUrl
      }
    : {
        dishName,
        dishDesc,
        cookingTime,
        stdDishPrice,
        addOn,
        isAvailable,
        isVegetarian,
        isVegan,
        isPopular,
        isGlutenFree,
        servingSizefieldsList,
        addOnList,
        imgUrl
      };

      const notify = (msg) =>  toast.warn(msg, {
        icon: "ℹ️",
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });    

  const deleteServingField = (index) => {
    let updated = [...servingSizefieldsList];
    updated.splice(index, 1);
    console.log("after deleted", updated);
    setServingSizefieldsList(updated);
  };

  const addServingField = () => {
    setServingSizefieldsList((prev) => [...prev, { size, price }]);
    setSize("");
    setPrice("");
    console.log("sizelist", servingSizefieldsList);
  };

  const updateServingField = (index, newValues) => {
    let updated = [...servingSizefieldsList];
    updated.splice(index, 1, newValues);
    setServingSizefieldsList(updated);
  };

  let addAddons = () => {
    setAddOnList((prev) => [...prev, { addonName, addonDesc, addonPrice }]);
    console.log("add ons", addOnList);
  };

  const updateAddonField = (index, newValues) => {
    let updated = [...addOnList];
    updated.splice(index, 1, newValues);
    setAddOnList(updated);
  };

  const deleteAddonField = (index) => {
    let updated = [...addOnList];
    updated.splice(index, 1);
    console.log("after deleted", updated);
    setAddOnList(updated);
  };

  const changeImg =(e) =>{

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    setImgData(reader)
    console.log(reader)
    reader.onload = function() {
      console.log("reader result",reader.result);
      setImgData(reader.result)
    }
  }

  const uploadImg = async()=>{

    const api = process.env.REACT_APP_IMG_UPLOAD_API;
    let config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const file={"file":imgData}
    // console.log("file",file)

       await axios
      .post(api,file,config)
      .then((response) => {
        console.log(response.data);
        setImgUrl(response.data.Location)
        console.log("Final URL:::::",response.data.Location);
        notify("image is uploaded successfully!")
        
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const loadMenuData = () =>{
    const token = storeData.token
    const api = process.env.REACT_APP_GET_FOOD_MENU_API;
    const data = {};
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .post(api, data, config)
      .then((response) => {
        console.log("fetch data.....", response.data);
        // sessionStorage.setItem("foodMenu", JSON.stringify(response.data));
        storeData["foodMenu"]=response.data
        console.log("foodMenuContext",storeData)

        
      })
      

      .catch((error) => {
        console.log("ERR!!!", error);
      })
     
  }  



  const handleSubmit = () => {
    const ids = props.targetMenu;
    console.log("index", ids);
    console.log("dish obj", dishObj);

    const data = storeData.foodMenu
    console.log("full data",data[ids.id].categories[ids.catindex].dishes.push(dishObj))
    // console.log("after insert",JSON.stringify(data))

        const api = process.env.REACT_APP_MODIFY_FOOD_MENU_API;
        const token = storeData.token

    let config = {
      headers: {
        'Authorization': token
      }
    }

        axios
      .post(api, data,config)
      .then((response) => {
        console.log(response.data);
        loadMenuData()
        notify("Data uploaded successfully!")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("receiving vals in add dish page", mid, cid);
    console.log("props", props.targetMenu.catindex);
  }, []);

  let stdPrice = (
    <Row className="mt-5">
      <LabelForm text={"Standard Price"} />
      <InputField
        type={"text"}
        className={"input-field bg-style-main muli-regular-dove-gray-22px"}
        name={"std-price"}
        placeholder={"$0"}
        req={true}
        val={(v) => setStdDishPrice(v)}
        value={stdDishPrice}
      />
    </Row>
  );

  let addons = (
    <AddonInput
      setAddonName={setAddonName}
      setAddonDesc={setAddonDesc}
      setAddonPrice={setAddonPrice}
      addons={addAddons}
    />
  );

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-6 mb-5 display-5">Dish Description</h1>
          </Col>
        </Row>

        <div className="d-flex  justify-content-center ">
          <div className="bg-buttery-white mr-2 w-100">
            <Row className="d-flex justify-content-end">
              <Col md={2}>
                <Btn
                  className={"express-btn"}
                  name={"Back"}
                  variant={"warning"}
                  customEvent={() => props.hideDishComp()}
                />
              </Col>
            </Row>

            <div>
              <Row>
                <Col>
                  <h2 className="h2">Food Menu</h2>
                </Col>
              </Row>
            </div>

            <div className="d-flex flex-column justify-content-center mt-3">
              <Row>
                <Col className="mt-3 mb-5" md={{ offset: 1, span: 10 }}>
                  <Row>
                    <Col>
                      <h2 className="h2">{foodMenuData[mid].menuName}</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4 className="h4">Description</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <p className="lead" style={{width:"100%"}}>
                      {foodMenuData[mid].menuDesc}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col className="bg-nova p-5" md={{ offset: 2, span: 8 }}>
                  <Row>
                    <Col>
                      <h2 className="h2">{foodMenuData[mid].categories[cid].categoryName}</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="lead">{foodMenuData[mid].categories[cid].categoryDesc}</p>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col md={{ offset: 2, span: 8 }}>
                      <Row className="mt-5">
                        <LabelForm text={"Dish Name"} />
                        <InputField
                          type={"text"}
                          className={
                            "input-field bg-style-main muli-regular-dove-gray-22px"
                          }
                          name={"dish-name"}
                          placeholder={""}
                          req={true}
                          val={(v) => setDishName(v)}
                        />
                      </Row>

                      <Row className="mt-4">
                        <LabelForm text={"Dish Description"} />
                        <Col md={12}>
                          <TextArea
                            className={"bg-style1 muli-regular-dove-gray-22px"}
                            name={"dish-desc"}
                            val={(v) => setDishDesc(v)}
                          />
                        </Col>
                      </Row>

                      <div className="mt-5 ">
                        <Row className="d-flex justify-content-around">
                          <Col md={8}>
                            <LabelForm text={"Add Serving Size"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setShowServingSizeFields(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      {showServingSizefields ? (
                        <Row className="mt-5">
                          <Row className="input-field bg-style-2 muli-regular-dove-gray-22px">
                            <Col sm={4}>
                              <input
                                type="text"
                                className="no-border bb-4 mt-md-2 pt-3"
                                name="size"
                                placeholder="e.g. small"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                              />
                            </Col>

                            <Col sm={3} className="d-flex flex-row">
                              <input
                                type="text"
                                className="no-border bb-4 mt-md-2 pt-3"
                                name="price"
                                placeholder="$30"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </Col>

                            <Col sm={4}>
                              {/* <Btn
                                className={"white-btn pt-xs-5"}
                                name={<Plus size={50} />}
                                variant={"info"}
                                customEvent={() => addServingField()}
                              /> */}
                              <button
                                className={""}
                                onClick={() => addServingField()}
                              >
                                <Plus size={50} />
                              </button>
                            </Col>
                          </Row>
                          <Row></Row>
                        </Row>
                      ) : (
                        false
                      )}

                      {showServingSizefields
                        ? servingSizefieldsList.map((itm, index) => {
                            let newkey = uuidv4();

                            const item = (
                              <div key={newkey}>
                                <ServingSizeField
                                  id={index}
                                  values={itm}
                                  del={(e) => deleteServingField(e)}
                                  update={updateServingField}
                                />
                              </div>
                            );
                            return item;
                          })
                        : stdPrice}

                      <Row className="mt-5">
                        <Col>
                          <InlineSingleField
                            title={"Cooking Time (mins.)"}
                            placeholder={"30"}
                            value={cookingTime}
                            val={(v)=>setCookingTime(v)}
                          />
                        </Col>
                      </Row>

                      <div className="mt-5 ">
                        <Row className="d-flex">
                          <Col md={8}>
                            <LabelForm text={"Gluten Free"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setIsGlutenFree(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      <div className="mt-5 ">
                        <Row className="d-flex">
                          <Col md={8}>
                            <LabelForm text={"Popular"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setIsPopular(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      <div className="mt-5 ">
                        <Row className="d-flex">
                          <Col md={8}>
                            <LabelForm text={"Vegan"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setIsVegan(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      <div className="mt-5 ">
                        <Row className="d-flex">
                          <Col md={8}>
                            <LabelForm text={"Vegetarian"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setIsVegetarian(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      <Row className="mt-5">
                        <LabelForm text={"Dish Picture"} />
                      </Row>

                      <Row className={"mt-2"}>
                        {/* <Btn className={"white-btn"} name={"Browse"} /> */}
                        <Form.Group controlId="formFileLg" className="">
                          <Form.Control
                            type="file"
                            size="lg"
                            className="no-border bg-warning"
                            onChange={(v) => changeImg(v)}
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Col md={{}}><Btn
                    className={"express-btn"}
                    name="Upload"
                    variant={"light"}
                    customEvent={() => uploadImg()}
                  /></Col>
                      </Row>

                      <div className="mt-5 ">
                        <Row className="d-flex">
                          <Col md={8}>
                            <LabelForm text={"Available"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setIsAvailable(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      <div className="mt-5 ">
                        <Row className="d-flex">
                          <Col md={8}>
                            <LabelForm text={"Add Ons"} />
                          </Col>
                          <Col md={4}>
                            <SwitchBtn1
                              isChecked={false}
                              val={(v) => setAddOn(v)}
                            />
                          </Col>
                        </Row>
                      </div>

                      {addOn ? addons : false}

                      {addOn
                        ? addOnList.map((itm, index) => {
                            let newkey = uuidv4();

                            const item = (
                              <div key={newkey}>
                                <AddonList
                                  id={index}
                                  values={itm}
                                  del={(e) => deleteAddonField(e)}
                                  update={updateAddonField}
                                />
                              </div>
                            );
                            return item;
                          })
                        : false}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="mt-1 d-flex justify-content-between">
                <Col md={4}>
                  <Btn
                    className={"express-btn"}
                    name="Back"
                    variant={"warning"}
                    customEvent={() => props.hideDishComp()}
                  />
                </Col>
                <Col md={4}>
                  <Btn
                    className={"express-btn"}
                    name="Submit"
                    variant={"warning"}
                    customEvent={() => handleSubmit()}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddDishesPage;
