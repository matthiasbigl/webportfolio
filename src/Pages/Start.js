import React from "react";


import Profile from "../PortoflioContainer/Home/Profile";
import Navbar from "../PortoflioContainer/Navbar/navbar";
import ContactMe from "../PortoflioContainer/ContactMe/ContactMe";
import Skills from "../PortoflioContainer/Skills/Skills"


export default function Start() {
    return (

 <div className="App">
     <Navbar/>
     <Profile/>
     <Skills/>
     <ContactMe/>

 </div>

    );
}

