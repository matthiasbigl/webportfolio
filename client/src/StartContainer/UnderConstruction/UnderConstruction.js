import React from "react";

import "../UnderConstruction.css";
import Preloader from "./Preloader/Preloader";
import Option from "./Options/Options";

export default function UnderConstruction() {
    return (
        <div className="UnderConstruction">
            <div className="container1">
            <Preloader/>
        <h1>
          Website
          <br />
         Under COnstruction
        </h1>
        <Option/>
            </div>
    
        </div>


    );
}
