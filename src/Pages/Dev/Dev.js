import React,{useState} from 'react'
import axios from 'axios';
import { Stepper,Step } from 'react-form-stepper';
const Dev = () => {

    let token = `this is sample token`
    async function postData(url = '',data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //   mode: 'cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            Authorization: token,
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

    const clickHandle = () =>{
        console.log("hi booss")
        const data={
            emailID:"abcd@def.com",
        };
        postData('https://wzrh4f0au8.execute-api.ap-southeast-2.amazonaws.com/x-dev/create-resturant', data)
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
        
    }
  return (
    <div className="mt-6">

        <h1 className="h1">Devs</h1>
        <Stepper activeStep={1}>
  <Step label="Children Step 1" />
  <Step label="Children Step 2" />
  <Step label="Children Step 3" />
</Stepper>

        <button onClick={clickHandle}>test api</button>

    </div>
  )
}

export default Dev