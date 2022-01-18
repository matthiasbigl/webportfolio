import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Start from "./Pages/Start";
import InConstruction from "./Pages/InConstruction";
import Login from "./Pages/Chat/Login";
import'./index.css';
import socketClient  from "socket.io-client";

const SERVER = "http://127.0.0.1:3001";



function App() {
    const socket = socketClient (SERVER);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);

    });

    return(
        <div className="App">
            
            <Router>
            
                <Routes>
                    <Route>
                    <Route path="/" element={<InConstruction/>}/>
                    </Route>
                    <Route path="/webportfolio/" element={<InConstruction/>}/>
                    <Route path="/webportfolio/inConstruction" element={<InConstruction/>}/>
                    <Route path="/webportfolio/chat" element={<Login/>}/>
                    <Route path="/webportfolio/start" element={<Start/>}/>
                </Routes>
            </Router>
        </div>




    );
}

export default App;
