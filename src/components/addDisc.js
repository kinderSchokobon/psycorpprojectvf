import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BsFillPersonFill, BsFillChatLeftTextFill} from "react-icons/bs";
import axios from "axios";

const AddDisc = (props) => {
    const StyledLink = styled(Link)`
    display: inline-block;
    position: relative;
    color:white;
    font-size: none;
    text-decoration: none;
    font-family: "Times New Roman", Times, serif;
    &:hover{
        color:white;
        text-decoration: none;
    }
    &:after{
        color:white;
        text-decoration: none;
    }
    `;
    const userData = JSON.parse(window.localStorage.getItem("userData")).data;
    let authorized2 = false;
    const [username, setUsername] = useState();
    const [message, setMessage] = useState();
    const [authorized, setAuthorized] = useState(false)
    const onChangeUsername = (e)=> {
        e.preventDefault();
        setUsername(e.target.value);
    }
    const onChangeMessage = (e)=> {
        e.preventDefault();
        setMessage(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (message !== "" && message !== undefined && username !== undefined && username !== ""){
            for (let i = 0; i < userData.length; i++){
                if (userData[i].username === username) {
                    authorized2 = true
                }
            }
            if (authorized2){
                const Message = {
                    content: message,
                    image: "none",
                    from: props.user.name,
                    to: username,
                };
                console.log(Message);
                axios.post("http://localhost:3000/messages/add", Message)
                    .then(res => console.log(res.data))
                window.location.reload(false);
                window.localStorage.setItem("currentDisc", JSON.stringify(username))
                window.location.href = "/messages";
            }
            else{
                console.log("error")
            }
        }
    }
    return (
            <form className="login" onSubmit={onSubmit}>
                <div className="container1">
                    <h1 className="title">New Discussion</h1>
                    <hr style={{height: 1, opacity: 1,}}/>
                    <div className="inputs">
                        Username : <div className="outline"><div className="icon-bg"><BsFillPersonFill className="icon" size="30"></BsFillPersonFill></div><input className="text input no-outline" type="text" onChange={onChangeUsername}/></div><br/><br/>
                        Your message : <div className="outline"><div className="icon-bg"><BsFillChatLeftTextFill className="icon" size="30"></BsFillChatLeftTextFill></div><input className="text input no-outline" type="text" onChange={onChangeMessage}/></div><br/><br/>
                        <button type="submit" className="btn btn-primary">Start Discussion</button><br/><br/>
                    </div>
                </div>
            </form>
    )
}

export default AddDisc;