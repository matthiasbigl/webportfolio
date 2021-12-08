import React, { Component } from "react";
import "./Options.css";



class Option extends Component {



    render() {
        return (
            <div className="optin">
                <p className="Warning">Warning: many features wont work this is <strong>not a finished Product</strong></p>
                <p>Want to see the progress so far ?</p>
                <button className='btn primary-btn'> Sure</button>
            </div>
        );
    }
}

export default Option;
