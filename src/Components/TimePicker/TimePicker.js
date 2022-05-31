import React,{useState} from 'react'
import TimePickerReact from 'react-bootstrap-time-picker';
import  "./TimePicker.css"
const TimePicker = (props) => {
    const [time, setTime] = useState(props.default || 3600)
    const handleMe = (e)=>{
        setTime(e)
        props.value(e)
    }
    return (
        <div>
        <TimePickerReact className="input-field bg-style-time-picker muli-regular-dove-gray-22px" name={props.name} start="01:00" end="24:00" step={30} 
        value={time} onChange={handleMe}/>
        </div>
    )
}

export default TimePicker
