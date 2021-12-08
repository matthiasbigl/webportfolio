import React from "react";

import "../Style.css"

import Profile from "../PortoflioContainer/Home/Profile";
import Navbar from "../PortoflioContainer/Navbar/navbar";
import ContactMe from "../PortoflioContainer/ContactMe/ContactMe";
import Skills from "../PortoflioContainer/Skills/Skills"


export default function Start() {
    return (

 <div className="App">
     <Navbar/>
     <Profile/>

     <ContactMe/>

 </div>

    );
}

