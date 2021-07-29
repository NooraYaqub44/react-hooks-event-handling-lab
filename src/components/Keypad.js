// Code Keypad Component Here
import React from 'react'

export default function () {
    function hanldeChange(event){
        console.log(`${event.target.password}`)
    }
    return (
        <div>
            <input type="password" onChange={(hanldeChange)=>{console.log("Entering password...")}}></input>
            
        </div>
    )
}

