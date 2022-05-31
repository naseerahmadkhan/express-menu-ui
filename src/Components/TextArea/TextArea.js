import React from 'react'
import "./textarea.css"
const TextArea = (props) => {
    return (
        <div>
        <textarea className={props.className} name={props.name} placeholder={props.placeholder} onChange={(e)=>props.val(e.target.value)} value={props.value}></textarea>
        </div>
    )
}

export default TextArea
