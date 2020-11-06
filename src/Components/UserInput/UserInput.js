import React from 'react'
import "./UserInput.css";
export default function UserInput(props) {
    return (
        <div>
            
            <input onChange={props.changed} defaultValue={props.newvalue}/>
         
        </div>
    )
}
