import react from "react";
import { useState, useEffect } from "react";

const MessageUnit = (props) =>{
    return(
        <div className={(props.from === props.user.name) ? ("message-unit user"): ("message-unit else")}>
            <div className="content bg-dark">{props.content}</div>
        </div>
    )
}

export default MessageUnit;