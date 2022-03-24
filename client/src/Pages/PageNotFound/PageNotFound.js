import React from "react";
import Typical from 'react-typical';
import './PageNotFound.css'
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function PageNotFound() {
    return (
        <div className="PageNotFound-container">
            <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1 className="Typical">
                                {" "}
                                <Typical loop={Infinity}
                                         steps={[
                                             "404",
                                             250,
                                             "40",
                                             250,
                                             "4",
                                             250,
                                             "404",
                                             1000,
                                             "LOOKS LIKE YOU ARE LOST",
                                             3000


                                         ]}/>

                            </h1>
                             <span className='ReturnToPage'>
                                Return to  the Start Page
                            </span>






                        </span>
                <div className="Button">
                    <Link to='/webportfolio/start'>
                        <Button type="submit" className='btn primary-btn'>
                            Return
                        </Button>
                    </Link>
                </div>

            </div>
        </div>


    );
}

