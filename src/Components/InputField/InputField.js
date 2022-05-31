import React from 'react'
import './InputField.css'
const InputField = (props) => {

   
    return (
        <div>
        <input
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      required={props.req}
      onChange={(e)=>props.val(e.target.value)}
      value={props.value}
    />
            
        </div>
    )
}

export default InputField
