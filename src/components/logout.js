import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsLockFill, BsEnvelope } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";

const Logout = (props) => {
    const logout = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("currentDisc");
        props.setUser();
        window.location.href = "/";
    }
    return(
        <div className="login btn btn-primary" onClick={logout}>
            logout
        </div>
    )
}

export default Logout;