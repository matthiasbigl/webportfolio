import React from "react";
import './App.css';

import Profile from "./PortoflioContainer/Home/Profile";
import Footer from "./PortoflioContainer/Home/Footer/Footer";
import Navbar from "./PortoflioContainer/Navbar/navbar";
import ContactMe from "./PortoflioContainer/ContactMe/ContactMe";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
    return (
 <div className="App">
     <Navbar/>
     <Profile/>
     <Footer/>
     <ContactMe/>
     <Navbar/>

 </div>
    );
}

export default App;
