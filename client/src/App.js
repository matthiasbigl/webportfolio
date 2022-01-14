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
                    <Route>
                    <Route path="/" element={<InConstruction/>}/>
                    </Route>
                    <Route path="/webportfolio/" element={<InConstruction/>}/>
                    <Route path="webportfolio/inConstruction" element={<InConstruction/>}/>
                    <Route path="webportfolio/start" element={<Start/>}/>
                </Routes>
            </Router>
        </div>




    );
}

export default App;
