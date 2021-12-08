import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Start from "./Pages/Start";
import InConstruction from "./Pages/InConstruction";





function App() {

    return (
        <div className="App">
            
            <Start/>
            <Router>
                <Routes>
                    <Route path="/webportfolio/" component={<InConstruction/>}/>
                    <Route path="/webportfolio/inConstruction" component={<InConstruction/>}/>
                    <Route path="/webportfolio/start" component={<Start/>}/>
                </Routes>
            </Router>
        </div>




    );
}

export default App;
