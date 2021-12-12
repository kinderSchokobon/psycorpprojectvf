import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import SignIn from "./components/signin";
import {ThemeContext, themes} from './components/themeContext';
import Cache from "./components/cache";
import Messages from "./components/messages";
import Logout from './components/logout';
import Posts from "./components/posts";
import AddDisc from './components/addDisc';
import AllRightsReserved from "./components/allrightsreserved";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    if (window.localStorage.getItem("user") !== null){
      console.log(window.localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [])
  useEffect(() => {
    console.log("a new name has been created")
  }, [user]);
  const [data, setData] = useState();
  console.log("refresh")
  return (
    <div className="App bg-dark">
      <BrowserRouter>
      <Cache/>
        <Navbar user={user}/>
        <AllRightsReserved/>
        <Routes>
            <Route exact path="/" element={<HomePage user={user} setUser={setUser}/>}/>
            <Route exact path="/posts" element={<Posts user={user}/>}/>
            {(user !== undefined) ? (<Route exact path="/messages" element={<Messages user={user} setUser={setUser}/>}/>) : (<Route/>)}
            <Route exact path="/signin" element={<SignIn user={user} setUser={setUser}/>}/>
            {(user !== undefined) ? (<Route exact path="/addDisc" element={<AddDisc user={user} setUser={setUser}/>}/>) : (<Route/>)}
            {(user !== undefined) ? (<Route exact path="/logout" element={<Logout user={user} setUser={setUser}/>}/>) : (<Route/>)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
