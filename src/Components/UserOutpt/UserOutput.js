import React from 'react';
import "./UserOutput.css";

export default function UserOutput(props) {
    const style={
        color:"red",
        fontStyle:"italic"
    }
    const paraStyle={
        fontSize:"20px",

    }
    return (
      
        <div className="output">

            <h1>My name is<span style={style}> {props.name} </span></h1>
            <p style={paraStyle}>I am front end developer</p>
        </div>
    )
}
