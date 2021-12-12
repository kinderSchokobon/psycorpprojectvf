import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carroussel2 from "./carroussel2";
import {BsFillCaretLeftFill} from "react-icons/bs";
import flat2 from "../img/flat2.png";

const Homepage = (props) => {    
    const [active, setActive] = useState(false);
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
    return (
        <div className="home">
            <div className="former carroussel slide">
                <Carroussel2 user={props.user} className="carousel"/>
                <div className="centered" >
                    <div className="psycorp">
                        What is Psy Corp ?
                    </div>
                    <div className="designedby">
                        Website designed by @thithi19
                    </div>
                    <hr style={{
                        color: "white",
                        backgroundColor: "white",
                        height: 1,
                        opacity: 0.8,
                    }}/>
                    <div style={{fontSize: 25, marginTop: 30}} className="btn btn-primary">
                        <StyledLink to="/signin">Get started</StyledLink>
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="contain">
                    <hr style={{
                        color: "red",
                        backgroundColor: "red",
                        height: 5,
                        opacity: 0.8,
                    }}/>
                    <div className="slogan">
                        Redefining the art of <span className="blue-span"> communicate</span>, one message at a time
                    </div>
                    <hr style={{
                        color: "red",
                        backgroundColor: "red",
                        height: 5,
                        opacity: 0.8,
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;