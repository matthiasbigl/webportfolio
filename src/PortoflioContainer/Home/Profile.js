import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import Footer from "./Footer/Footer";

export default function Profile() {
    return (
        <>
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>


                            <a href='https://www.instagram.com/matthias_bigl/' target="_blank">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/matthias-bigl-061a5419a/' target="_blank">
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://www.github.com/matthiasbigl' target="_blank">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                        <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I am <span className='highlighted-text'> Matthias Bigl</span>
                    </span>
                        </div>
                        <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical loop={Infinity}
                                         steps={[

                                             "Full Stack Developer",
                                             1500,
                                             "Java",
                                             1500,
                                             "Python",
                                             1500,
                                             "HTML & CSS",
                                             1500,
                                             "Javascript",
                                             1500,
                                             "React",
                                             1500,
                                         ]}/>
                            </h1>
                            <span className='profile-role-tagline'>
                                Make your Ideas come to Life with me as your Full Stack Developer
                            </span>

                        </span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'>
                                {" "}
                                Hire Me {" "}
                            </button>
                            <a href='../../../public/Lebenslauf.pdf' download='Lebenslauf.pdf'>
                                <button className='btn highlighted-btn'>Get resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>
                </div>
            </div>
        <Footer/>
            </>

            )


            }
