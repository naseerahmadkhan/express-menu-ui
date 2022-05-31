import React,{useState} from 'react'
import Switch from "react-switch";
import "./SwitchBtn.css"
import { CheckLg} from 'react-bootstrap-icons';
const SwitchBtn = (props) => {
    const [checked, setChecked] = useState(props.isChecked);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    props.val(nextChecked)
  }

  
    return (
        <div>
        <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        offColor="#2B2B2B"
        onColor="#FFCB0C" //#FFCB0C
        offHandleColor="#FFCB0C"
        onHandleColor="#2B2B2B"
        height={36}
        width={76}
        handleDiameter={30}
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
        </div>
    )
}

export default SwitchBtn
