import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsLockFill, BsEnvelope } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";

const SignIn = (props) => { 
    const StyledLink = styled(Link)`
    display: inline-block;
    position: relative;
    color:white;
    font-size: none;
    text-decoration: underline;
    font-family: "Times New Roman", Times, serif;
    &:hover{
        color:rgba(0,0,121,255);
    }
    &:after{
        color:rgba(0,0,121,255);
    }
    `;
    const [signIn, setSignIn] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerification, setPasswordVerification] = useState("");
    const [mail, setMail] = useState("");
    const handleChange = () => {
        setSignIn(!signIn);
        setUsername("");
        setPassword("");
        setMail("");
    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        console.log(username);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }
    const onChangeMail = (e) => {
        setMail(e.target.value);
        console.log(mail);
    }
    const onChangePasswordVerification = (e) => {
        setPasswordVerification(e.target.value);
        console.log(passwordVerification);
    }

    async function onSubmit(e){
        e.preventDefault();
        if (signIn){
            console.log("logging in !")
            const User = {
                name: username,
                password: password,
            }
            let datas = await axios.get("http://localhost:3000/users/")
            .then(response => {
                return response.data
            })
            await datas.forEach((item) =>{
                if (item.username === User.name && item.password === User.password){
                    props.setUser(User);
                    window.localStorage.setItem("user", JSON.stringify(User));
                    window.location.href = "/";
                }
            })
            //axios request
            //if authentificated : 
            
        }
        else{
            if (password === passwordVerification && username !== "" && mail !== ""){
                const User = {
                    name: username,
                    mail: mail,
                    password: password,
                }
                //axios request
                //if success :
                props.setUser(User)
                console.log("signing up !")
            }
            else{
                console.log("bad request")
            }            
        }
    }

    return (
        <form className="login" onSubmit={onSubmit}>
            <div className="container1">
            <h1 className="title">{signIn ? "Log in":"Sign up"}</h1>
            <hr style={{height: 1, opacity: 1,}}/>
                {
                    signIn ? (
                        <div className="inputs">
                            Username : <div className="outline"><div className="icon-bg"><BsFillPersonFill className="icon" size="30"></BsFillPersonFill></div><input className="text input no-outline" type="text" onChange={onChangeUsername}/></div><br/><br/>
                            Password : <div><div className="icon-bg"><BsLockFill className="icon" size="30"></BsLockFill></div><input className="password input no-outline" type="password" onChange={onChangePassword}/></div><br/><br/>
                            <button type="submit" className="btn btn-primary">Log in</button><br/><br/>
                            <StyledLink to="" className="click-me" onClick={handleChange}>Don't have an account ? Sign up</StyledLink>
                        </div>
                    ) : (
                        <div className="inputs">
                            <div className="labels">
                            <div className="div-2"><div className="label2">Username : <br/></div><div className="outline div2"><div className="icon-bg"><BsFillPersonFill className="icon" size="30"></BsFillPersonFill></div><input className="text input no-outline" type="text" onChange={onChangeUsername}/></div><br/><br/></div>
                            <div className="div-2"><div className="label2">Mail : <br/></div><div className="outline div2"><div className="icon-bg"><BsEnvelope className="icon" size="30"></BsEnvelope></div><input className="text input no-outline" type="text" onChange={onChangeMail}/></div><br/><br/></div></div>
                            Password : <div className="outline"><div className="icon-bg"><BsLockFill className="icon" size="30"></BsLockFill></div><input className="text input no-outline" type="password" onChange={onChangePassword}/></div><br/><br/>
                            Confirm password : <div className="outline"><div className="icon-bg"><BsLockFill className="icon" size="30"></BsLockFill></div><input className="text input no-outline" type="password" onChange={onChangePasswordVerification}/></div><br/><br/>
                            <button type="submit" className="btn btn-primary">Sign up</button><br/><br/>
                            <StyledLink to="" className="click-me" onClick={handleChange}>Already have an account ? Sign in</StyledLink>
                        </div>
                        )
                }
                </div>
        </form>
    )
}

export default SignIn;