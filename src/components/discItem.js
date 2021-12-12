import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DiscItem = (props) => {
    const handleClick = () => {
        props.setCurrent(props.from);
        window.localStorage.setItem("currentDisc", JSON.stringify(props.from))
    };
    console.log(props)
    return(
        <div className="disc-item" onClick={handleClick}>
            <div className="picture">

            </div>
            <div className="name">  
                <button className="styledButton">{props.from}</button>
            </div>
        </div>
    )
}

export default DiscItem;