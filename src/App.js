import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Start from "./Pages/Start";
import InConstruction from "./Pages/InConstruction";
import'./index.css';



function App() {

    return(
        <div className="App">
            
            <Router>
            
                <Routes>
                    <Route path="/" element={<InConstruction/>}/>
                    <Route path="/inConstruction" element={<InConstruction/>}/>
                    <Route path="/start" element={<Start/>}/>
                </Routes>
            </Router>
        </div>




    );
}

export default App;
