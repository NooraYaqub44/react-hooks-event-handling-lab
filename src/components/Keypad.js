// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function handleChangeEvent(event) {
        console.log({event} ? "Entering password...": null);
        
    }
    return (
        <div>
            <input 
            type="password"  
            name="password"
            onChange={handleChangeEvent}
            placeholder="Enter your password"/>
        </div>
    )
}

export default Keypad
