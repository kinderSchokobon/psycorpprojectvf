import react, { createRef } from "react";
import { useState, useEffect, useRef } from "react";
import MessageUnit from "./messageUnite";
import axios from "axios";

const DiscussionContent = (props) => {
    const messagesEndRef = createRef(null);
    const [user, setUser] = useState(props.user);
    const [data, setData] = useState(props.data);
    const [message, setMessage] = useState();
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView(
            {
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            })
        }
      })
    const handleChange = (e) =>{
        setMessage(e.target.value);
        console.log(message);
    };
    const refresh = () => {
        window.location.reload(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message !== "" && message !== undefined && props.current !== undefined && props.current !== ""){
            const Message = {
                content: message,
                image: "none",
                from: props.user.name,
                to: props.current
            };
            console.log(Message);
            axios.post("http://localhost:3000/messages/add", Message)
                .then(res => console.log(res.data))
            window.location.reload(false);
        }
    }
    return(
        <div className="discussion-content bg-dark">
            <div className="refresh btn btn-primary" onClick={refresh}>Refresh</div>
            <div className="discussion-header bg-dark">
                {props.current}
            </div>
            <div className="discussion-render">                
                {data.filter((val)=> {if (val.from === props.current || val.to === props.current){return(val)}}).map((val) => {return (<MessageUnit content={val.content} from={val.from} user={props.user}/>)})}
                <div ref={messagesEndRef} className="end-ref"/>
            </div>
            {(props.current === undefined || props.current === null || props.current === "") ? (<div></div>) : (<div className="discussion-input bg-dark">
                <input className="discussion-inputbar form-control" type="text" onChange={handleChange}></input><div className="btn btn-primary submit" onClick={handleSubmit}>Send</div>
            </div>)}
        </div>
    )
}

export default DiscussionContent;