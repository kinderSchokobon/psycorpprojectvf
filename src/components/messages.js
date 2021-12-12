import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {BsFillChatLeftDotsFill, BsFillChatLeftTextFill} from "react-icons/bs";
import styled from "styled-components";
import DiscussionContent from "./DiscussionContent";
import DiscItem from "./discItem";
import axios from "axios";
import {BsFillPlusCircleFill} from "react-icons/bs";

const Messages = (props) => {
    const handleClick = () => {
        console.log("click")
    };
    const user = props.user;
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
    const [fdata, setFdata] = useState();
    const [ready, setReady] = useState(false);
    async function getData(user){
        let final = [];
        let data = await axios.get("http://localhost:3000/messages/")
        .then(
            response=>{
                return(response.data);
            }
        )
        data.forEach((item) => {
            if (item.from === props.user.name || item.to === props.user.name){
                final.push(item);
            }
        });
        setFdata(final)
        return(final)
    };
    useEffect(() => {
        getData();
    }, []);
    let list = [];
    useEffect(async() => {
        console.log("test")
        let data = await axios.get("http://localhost:3000/users/")
            .then((res) => {console.log(res); window.localStorage.setItem("userData", JSON.stringify(res))})
    }, [])
    const [ready2, setReady2] = useState(false);
    const [current, setCurrent] = useState(JSON.parse(window.localStorage.getItem("currentDisc")));
    const refresh = (e) => {
        e.preventDefault();
        window.location.reload(false);
    }
    return(
        <div className="messages">
            <div className="conv bg-dark">
                <div className="header bg-dark"><BsFillChatLeftTextFill className="chat-icon"></BsFillChatLeftTextFill><div className="pad">Conversations  <StyledLink to="/addDisc"><div className="add-discussion btn btn-primary">+</div></StyledLink></div></div>
                <div className="disc">
                    {useEffect(() => {
                        if (fdata !== undefined){
                            setReady2(true)
                        }
                    }, [fdata])}
                    {ready2 ? (fdata.filter((val)=> {return(val)}).map((val) => {if (val.from === props.user.name && list.indexOf(val.to) === -1){list.push(val.to);return (<DiscItem from={val.to} current={current} setCurrent={setCurrent}/>)} else if(val.to === props.user.name && list.indexOf(val.from) === -1){list.push(val.from);return (<DiscItem from={val.from} current={current} setCurrent={setCurrent}/>)}})):(<div></div>)}
                </div>
            </div>
            <div className="sep"></div>
            <div className="mess bg-dark">
            {useEffect(() => {
                    if (fdata !== undefined){
                        setReady(true)
                    }
                }, [fdata])}
                {ready ? (<DiscussionContent user={props.user} data={fdata} current={current}/>): (<div></div>)}
            </div>
        </div>
    )
}

export default Messages;