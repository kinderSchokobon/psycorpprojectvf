import react, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {BiCaretDown} from "react-icons/bi";
import {ThemeContext, themes} from './themeContext';
import logo from "../img/logo.svg";

const Navbar = (props) => {
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
    `;
    const [current, setCurrent] = useState(2);
    const [style1, setStyle1] = useState(["link-div", "btn", "btn-primary"].join(" "));
    const [style2, setStyle2] = useState(["link-div", "btn", "btn-primary"].join(" "));
    const [style3, setStyle3] = useState(["link-div", "btn", "btn-primary"].join(" "));
    const [style4, setStyle4] = useState(["link-div", "btn", "btn-primary"].join(" "));
    const handleClick1 = (e, current) => {
        if (current !== 1){
            setStyle1([style1, "current"].join(" "));
            console.log(style1);
            setStyle2(["link-div", "btn", "btn-primary"].join(" "));
            setStyle3(["link-div", "btn", "btn-primary"].join(" "));
            setStyle4(["link-div", "btn", "btn-primary"].join(" "));
            setCurrent(1)
        }
    }
    const handleClick2 = (e, current) => {
        if (current !== 2){
            setStyle2([style2, "current"].join(" "))
            console.log(style1)
            setStyle3(["link-div", "btn", "btn-primary"].join(" "));
            setStyle4(["link-div", "btn", "btn-primary"].join(" "));
            setStyle1(["link-div", "btn", "btn-primary"].join(" "));
            setCurrent(2)
        }
    }
    const handleClick3 = (e, current) => {
        if (current !== 3){
            setStyle3([style3, "current"].join(" "));
            setStyle2(["link-div", "btn", "btn-primary"].join(" "));
            setStyle1(["link-div", "btn", "btn-primary"].join(" "));
            setStyle4(["link-div", "btn", "btn-primary"].join(" "));
            setCurrent(3)
        }
    }
    const handleClick4 = (e, current) => {
        if (current !== 4){
            setStyle4([style3, "current"].join(" "));
            setStyle2(["link-div", "btn", "btn-primary"].join(" "));
            setStyle1(["link-div", "btn", "btn-primary"].join(" "));
            setStyle3(["link-div", "btn", "btn-primary"].join(" "));
            setCurrent(4)
        }
    };
    return (
        <div>
            <div className="navglobal">
                <div className="logo navbar">
                    <Link to="/"><img className="applogo" src={logo}/></Link>
                </div>
                <div className="navcontainer2 navbar">
                <div className={style4}><StyledLink to ="/" onClick={handleClick4} className="nav-item">HomePage</StyledLink></div>
                </div>
                <div className="navcontainer navbar">
                    {(props.user !== undefined) ? (<div className={style1}><StyledLink to ="/messages" onClick={handleClick1} className="nav-item">Contact</StyledLink></div>) : (<div></div>)}
                    <div className={style2}><StyledLink to ={(props.user !== undefined) ? ("/logout") : ("/signin")} onClick={handleClick2} className="nav-item">{(props.user !== undefined) ? (props.user.name): ("Sign in")}</StyledLink></div>
                    <div className={style3}><StyledLink to ="/posts" onClick={handleClick3} className="nav-item">Posts</StyledLink></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;