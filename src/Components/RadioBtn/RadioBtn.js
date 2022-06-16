import React from 'react';
import "./Radio.css"
const RadioBtn = (props) => {
  return <div className='border border-secondary p-3 mb-3 border-3'>
      <input type="radio" className="form-check-input" value={props.val} name={props.name} checked={props.checked}/>
      <label className="h3 ml-4 mt-2">{props.label}</label>
      


  </div>;
};

export default RadioBtn;

