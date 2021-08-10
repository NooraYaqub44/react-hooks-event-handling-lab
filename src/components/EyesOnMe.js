// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function handleClick(event){
        if (event === "focus"){
            console.log()
        } else if(event=== "blur") {
           
        }

    }
    return (
        <div>
            <button onFocus={()=>console.log("Good!") }
                    onBlur={()=> console.log("Hey! Eyes on me!")}>
                    Eyes on me
                    </button>
        </div>
    )
}

export default EyesOnMe
